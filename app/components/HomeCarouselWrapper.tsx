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
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=mainImage`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  const data: ApiResponse = await response.json();
  
  return data.data.map((item: ApiProduct): ProductCardType => ({
    name: item.name,
    slug: item.slug,
    documentId: item.documentId,
    price: item.price,
    description: item.shortDescription,
    img: item.mainImage.url,
    bgHeader: item.headerBgColor,
    bgDesc: item.titleBgColor,
    bgFooter: item.subtitleBgColor,
    detailPageBgColor: item.detailPageBgColor
  }));
}

export default async function HomeCarouselWrapper() {
  const products = await getProducts();
  return <HomeCarousel initialProducts={products} />;
} 