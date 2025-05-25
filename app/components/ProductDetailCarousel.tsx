'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';

const images = ['/can.png', '/pumpkin_nt.webp', '/pumpkin_show.webp'];

export default function ProductDetailCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Listen for slide change
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Go to slide
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Embla viewport */}
      <div
        className="overflow-hidden w-full h-full cursor-grab active:cursor-grabbing"
        ref={emblaRef}
        aria-label="Product images carousel"
      >
        <div className="flex h-full">
          {images.map((src, idx) => (
            <div
              className="flex-[0_0_100%] flex items-center justify-center min-h-[400px] relative"
              key={src}
            >
              <Image
                src={src}
                alt={`Aura Bora Product View ${idx + 1}`}
                fill
                className="object-contain"
                sizes="(max-height: 768px) 60vh, 33vh"
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label={`View product image ${i + 1}`}
            tabIndex={0}
            type="button"
          >
            {i === selectedIndex ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6 fill-white"
                aria-hidden="true"
              >
                <path d="M8 2C4 2 0.7 6 0 8c0.7 2 4 6 8 6s7.3-4 8-6c-0.7-2-4-6-8-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              </svg>
            ) : (
              <div className="w-4 h-4 rounded-full bg-white" aria-hidden="true"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
