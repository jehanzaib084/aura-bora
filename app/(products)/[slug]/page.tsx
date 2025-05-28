import Image from "next/image";
import ProductDetailCarousel from "@/app/components/ProductDetailCarousel";
import ProductsGrid from "@/app/components/ProductsGrid";
import KnowYourCans from "@/app/components/KnowYourCan";
import Link from "next/link";

interface ApiProduct {
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  characterName: string;
  characterSpecies: string;
  characterHobbies: string;
  headerBgColor: string;
  titleBgColor: string;
  subtitleBgColor: string;
  detailPageBgColor: string;
  mainImage: {
    url: string;
  };
  illustrationImage: {
    url: string;
  };
  additionalImages: {
    url: string;
  }
}

interface ApiResponse {
  data: ApiProduct[];
}

// shimmer loader utilities
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

// This is a server component that fetches data
async function getProduct(slug: string): Promise<ApiProduct | null> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate[mainImage][fields][0]=url&populate[illustrationImage][fields][0]=url&populate[additionalImages][fields][0]=url`, {
        next: { revalidate: 3600 } // Revalidate every hour
    });
    const data: ApiResponse = await response.json();
    return data.data?.[0] || null;
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const product = await getProduct(slug);

    if (!product) {
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF9ED] text-center p-8">
                <div className="text-6xl mb-4">🧐</div>
                <h2 className="text-2xl font-bold mb-2">No Product Found</h2>
                <p className="text-md text-gray-600 mb-6">Sorry, we could not find the product you are looking for.<br/>Please check the URL or browse our other products.</p>
                <Link href="/" className="inline-block px-6 py-2 bg-black text-white rounded-full font-mono hover:bg-gray-800 transition">Back to Home</Link>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center px-2 lg:px-16 py-[40px] lg:py-[80px] font-mono" style={{ backgroundColor: product.detailPageBgColor }}>
                <div className="h-auto lg:h-[90dvh] w-full flex flex-col lg:flex-row rounded-2xl border-2 border-black overflow-hidden">
                    {/* MOBILE HEADER */}
                    <div className="lg:hidden flex-[0_0_auto] flex flex-col items-center justify-center gap-2 p-2 border-b-2 border-black text-center">
                        <h1 className="text-3xl font-bold tracking-wider text-white font-gliker text-stroke drop-shadow-stroke-2 leading-tight max-w-[12ch]">
                            {product.name.toUpperCase()}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-xs">
                            <span>★ ★ ★ ★ ☆</span>
                            <a href="#" className="underline">37 Reviews</a>
                        </div>
                    </div>

                    {/* LEFT COLUMN */}
                    <div className="order-3 lg:order-1 flex flex-col h-full lg:border-r-2 border-black w-full lg:w-[32%] min-w-0">
                        {/* DESKTOP HEADER */}
                        <div className="hidden lg:flex flex-none flex-col items-center justify-center gap-2 p-4 border-b-2 border-black text-center">
                            <h1 className="text-3xl lg:text-4xl xl:text-4xl  text-white font-bold tracking-wider text-stroke drop-shadow-stroke-2 font-gliker leading-tight max-w-[12ch] md:max-w-none">
                                {product.name.toUpperCase()}
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-xs lg:text-md">
                                <span>★ ★ ★ ★ ☆</span>
                                <a href="#" className="underline">37 Reviews</a>
                            </div>
                        </div>

                        {/* DESCRIPTION - now fills available space */}
                        <div className="flex-1 flex items-center justify-center lg:border-b-2 border-black px-8 py-6 lg:py-0 text-center text-sm xl:text-md">
                            <p>
                                {product.longDescription}
                            </p>
                        </div>

                        {/* Illustration (fixed height, content-based) */}
                        <div className="flex-none border-t-2 lg:border-t-0 lg:border-b-2 border-black relative">
                            <Image
                                src={product.illustrationImage.url}
                                alt={`${product.name} Illustration`}
                                width={1000}
                                height={560}
                                className="w-full h-full object-cover duration-700 ease-in-out"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1000,560))}`}
                            />
                        </div>

                        {/* Bottom Info Grid (fixed height, content-based) */}
                        <div className="flex-none flex flex-row border-t-2 lg:border-t-0">
                            <div className="flex-[0_0_70%] flex items-center justify-center gap-8 border-r-2 border-black py-2">
                                <div className="flex flex-col items-center">
                                    <Image src="/pumpkin.avif" alt="Pumpkin" width={60} height={60}/>
                                    <span className="text-xs lg:text-sm uppercase tracking-wider">PUMPKIN</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Image src="/spice.avif" alt="Spice" width={60} height={60}/>
                                    <span className="text-xs lg:text-sm uppercase tracking-wider">SPICE</span>
                                </div>
                            </div>
                            <div className="flex-[0_0_30%] flex flex-col justify-center pl-3 py-2 lg:py-0 text-[0.6rem]">
                                <div><span className="uppercase">NAME:</span><p>{product.characterName}</p></div>
                                <div><span className="uppercase">SPECIES:</span><p>{product.characterSpecies}</p></div>
                                <div><span className="uppercase">HOBBIES:</span><p>{product.characterHobbies}</p></div>
                            </div>
                        </div>
                    </div>

                    {/* CENTER COLUMN */}
                    <div className="order-1 lg:order-2 flex-1 flex w-full py-4 lg:min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-black min-w-0 min-h-0">
                        <ProductDetailCarousel />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="order-2 lg:order-3 flex flex-col min-w-0 lg:min-w-[32%] min-h-0">
                        {/* Products grid with scroll */}
                        <div className="flex-[1_1_0%] flex-col overflow-y-auto min-w-0 min-h-0">
                            <ProductsGrid />
                        </div>

                        {/* Quantity selector */}
                        <div className="shrink-0 flex items-center justify-between px-4 py-2 text-lg border-b-2 border-black">
                            <button
                                className="w-8 h-8 flex items-center justify-center group cursor-pointer"
                                aria-label="Decrease quantity"
                            >
                                <Image
                                    src="/minus.svg"
                                    alt="minus sign"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 transition-colors duration-200 group-hover:fill-[#d67eb4]"
                                />
                            </button>

                            <span className="tracking-wide">1 CASE (12 CANS)</span>

                            <button
                                className="w-8 h-8 flex items-center justify-center group cursor-pointer"
                                aria-label="Increase quantity"
                            >
                                <Image
                                    src="/plus.svg"
                                    alt="plus sign"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 transition-colors duration-200 group-hover:fill-[#d67eb4]"
                                />
                            </button>
                        </div>

                        {/* Purchase options */}
                        <div className="shrink-0 flex flex-col justify-center px-4 py-4 text-xs lg:text-base border-b-2 border-black">
                            <label className="flex items-center gap-2 cursor-pointer group mb-2">
                                <div className="relative w-4 h-4">
                                    <input type="radio" name="purchase-type" defaultChecked className="peer sr-only" />
                                    <span className="absolute inset-0 rounded-full border-2 border-black bg-white peer-checked:bg-[#d67eb4]"></span>
                                </div>
                                One-time Purchase
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative w-4 h-4">
                                    <input type="radio" name="purchase-type" className="peer sr-only" />
                                    <span className="absolute inset-0 rounded-full border-2 border-black bg-white peer-checked:bg-[#d67eb4]"></span>
                                </div>
                                Subscribe & Save 10% + Free Shipping
                            </label>
                        </div>

                        {/* Desktop Add to Cart */}
                        <div className="shrink-0 hidden lg:block bg-[#D48FCB]">
                            <button className="w-full bg-[#D48FCB] text-black font-bold text-lg lg:text-xl flex justify-between items-center px-4 py-4">
                                <div className="flex flex-col items-start">
                                    <span className="text-sm">ADD TO CART</span>
                                    <span className="text-xs">12 CANS</span>
                                </div>
                                <span className="font-bold">${product.price}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Add to Cart (always visible, never overlaps) */}
                <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50 border-t-2 border-black" style={{backgroundColor: product.subtitleBgColor}}>
                    <button className="w-full text-black font-bold text-lg flex justify-between items-center px-4 py-4">
                        <div className="flex flex-col items-start">
                            <span className="text-sm">ADD TO CART</span>
                            <span className="text-xs">12 CANS</span>
                        </div>
                        <span className="font-bold">${product.price}</span>
                    </button>
                </div>
            </div>

            {/* Know Your Can Section */}
            <div className="border-t-2">
                <KnowYourCans />
            </div>
        </>
    );
}
