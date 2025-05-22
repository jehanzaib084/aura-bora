'use client';

import Image from 'next/image';

export default function Home() {
  const products = [
    {
      name: 'APPLE CINNAMON',
      description: 'spiced, crisp, juicy',
      img: '/can.png',
      bgHeader: 'bg-green-700',
      bgDesc: 'bg-white',
      bgFooter: 'bg-red-600',
    },
    {
      name: 'PUMPKIN SPICE',
      description: 'nutty, sweet, creamy',
      img: '/can.png',
      bgHeader: 'bg-[#992c4a]',
      bgDesc: 'bg-[#fdbb3f]',
      bgFooter: 'bg-[#cb77a3]',
    },
    {
      name: 'GREEN BEAN CASSEROLE',
      description: 'crunchy, succulent, fresh',
      img: '/can.png',
      bgHeader: 'bg-green-700',
      bgDesc: 'bg-green-100',
      bgFooter: 'bg-lime-300',
    },
    {
      name: 'HIBISCUS PASSIONFRUIT',
      description: 'floral, sweet, tart',
      img: '/can.png',
      bgHeader: 'bg-[#aaf0d1]',
      bgDesc: 'bg-white',
      bgFooter: 'bg-[#b2f5ea]',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex mb-4">
        <h1 className="text-[5rem] leading-none text-[#F5B54A] font-gliker text-stroke drop-shadow-stroke break-words">
          SHOP ALL
        </h1>
        <sup className="mt-4 font-mono text-md">(23)</sup>
      </div>

      {/* Grid */}
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-black rounded-lg overflow-hidden flex flex-col min-w-[320px] max-w-[400px] font-mono"
          >
            {/* Header */}
            <div className={`${product.bgHeader} text-center py-2 border-b`}>
              <h3 className="text-md">{product.name}</h3>
            </div>
            {/* Description */}
            <div className={`${product.bgDesc} text-center py-2 rounded-b border-b`}>
              <p className="text-sm">{product.description}</p>
            </div>
            {/* Image */}
            <div className="relative w-full h-100 bg-white">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="p-3 bg-[#FFF9ED]"
              />
            </div>

            <div className="flex flex-col flex-grow">
                <button
                  className={`${product.bgFooter} text-center border-t text-xs uppercase tracking-wide flex flex-row justify-between w-full py-2 px-3 cursor-pointer hover:bg-[#FFF9ED]`}
                  aria-label={`Add ${product.name} to your cart`}
                >
                  <span className="flex flex-col">
                    <span>Add to Cart</span>
                    <span className="flex gap-1">
                      <span className="text-xs font-semibold" data-package-size="12">12 cans</span>
                    </span>
                  </span>
                  <span className="flex items-center">
                    <span className="font-bold">$33</span>
                  </span>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
