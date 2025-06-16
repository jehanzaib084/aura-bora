import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Aura Bora",
  description: "Complete your purchase on Aura Bora. Secure and easy checkout for sparkling water with real fruit and herbs.",
  robots: {
    index: false, // Do not index checkout pages
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFFDF6]">
      {children}
    </div>
  );
} 