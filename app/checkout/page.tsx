'use client';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import CheckoutForm, { UserDetails } from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import PaymentSection from './components/PaymentSection';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = (details: UserDetails) => {
    try {
      console.log('Form submitted:', details);
      // Here you would typically send the order to your backend
    } catch {
      setError('Failed to process order. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-16 h-16 mb-4 text-gray-400" />
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link
          href="/shop-all"
          className="inline-block bg-[#F5B54A] text-black px-6 py-3 rounded-full hover:bg-[#e5a53a] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF6]">      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            {error && (
              <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}
            <CheckoutForm
              onSubmit={handleFormSubmit}
              isProcessing={false}
              onFormStateChange={setIsFormValid}
            />
            <PaymentSection
              items={items}
              totalPrice={totalPrice}
              isFormValid={isFormValid}
            />
          </div>
          {/* Right Column - Order Summary */}
          <OrderSummary items={items} totalPrice={totalPrice} />
        </div>
      </main>
    </div>
  );
} 