'use server';

import { createOrder, type OrderData } from '@/app/lib/order';
import { revalidatePath } from 'next/cache';

export async function processOrder(orderData: OrderData) {
  try {
    const result = await createOrder(orderData);
    
    // Revalidate the cart and checkout pages
    revalidatePath('/cart');
    revalidatePath('/checkout');
    
    return {
      success: true,
      orderId: result.orderId,
    };
  } catch (error) {
    console.error('Order processing error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to process order',
    };
  }
} 