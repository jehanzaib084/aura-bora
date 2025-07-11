import ProductCard, { Product as ProductCardType } from '@/app/components/ProductCard';
import { Metadata } from 'next';

interface ApiProduct {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  headerBgColor: string;
  titleBgColor: string;
  subtitleBgColor: string;
  detailPageBgColor: string;
  mainImage: {
    id: number;
    documentId: string;
    url: string;
  }
}

interface ApiResponse {
  data: ApiProduct[];
}

export const generateMetadata = (): Metadata => ({
  title: "Shop All | Aura Bora | Sparkling Water with Real Fruit & Herbs",
  description: "Browse all Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients. Find your favorite unique flavors today!",
  keywords: "sparkling water, fruit water, herbal water, zero sugar, healthy drinks, natural beverages, Aura Bora, shop all",
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
    canonical: 'https://aura084.vercel.app/collections/shop-all',
  },
  openGraph: {
    title: "Shop All | Aura Bora | Sparkling Water with Real Fruit & Herbs",
    description: "Browse all Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients. Find your favorite unique flavors today!",
    url: 'https://aura084.vercel.app/collections/shop-all',
    siteName: 'Aura Bora',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aura Bora Sparkling Water Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shop All | Aura Bora | Sparkling Water with Real Fruit & Herbs",
    description: "Browse all Aura Bora's delicious sparkling water made with real fruit and herbs. Zero sugar, zero sweeteners, and zero artificial ingredients. Find your favorite unique flavors today!",
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
});

// Server-side data fetching function
async function getProducts(): Promise<ProductCardType[]> {
  try {
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
      console.error('NEXT_PUBLIC_STRAPI_URL is not defined');
      return [];
    }

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate[mainImage][fields][0]=url`;
    console.log('Fetching products from:', url);
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.error('Fetch products failed:', response.status, await response.text());
      return [];
    }

    const { data } = (await response.json()) as ApiResponse;
    
    if (!Array.isArray(data)) {
      console.error('API response data is not an array:', data);
      return [];
    }

    return data.map(item => ({
      name: item.name,
      slug: item.slug,
      documentId: item.documentId,
      price: item.price.toString(),
      description: item.shortDescription,
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.mainImage.url}`,
      bgHeader: item.headerBgColor,
      bgDesc: item.titleBgColor,
      bgFooter: item.subtitleBgColor,
      detailPageBgColor: item.detailPageBgColor,
    }));
  } catch (err) {
    console.error('Error fetching products:', err);
    return [];
  }
}

export default async function ShopAllPage() {
  const products = await getProducts();

  // If no products, show a message instead of empty page
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center font-mono bg-[#FFFEF6]">
        <div className="text-center">
          <h1 className="text-2xl mb-4">No products available</h1>
          <p>Please check back later.</p>
        </div>
      </div>
    );
  }

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
