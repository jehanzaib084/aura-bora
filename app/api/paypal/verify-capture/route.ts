import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for request validation
const verifyCaptureSchema = z.object({
  orderID: z.string().min(1),
  captureID: z.string().optional(),
});

// Zod schema for PayPal response validation
const paypalOrderSchema = z.object({
  id: z.string(),
  status: z.string(),
  payer: z.object({
    email_address: z.string().email(),
    name: z.object({
      given_name: z.string(),
      surname: z.string(),
    }),
  }).optional(),
  purchase_units: z.array(z.object({
    amount: z.object({
      currency_code: z.string(),
      value: z.string(),
    }),
    shipping: z.object({
      address: z.object({
        address_line_1: z.string(),
        admin_area_2: z.string(),
        admin_area_1: z.string(),
        postal_code: z.string(),
        country_code: z.string(),
      }),
    }).optional(),
  })),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = verifyCaptureSchema.parse(body);

    const accessToken = await getPayPalAccessToken();
    const res = await fetch(
      `${process.env.PAYPAL_API_BASE}/v2/checkout/orders/${validatedData.orderID}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await res.json();
    const validatedPayPalData = paypalOrderSchema.parse(data);

    if (!res.ok || validatedPayPalData.status !== 'COMPLETED') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Payment not completed or invalid',
          details: validatedPayPalData 
        },
        { status: 400 }
      );
    }

    // Here you would typically save the order to your database
    // await saveOrderToDatabase(validatedPayPalData);

    return NextResponse.json({
      success: true,
      data: {
        captureID: validatedPayPalData.id,
        captureStatus: validatedPayPalData.status,
        payerEmail: validatedPayPalData.payer?.email_address,
        payerName: validatedPayPalData.payer?.name?.given_name,
        amount: validatedPayPalData.purchase_units[0].amount,
        shipping: validatedPayPalData.purchase_units[0].shipping,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Verify Capture Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64');

  const res = await fetch(`${process.env.PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await res.json();
  
  if (!res.ok) {
    throw new Error('Failed to get PayPal access token');
  }

  return data.access_token;
} 