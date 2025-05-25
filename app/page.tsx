/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import Link from 'next/link';


import StoryCard from '@/app/components/StoryCard';

export default function Home() {
  const products = [
    {
      name: 'APPLE CINNAMON',
      slug: 'apple-cinnamon',
      description: 'spiced, crisp, juicy',
      img: '/can.png',
      bgHeader: 'bg-green-700',
      bgDesc: 'bg-white',
      bgFooter: 'bg-red-600',
    },
    {
      name: 'PUMPKIN SPICE',
      slug: 'pumpkin-spice',
      description: 'nutty, sweet, creamy',
      img: '/can.png',
      bgHeader: 'bg-[#992c4a]',
      bgDesc: 'bg-[#fdbb3f]',
      bgFooter: 'bg-[#cb77a3]',
    },
    {
      name: 'GREEN BEAN CASSEROLE',
      slug: 'green-bean-casserole',
      description: 'crunchy, succulent, fresh',
      img: '/can.png',
      bgHeader: 'bg-green-700',
      bgDesc: 'bg-green-100',
      bgFooter: 'bg-lime-300',
    },
    {
      name: 'HIBISCUS PASSIONFRUIT',
      slug: 'hibiscus-passionfruit',
      description: 'floral, sweet, tart',
      img: '/can.png',
      bgHeader: 'bg-[#aaf0d1]',
      bgDesc: 'bg-white',
      bgFooter: 'bg-[#b2f5ea]',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-mono bg-[#FFF9ED]">
      {/* Centered outer container with vertical padding */}
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col items-center">

        {/* Content wrapper with consistent spacing */}
        <div className="w-full flex flex-col">

          {/* Intro text */}
          <p className="text-xl">
            Aura Bora is a
          </p>

          {/* SVG / Story Illustration */}
          <div className="w-full">
            <StoryCard />
          </div>

          {/* Description text */}
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
    </div>
  );


} 
