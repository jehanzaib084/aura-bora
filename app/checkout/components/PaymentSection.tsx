'use client';

import { useState } from 'react';
import PayPalButton from '@/app/components/PayPalButton';
import { CartItem } from '@/app/context/CartContext';
import { CreditCard } from 'lucide-react';
import Image from 'next/image';

interface PaymentSectionProps {
  items: CartItem[];
  totalPrice: number;
  isProcessing: boolean;
  onPayPalSuccess: (details: {
    captureId: string;
    status: string;
    payerEmail?: string;
    payerName?: string;
  }) => void;
  onPayPalError: (error: { message: string }) => void;
  isFormValid: boolean;
}

export default function PaymentSection({
  items,
  totalPrice,
  isProcessing,
  onPayPalSuccess,
  onPayPalError,
  isFormValid,
}: PaymentSectionProps) {
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('paypal');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [cardError, setCardError] = useState<string | null>(null);

  const handlePayPalError = (error: { message: string }) => {
    if (!isFormValid) {
      setShowValidationMessage(true);
    }
    onPayPalError(error);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    setCardError(null);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowValidationMessage(true);
      return;
    }
    // Here you would integrate with a real card processor (Stripe, etc.)
    if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvc) {
      setCardError('Please fill in all card details.');
      return;
    }
    // Simulate card payment processing
    setCardError('Card payment is not implemented in this demo.');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <div className="space-y-4">
        <div className="flex flex-row gap-4">
          <label className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-black' : 'border-gray-300'}`}>
            <input
              type="radio"
              name="paymentMethod"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="w-4 h-4 accent-black"
            />
            <CreditCard className="w-5 h-5" />
            <span>Credit Card</span>
          </label>
          <label className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'border-black' : 'border-gray-300'}`}>
            <input
              type="radio"
              name="paymentMethod"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="w-4 h-4 accent-black"
            />
            <Image src="/paypal-logo.png" alt="PayPal" width={24} height={24} />
            <span>PayPal</span>
          </label>
        </div>
        {showValidationMessage && !isFormValid && (
          <div className="p-4 bg-yellow-50 text-yellow-700 rounded-lg">
            Please fill in all required fields before proceeding with payment.
          </div>
        )}
        {paymentMethod === 'card' ? (
          <form onSubmit={handleCardSubmit} className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardInputChange}
              className="w-full p-3 border rounded-lg"
              disabled={isProcessing}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleCardInputChange}
                className="p-3 border rounded-lg"
                disabled={isProcessing}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={handleCardInputChange}
                className="p-3 border rounded-lg"
                disabled={isProcessing}
              />
            </div>
            <button
              type="submit"
              disabled={isProcessing || !isFormValid}
              className="w-full bg-[#F5B54A] text-black py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e5a53a] transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Pay'}
            </button>
            {cardError && <div className="text-red-600 text-sm mt-2">{cardError}</div>}
          </form>
        ) : (
          <PayPalButton
            amount={totalPrice}
            items={items.map(item => ({
              name: item.name,
              quantity: item.quantity,
              price: 33,
            }))}
            onSuccess={onPayPalSuccess}
            onError={handlePayPalError}
            disabled={!isFormValid || isProcessing}
          />
        )}
      </div>
    </div>
  );
} 