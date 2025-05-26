import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type Product = {
  name: string;
  slug: string;
  documentId: string;
  description: string;
  img: string;
  bgHeader: string;
  bgDesc: string;
  bgFooter: string;
  detailPageBgColor: string;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="20%" />
      <stop stop-color="#e5e7eb" offset="50%" />
      <stop stop-color="#f3f4f6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="border border-black rounded-lg overflow-hidden flex flex-col min-w-[220px] max-w-[280px] font-mono bg-[#FFF9ED]">
      <Link href={`/${product.slug}`} className="flex flex-col flex-grow">
        {/* Header */}
        <div className="text-center py-3 border-b" style={{ backgroundColor: product.bgHeader }}>
          <h3 className="text-xs">{product.name}</h3>
        </div>
        {/* Description */}
        <div className="text-center py-1 border-b" style={{ backgroundColor: product.bgDesc }}>
          <p className="text-xs">{product.description}</p>
        </div>
        {/* Image */}
        <div className="w-full min-h-[160px] flex items-center justify-center p-3 bg-[#FFF9ED] relative">
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={260}
            className={`
              object-contain max-w-[200px] max-h-[260px]
              duration-700 ease-in-out
              ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
            `}
            priority={index === 0}
            onLoad={() => setIsLoading(false)}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 260))}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      {/* Cart Button */}
      <div className="flex flex-col flex-grow">
        <button
          className="text-center border-t uppercase tracking-wide flex flex-row justify-between w-full py-1 px-3 cursor-pointer hover:bg-[#FFF9ED]"
          style={{ backgroundColor: product.bgFooter }}
          aria-label={`Add ${product.name} to your cart`}
        >
          <span className="flex flex-col">
            <span className="text-xs">Add to Cart</span>
            <span className="flex gap-1">
              <span className="text-xs font-semibold" data-package-size="12">12 cans</span>
            </span>
          </span>
          <span className="flex items-center">
            <span className="text-xs font-bold">$33</span>
          </span>
        </button>
      </div>
    </div>
  );
}