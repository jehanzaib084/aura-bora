import { z } from 'zod';

// Order validation schema
export const orderSchema = z.object({
  items: z.array(z.object({
    documentId: z.string(),
    name: z.string(),
    quantity: z.number().int().positive(),
    img: z.string().url(),
    description: z.string(),
    // Make price optional since it's calculated from the cart
    price: z.number().positive().optional(),
  })),
  userDetails: z.object({
    email: z.string().email(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zipCode: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
  }),
  paymentDetails: z.object({
    captureId: z.string(),
    status: z.string(),
    payerEmail: z.string().email().optional(),
    payerName: z.string().optional(),
  }),
  totalPrice: z.number().positive(),
});

export type OrderData = z.infer<typeof orderSchema>;

export async function createOrder(orderData: OrderData) {
  try {
    // Validate the order data
    const validatedData = orderSchema.parse(orderData);

    // Here you would typically:
    // 1. Save the order to your database
    // 2. Send confirmation emails
    // 3. Update inventory
    // 4. Create shipping labels
    // etc.

    // For now, we'll just return a success response
    return {
      success: true,
      orderId: `ORD-${Date.now()}`,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Invalid order data: ${error.message}`);
    }
    throw error;
  }
} 