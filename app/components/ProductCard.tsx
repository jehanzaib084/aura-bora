import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  name: string;
  slug: string;
  description: string;
  img: string;
  bgHeader: string;
  bgDesc: string;
  bgFooter: string;
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div className="border border-black rounded-lg overflow-hidden flex flex-col min-w-[220px] max-w-[280px] font-mono bg-[#FFF9ED]">
      <Link href={`/${product.slug}`} className="flex flex-col flex-grow">
        {/* Header */}
        <div className={`${product.bgHeader} text-center py-3 border-b`}>
          <h3 className="text-xs">{product.name}</h3>
        </div>
        {/* Description */}
        <div className={`${product.bgDesc} text-center py-1 border-b`}>
          <p className="text-xs">{product.description}</p>
        </div>
        {/* Image */}
        <div className="w-full min-h-[160px] flex items-center justify-center p-3 bg-[#FFF9ED]">
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={260}
            className="object-contain max-w-[200px] max-h-[260px]"
            priority={index === 0}
          />
        </div>
      </Link>
      {/* Cart Button */}
      <div className="flex flex-col flex-grow">
        <button
          className={`${product.bgFooter} text-center border-t uppercase tracking-wide flex flex-row justify-between w-full py-1 px-3 cursor-pointer hover:bg-[#FFF9ED]`}
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