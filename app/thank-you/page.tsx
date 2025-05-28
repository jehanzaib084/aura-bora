'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF6] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We will send you an email confirmation with your order details.
        </p>
        <div className="space-y-4">
          <Link
            href="/shop-all"
            className="block w-full bg-[#F5B54A] text-black py-3 rounded-lg font-semibold hover:bg-[#e5a53a] transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="block w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 