'use client';

import { useState, useEffect } from 'react';
import ProductCard, { Product as ProductCardType } from '@/app/components/ProductCard';

interface ApiProduct {
  name: string;
  slug: string;
  documentId: string;
  mainImage: {
    url: string;
  };
  bgHeaderColor: string;
  shortDescription: string;
  headerBgColor: string;
  titleBgColor: string;
  subtitleBgColor: string;
  detailPageBgColor: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://tidy-poem-da6686702e.strapiapp.com/api/products?populate=mainImage');
        const data = await response.json();
        
        // Transform API data to match ProductCard type
        const transformedProducts = data.data.map((item: ApiProduct) => ({
          name: item.name,
          slug: item.slug,
          documentId: item.documentId,
          description: item.shortDescription,
          img: item.mainImage.url,
          bgHeader: item.headerBgColor,
          bgDesc: item.titleBgColor,
          bgFooter: item.subtitleBgColor,
          detailPageBgColor: item.detailPageBgColor
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-mono bg-[#FFFEF6]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex mb-4">
          <h1 className="text-[3rem] lg:text-[5rem] leading-none text-[#F5B54A] font-gliker text-stroke drop-shadow-stroke break-words">
            SHOP ALL
          </h1>
          <sup className="mt-4 font-mono text-md">({products.length})</sup>
        </div>

        {/* Grid */}
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {loading ? (
            // Skeleton Loaders
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="border border-black rounded-lg overflow-hidden flex flex-col min-w-[260px] max-w-[280px] font-mono bg-[#FFF9ED] animate-pulse">
                {/* Header Skeleton */}
                <div className="h-16 bg-gray-200 border-b" />
                {/* Description Skeleton */}
                <div className="h-12 bg-gray-100 border-b" />
                {/* Image Skeleton */}
                <div className="w-full min-h-[160px] flex items-center justify-center p-3 bg-[#FFF9ED]">
                  <div className="w-[200px] h-[300px] bg-gray-200" />
                </div>
                {/* Button Skeleton */}
                <div className="h-16 bg-gray-200 border-t" />
              </div>
            ))
          ) : (
            products.map((product, index) => (
              <div key={product.slug} className="flex-shrink-0">
                <ProductCard product={product} index={index} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 
