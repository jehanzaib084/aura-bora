import HomeCarousel from './HomeCarousel';

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

async function getProducts() {
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

    const products = data.map(item => ({
      name: item.name,
      slug: item.slug,
      documentId: item.documentId,
      price: item.price.toString(),
      description: item.shortDescription,
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.mainImage.url}`,
      bgHeader: item.headerBgColor,
      bgDesc: item.titleBgColor,
      bgFooter: item.subtitleBgColor,
      detailPageBgColor: item.detailPageBgColor
    }));

    console.log(`Successfully fetched ${products.length} products`);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function HomeCarouselWrapper() {
  const products = await getProducts();
  console.log('HomeCarouselWrapper rendering with products:', products.length);
  return <HomeCarousel initialProducts={products} />;
}