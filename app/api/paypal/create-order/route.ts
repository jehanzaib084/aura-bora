import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for request validation
const createOrderSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().default('USD'),
  items: z.array(z.object({
    name: z.string(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
  })).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = createOrderSchema.parse(body);

    const auth = await getPayPalAccessToken();
    const orderRes = await fetch(`${process.env.PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: validatedData.currency,
              value: validatedData.amount.toString(),
              breakdown: validatedData.items ? {
                item_total: {
                  currency_code: validatedData.currency,
                  value: validatedData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toString()
                }
              } : undefined
            },
            items: validatedData.items?.map(item => ({
              name: item.name,
              quantity: item.quantity.toString(),
              unit_amount: {
                currency_code: validatedData.currency,
                value: item.price.toString()
              }
            }))
          },
        ],
        application_context: {
          shipping_preference: 'NO_SHIPPING',
          brand_name: 'Aura Bora',
          user_action: 'PAY_NOW',
        },
      }),
    });

    const data = await orderRes.json();

    if (!orderRes.ok) {
      console.error('PayPal API Error:', data);
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      );
    }

    return NextResponse.json({ orderID: data.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create Order Error:', error);
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