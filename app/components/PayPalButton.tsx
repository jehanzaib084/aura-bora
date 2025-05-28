/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';

interface PayPalButtonProps {
  amount: number;
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  onSuccess?: (details: {
    captureId: string;
    status: string;
    payerEmail?: string;
    payerName?: string;
  }) => void;
  onError?: (error: Error) => void;
  disabled?: boolean;
}

export default function PayPalButton({
  amount,
  items,
  onSuccess,
  onError,
  disabled = false,
}: PayPalButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const createOrder = async () => {
    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          items,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      return data.orderID;
    } catch (error) {
      console.error('Create Order Error:', error);
      onError?.(error instanceof Error ? error : new Error('Failed to create order'));
      throw error;
    }
  };

  const onApprove = async (_: unknown, actions: any) => {
    setIsProcessing(true);
    try {
      const order = await actions.order.capture();
      
      const verifyRes = await fetch('/api/paypal/verify-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          orderID: order.id,
          captureID: order.purchase_units[0].payments.captures[0].id,
        }),
      });

      const result = await verifyRes.json();

      if (!verifyRes.ok || !result.success) {
        throw new Error(result.error || 'Payment verification failed');
      }

      onSuccess?.({
        captureId: result.data.captureID,
        status: result.data.captureStatus,
        payerEmail: result.data.payerEmail,
        payerName: result.data.payerName,
      });
    } catch (error) {
      console.error('Payment failed:', error);
      onError?.(error instanceof Error ? error : new Error('Unknown error'));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
        currency: 'USD',
        intent: 'capture',
        components: 'buttons',
        'disable-funding': 'card,credit,venmo,bancontact,blik,eps,giropay,ideal,mybank,p24,sepa,sofort,paylater',
      }}
    >
      <div className="w-full">
        <PayPalButtons
          style={{
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'pay',
          }}
          disabled={isProcessing || disabled}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => {
            console.error('PayPal Error:', err);
            onError?.(new Error('PayPal payment failed'));
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
} 