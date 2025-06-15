import ProductCard, { Product as ProductCardType } from '@/app/components/ProductCard';
import { Metadata } from 'next';

interface ApiProduct {
  name: string;
  slug: string;
  documentId: string;
  price: string;
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

interface ApiResponse {
  data: ApiProduct[];
}

export const generateMetadata = (): Metadata => ({
  title: 'Shop All | Aura Bora',
  description: 'Browse all Aura Bora products.',
  alternates: {
    canonical: 'https://aura084.com/collections/shop-all',
  },
});

// Server-side data fetching function
async function getProducts(): Promise<ProductCardType[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate[mainImage][fields][0]=url`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error('Fetch products failed:', response.status, await response.text());
      return [];
    }

    const { data } = await response.json();
    return Array.isArray(data)
      ? data.map(item => ({
          name: item.name,
          slug: item.slug,
          documentId: item.documentId,
          price: item.price.toString(),
          description: item.shortDescription,
          img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.mainImage?.url || ''}`,
          bgHeader: item.headerBgColor,
          bgDesc: item.titleBgColor,
          bgFooter: item.subtitleBgColor,
          detailPageBgColor: item.detailPageBgColor,
        }))
      : [];
  } catch (err) {
    console.error('Error fetching products:', err);
    return [];
  }
}


export default async function ShopAllPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-mono bg-[#FFFEF6]">
      <div className="container mx-auto px-4 py-12 w-full max-w-[1400px]">
        {/* Header */}
        <div className="flex mb-4">
          <h1 className="text-[3rem] lg:text-[5rem] leading-none text-[#F5B54A] font-gliker text-stroke drop-shadow-stroke break-words">
            SHOP ALL
          </h1>
          <sup className="mt-4 font-mono text-md">({products.length})</sup>
        </div>

        {/* Products Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {products.map((product: ProductCardType, index: number) => (
            <div key={product.slug} className="w-[220px] md:w-[280px]">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
