/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { CartItem } from '@/app/context/CartContext';
import PayPalCheckout from './PayPalButton';

interface PaymentSectionProps {
  items: CartItem[];
  totalPrice: number;
  isFormValid: boolean;
}

export default function PaymentSection({ items, totalPrice, isFormValid }: PaymentSectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <div className="space-y-4">
        <PayPalCheckout amount={totalPrice} disabled={!isFormValid} />
      </div>
    </div>
  );
} 