import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from './context/CartContext';
// import CartDrawerTrigger from './components/CartDrawerTrigger';
import Header from './components/Header';

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Load the Gliker font from the local 'gliker' folder
const gliker = localFont({
  src: [
    {
      path: "../gliker/Gliker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../gliker/Gliker-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gliker",
});

export const metadata: Metadata = {
  title: "Aura Bora | Sparkling Water with Real Fruit & Herbs",
  description: "Discover Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients. Try our unique flavors today!",
  keywords: "sparkling water, fruit water, herbal water, zero sugar, healthy drinks, natural beverages, Aura Bora",
  authors: [{ name: "Aura Bora" }],
  creator: "Aura Bora",
  publisher: "Aura Bora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aura084.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aura Bora | Sparkling Water with Real Fruit & Herbs",
    description: "Discover Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients.",
    url: 'https://aura084.vercel.app',
    siteName: 'Aura Bora',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aura Bora Sparkling Water',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aura Bora | Sparkling Water with Real Fruit & Herbs",
    description: "Discover Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients.",
    images: ['/og-image.png'],
    creator: '@aurabora',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${spaceMono.variable} ${gliker.variable} antialiased`}
      >
        <CartProvider>
          {/* <CartDrawerTrigger /> */}
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
