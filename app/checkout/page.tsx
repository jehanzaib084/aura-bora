'use client';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { processOrder } from '@/app/actions/order';
import type { OrderData } from '@/app/lib/order';
import CheckoutForm, { UserDetails } from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import PaymentSection from './components/PaymentSection';

// Constants
const FIXED_ITEM_PRICE = 33;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const handleFormSubmit = (details: UserDetails) => {
    setUserDetails(details);
  };

  const handlePayPalSuccess = async (details: {
    captureId: string;
    status: string;
    payerEmail?: string;
    payerName?: string;
  }) => {
    if (!userDetails) return;
    
    try {
      setIsProcessing(true);
      
      // Prepare order data
      const orderData: OrderData = {
        items: items.map(item => ({
          documentId: item.documentId,
          name: item.name,
          quantity: item.quantity,
          img: item.img,
          description: item.description,
          price: FIXED_ITEM_PRICE,
        })),
        userDetails: {
          email: userDetails.email.trim(),
          firstName: userDetails.firstName.trim(),
          lastName: userDetails.lastName.trim(),
          address: userDetails.address.trim(),
          city: userDetails.city.trim(),
          state: userDetails.state.trim(),
          zipCode: userDetails.zipCode.trim(),
          country: userDetails.country.trim(),
          phone: userDetails.phone.trim(),
        },
        paymentDetails: {
          captureId: details.captureId,
          status: details.status,
          payerEmail: details.payerEmail,
          payerName: details.payerName,
        },
        totalPrice,
      };

      // Process the order using server action
      const result = await processOrder(orderData);

      if (!result.success) {
        throw new Error(result.error || 'Failed to process order');
      }

      clearCart();
      router.push('/thank-you');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to process order. Please contact support.');
      console.error('Order processing error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayPalError = (error: { message: string }) => {
    setError('Payment failed. Please try again.');
    console.error('Payment Error:', error);
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
      {/* Header */}
      <header className="bg-white shadow-sm py-4 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Aura Bora"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
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
              isProcessing={isProcessing}
            />
            <PaymentSection
              items={items}
              totalPrice={totalPrice}
              isProcessing={isProcessing}
              onPayPalSuccess={handlePayPalSuccess}
              onPayPalError={handlePayPalError}
              isFormValid={!!userDetails}
            />
          </div>

          {/* Right Column - Order Summary */}
          <OrderSummary items={items} totalPrice={totalPrice} />
        </div>
      </main>
    </div>
  );
} 