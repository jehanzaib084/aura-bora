'use client';

import Link from 'next/link';
import ProductCard, { Product as ProductCardType } from '@/app/components/ProductCard';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';

// Client component for the carousel
export default function HomeCarousel({ initialProducts }: { initialProducts: ProductCardType[] }) {
  const [products] = useState<ProductCardType[]>(initialProducts || []);

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  // Add scroll handlers
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  if (!products || products.length === 0) {
    return (
      <div className="w-full px-4 mt-12">
        <div className="w-full flex flex-col mb-3 lg:mb-0 lg:flex-row items-center md:justify-between">
          <h2 className="text-[2rem] lg:text-[5rem] text-center lg:text-left font-gliker text-white text-stroke drop-shadow-stroke-2">
            OUR FLAVORS
          </h2>
          <Link href={`/shop-all`} className="w-full lg:w-auto bg-[#F5B54A] text-center uppercase px-6 py-1 lg:py-3 rounded-full border">
            DRINKS
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="border border-black rounded-lg overflow-hidden flex flex-col min-w-[220px] max-w-[280px] font-mono bg-[#FFF9ED] animate-pulse">
                    {/* Header Skeleton */}
                    <div className="h-12 bg-gray-200 border-b" />
                    {/* Description Skeleton */}
                    <div className="h-8 bg-gray-100 border-b" />
                    {/* Image Skeleton */}
                    <div className="w-full min-h-[160px] flex items-center justify-center p-3 bg-[#FFF9ED]">
                      <div className="w-[200px] h-[260px] bg-gray-200" />
                    </div>
                    {/* Button Skeleton */}
                    <div className="h-12 bg-gray-200 border-t" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 mt-12">
      <div className="w-full flex flex-col mb-3 lg:mb-0 lg:flex-row items-center md:justify-between">
        <h2 className="text-[2rem] lg:text-[5rem] text-center lg:text-left font-gliker text-white text-stroke drop-shadow-stroke-2">
          OUR FLAVORS
        </h2>
        <Link href={`/shop-all`} className="w-full lg:w-auto bg-[#F5B54A] text-center uppercase px-6 py-1 lg:py-3 rounded-full border">
          DRINKS
        </Link>
      </div>
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!prevBtnEnabled}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 p-2 transition-opacity duration-200 ${prevBtnEnabled ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
        >
          <svg
            className="w-10 h-10"
            viewBox="0 0 55 37"
            fill="#ffffff"
            stroke="#000"
            strokeWidth="1.5"
            fillRule="evenodd"
            aria-hidden="true"
          >
            <path d="m15.35 35.16.4.62.62-.38 5.3-3.24.65-.4-.41-.64-1.65-2.6a40.58 40.58 0 0 0-4.78-6.01h38.93v-7.39H15.77a35.37 35.37 0 0 0 4.56-6.1l1.55-2.66.38-.66-.66-.37-5.42-3.03-.64-.36-.37.64-1.55 2.65a31.4 31.4 0 0 1-6.49 7.6c-1.06.92-2 1.64-2.67 2.12l.44.6-.44-.6c-.33.24-.6.41-.77.53l-.18.12-.04.03a3.78 3.78 0 0 0-.18 6.3l.05.03.2.15.44-.6-.44.6.8.6c.68.54 1.65 1.33 2.74 2.32 2.2 1.99 4.79 4.65 6.62 7.54l1.65 2.59Z"></path>
          </svg>
        </button>
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {products.map((product: ProductCardType, index: number) => (
              <div className="flex-shrink-0" key={product.slug}>
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!nextBtnEnabled}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 p-2 transition-opacity duration-200 ${nextBtnEnabled ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
        >
          <svg
            className="w-10 h-10"
            viewBox="0 0 55 37"
            fill="#ffffff"
            stroke="#000"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m40.26 2.429-.395-.622-.629.384-5.292 3.232-.652.399.41.644 1.65 2.593c1.416 2.227 3.114 4.267 4.774 6.02H1.196v7.389H39.84c-1.6 1.735-3.212 3.783-4.565 6.103l-1.546 2.653-.385.66.666.373 5.415 3.03.643.36.372-.637 1.546-2.653c1.812-3.108 4.34-5.722 6.494-7.594a37.774 37.774 0 0 1 2.67-2.122c.333-.239.594-.417.765-.532l-.416-.623.416.623.185-.121.036-.023.001-.001.002-.002a3.793 3.793 0 0 0 1.79-3.099 3.785 3.785 0 0 0-1.608-3.2l-.003-.002-.002-.002-.044-.031-.2-.147c-.181-.134-.453-.34-.797-.609a52.528 52.528 0 0 1-2.743-2.31c-2.212-1.993-4.788-4.656-6.623-7.54L40.26 2.429Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}