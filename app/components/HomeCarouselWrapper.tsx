import HomeCarousel from './HomeCarousel';
import { Product as ProductCardType } from './ProductCard';

interface ApiProduct {
  name: string;
  slug: string;
  documentId: string;
  price: string;
  mainImage: {
    url: string;
  };
  shortDescription: string;
  headerBgColor: string;
  titleBgColor: string;
  subtitleBgColor: string;
  detailPageBgColor: string;
}

interface ApiResponse {
  data: ApiProduct[];
}

async function getProducts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[categories][slug][$eq]=shop-all&populate[mainImage][fields][0]=url`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
    if (!data || !data.data) {
      console.error('API Response:', data);
      throw new Error('Invalid API response structure');
    }
    
    return data.data.map((item: ApiProduct): ProductCardType => ({
      name: item.name,
      slug: item.slug,
      documentId: item.documentId,
      price: item.price,
      description: item.shortDescription,
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.mainImage.url}`,
      bgHeader: item.headerBgColor,
      bgDesc: item.titleBgColor,
      bgFooter: item.subtitleBgColor,
      detailPageBgColor: item.detailPageBgColor
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function HomeCarouselWrapper() {
  const products = await getProducts();
  return <HomeCarousel initialProducts={products} />;
}