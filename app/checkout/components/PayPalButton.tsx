import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

interface PayPalCheckoutProps {
  amount: number;
  disabled?: boolean;
}

export default function PayPalCheckout({ amount, disabled }: PayPalCheckoutProps) {
  const router = useRouter();
  const { clearCart } = useCart();

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "USD",
        intent: "capture",
        components: "buttons",
        // Only show PayPal button
        "disable-funding": "card,paylater,venmo",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
        forceReRender={[amount]}
        createOrder={(data, actions) => {
          if (!actions.order) {
            console.error("PayPal: actions.order is undefined");
            return Promise.reject("PayPal: actions.order is undefined");
          }
          console.log("PayPal: createOrder", { data, amount });
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: String(amount),
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (!actions.order) {
            console.error("PayPal: actions.order is undefined");
            return;
          }
          console.log("PayPal: onApprove", data);
          const details = await actions.order.capture();
          console.log("PayPal: capture details", details);
          
          // Clear cart and redirect on success
          clearCart();
          router.push('/thank-you');
        }}
        onCancel={() => {
          console.log("PayPal: Payment cancelled");
        }}
        onError={(err) => {
          console.error("PayPal: onError", err);
        }}
        onClick={(data) => {
          console.log("PayPal: onClick", data);
        }}
        disabled={disabled}
      />
    </PayPalScriptProvider>
  );
}