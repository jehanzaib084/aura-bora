import Image from 'next/image';
import Link from 'next/link';
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
      {children}
    </div>
  );
} 