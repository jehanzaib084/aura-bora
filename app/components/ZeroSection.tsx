'use client';

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    title: "Artificial Flavors",
    description: "We never use artificial ingredients. We source high-quality and delicious plant extracts and flavors.",
  },
  {
    title: "Sweeteners",
    description: "No sweeteners like Stevia, monkfruit, or aspartame here. Our drinks get their mild sweetness from real herbs and fruits!",
  },
  {
    title: "Citric Acid",
    description: "Unlike other sparkling water brands, we never add citric acid. That means no headaches, bitter tastes, or upset stomachs.",
  },
  {
    title: "Sugar",
    description: "Many sparkling waters use sugary syrups or additives. Don't worry, our drinks are all sugar-free!",
  },
  {
    title: "Calories",
    description: "No calories here. Our drinks are just purified water, earthly tastes, and heavenly feelings.",
  }
];

export default function ZeroSection() {
  const initialIndex = 2; // Start from 3rd item
  const [active, setActive] = useState(initialIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Disable loop to avoid teleport effect
    align: "center",
    skipSnaps: false,
    containScroll: "keepSnaps", // Ensure all items are selectable
  });

  // Scroll to initial index on mount
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(initialIndex, true); // true = jump instantly
  }, [emblaApi]);

  // Track selection changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActive(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="w-full flex flex-col pt-4 pb-6 mt-12 border-t-[1.5] bg-[#FDE4AA]">
      <div className="lowercase text-white text-center font-gliker text-[8rem] lg:text-[14rem] text-stroke drop-shadow-stroke">
        Zero
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden mt-2" ref={emblaRef}>
        <div className="flex gap-10 px-6 touch-pan-x will-change-transform">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`flex-shrink-0 uppercase font-semibold text-3xl text-white transition-all duration-300 snap-center px-6 py-2 rounded text-stroke drop-shadow-stroke min-w-[12rem]
                ${active === idx
                  ? "scale-110"
                  : "opacity-60 hover:opacity-90 "
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Description */}
      <div className="relative h-40 mt-8 overflow-hidden">
        {items.map((item, idx) => (
          <p
            key={idx}
            className={`absolute left-1/2 transform -translate-x-1/2 max-w-lg text-center text-lg font-light transition-all duration-500 ease-in-out
              ${active === idx
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
              }
              overflow-hidden leading-snug
            `}
          >
            {item.description}
          </p>
        ))}
      </div>
    </div>
  );
}
