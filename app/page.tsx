import StoryCard from '@/app/components/StoryCard';
import ZeroSection from '@/app/components/ZeroSection';
import SocialLinks from '@/app/components/SocialLinks';
import CustomTestimonialGrid from './components/TestimonialGrid';
import HomeCarouselWrapper from './components/HomeCarouselWrapper';
import type { Metadata } from "next";

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

export default async function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-mono bg-[#FFF9ED]">
      
      {/* HomePage Story Card */}
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col items-center">
        <div className="w-full flex flex-col">
          <p className="text-xl">
            Aura Bora is a
          </p>
          <div className="w-full">
            <StoryCard />
          </div>
          <div className="w-full max-w-xl">
            <p className="text-lg">
              No added sugar, sweeteners, citric acid,
            </p>
            <p className="text-lg">
              or artificial ingredients.
            </p>
          </div>
        </div>
      </div>
      {/* HomePage Story Card END*/}

      {/* Marquee Carousel Animation */}
      <div className="relative w-full overflow-hidden whitespace-nowrap bg-rainbow py-2 border-t-1 border-b-[1.5]">
        <div className="flex animate-marquee">
          <div className="flex shrink-0 items-center space-x-6 px-4">
            <span className="inline-block mx-6 bullet-before">Zero Sugar</span>
            <span className="inline-block mx-6 bullet-before">Whole30</span>
            <span className="inline-block mx-6 bullet-before">Kosher</span>
            <span className="inline-block mx-6 bullet-before">1% for the Planet</span>
            <span className="inline-block mx-6 bullet-before">Vegan</span>
            <span className="inline-block mx-6 bullet-before">Zero Sweeteners</span>
            <span className="inline-block mx-6 bullet-before">Zero Sodium</span>
            <span className="inline-block mx-6 bullet-before">Zero Calories</span>
            <span className="inline-block mx-6 bullet-before">Zero Sugar</span>
            <span className="inline-block mx-6 bullet-before">Whole30</span>
            <span className="inline-block mx-6 bullet-before">Kosher</span>
            <span className="inline-block mx-6 bullet-before">1% for the Planet</span>
            <span className="inline-block mx-6 bullet-before">Vegan</span>
            <span className="inline-block mx-6 bullet-before">Zero Sweeteners</span>
            <span className="inline-block mx-6 bullet-before">Zero Sodium</span>
            <span className="inline-block mx-6 bullet-before">Zero Calories</span>
          </div>
        </div>
      </div>
      {/* Marquee Carousel Animation END */}

      <HomeCarouselWrapper />

      <ZeroSection />

      <CustomTestimonialGrid />

      <SocialLinks />
  
    </div>
  );
} 
