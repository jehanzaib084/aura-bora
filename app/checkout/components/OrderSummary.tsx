'use client';

import Image from 'next/image';
import { CartItem } from '@/app/context/CartContext';

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
}

export default function OrderSummary({ items, totalPrice }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.documentId} className="flex items-center gap-4 border-b py-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={item.img} alt={item.name} fill className="object-contain rounded" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
              <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
            </div>
            <div className="font-bold">${(item.quantity * 33).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg mt-4 pt-4 border-t">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
} 