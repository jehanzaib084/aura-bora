'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Thank You for Your Order!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your payment has been processed successfully. We will send you an email confirmation shortly.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F5B54A] hover:bg-[#e5a53a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5B54A]"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 