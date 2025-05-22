'use client';

import Image from "next/image";
import ProductDetailCarousel from "@/app/components/ProductDetailCarousel";
import ProductsGrid from "@/app/components/ProductsGrid";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-2 lg:px-16 py-2 lg:py-4 font-mono bg-[#FDC161]">
            <div className="h-auto lg:h-[95dvh] w-full flex flex-col lg:flex-row rounded-2xl border-2 border-black overflow-hidden">

                {/* Column 1 */}
                <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-black w-full lg:w-[32%] min-w-0">

                    {/* Row 1: Title + Stars + Reviews */}
                    <div className="flex-[0_0_28%] flex flex-col items-center justify-center gap-2 p-2 lg:p-4 border-b-2 border-black text-center">
                        <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wider font-gliker text-[#F99F1C] text-stroke leading-tight max-w-[12ch] md:max-w-none">
                            PUMPKIN SPICE
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-xs ">
                            <span aria-label="4 out of 5 stars">★ ★ ★ ★ ☆</span>
                            <a href="#" className="underline cursor-pointer" aria-label="Read 37 reviews">37 Reviews</a>
                        </div>
                    </div>

                    {/* Row 2: Description */}
                    <div className="flex-[0_0_18%] flex items-center justify-center border-b-2 border-black px-8 py-6 lg:py-0 text-center text-lg lg:text-sm">
                        <p>
                            Pumpkin Spice is soul-warming and robust with notes of cinnamon and clove: the quintessential autumnal introduction!
                        </p>
                    </div>

                    {/* Row 3: Illustration */}
                    <div className="flex-[0_0_29%] border-b-2 border-black relative">
                        <Image
                            src="/illustration.webp"
                            alt="Pumpkin Spice Illustration"
                            width={1000}
                            height={600}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* Row 4: Ingredients + Bio */}
                    <div className="flex flex-row flex-[0_0_25%]">
                        {/* Ingredients */}
                        <div className="flex-[0_0_70%] flex items-center justify-center gap-8 lg:gap-16 border-r-2 border-black py-2">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/pumpkin.avif"
                                    alt="Pumpkin"
                                    width={60}
                                    height={60}
                                    className="aspect-square"
                                />
                                <span className="text-xs lg:text-sm uppercase tracking-wider">PUMPKIN</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/spice.avif"
                                    alt="Spice"
                                    width={60}
                                    height={60}
                                    className="aspect-square"
                                />
                                <span className="text-xs lg:text-sm uppercase tracking-wider">SPICE</span>
                            </div>
                        </div>
                        {/* Bio */}
                        <div className="flex-[0_0_30%] flex flex-col justify-center pl-3 py-2 lg:py-0 text-xs">
                            <div>
                                <span className="text-[#666666] uppercase">NAME:</span>
                                <p className="lg:text-sm">Baddie</p>
                            </div>
                            <div>
                                <span className="text-[#666666] uppercase">SPECIES:</span>
                                <p className="lg:text-sm">Fruit Bat</p>
                            </div>
                            <div>
                                <span className="text-[#666666] uppercase">HOBBIES:</span>
                                <p className="lg:text-sm">Hanging out</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex w-full min-h-[400px] py-4 lg:min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                    <ProductDetailCarousel />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col min-w-0 lg:min-w-[32%]">
                    <div className="flex-[0_0_65%] flex-col overflow-y-auto min-w-0 lg:min-w-[32%]">
                        <ProductsGrid />
                    </div>

                    <div className="flex-shrink-0 flex-[0_0_10%] flex items-center justify-between px-4 py-2 text-lg border-b-2 border-black whitespace-nowrap">
                        <button
                            className="w-8 h-8 flex items-center justify-center group cursor-pointer"
                            aria-label="Decrease quantity"
                        >
                            <Image
                                src="/minus.svg"
                                alt=""
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
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6 transition-colors duration-200 group-hover:fill-[#d67eb4]"
                            />
                        </button>
                    </div>

                    <div className="flex-shrink-0 flex-[0_0_15%] flex flex-col justify-center flex-start border-b-2 px-4 py-4 text-xs lg:text-base border-black whitespace-nowrap">
                        <label className="flex gap-2 mb-2 cursor-pointer group" aria-label="One-time purchase">
                            <div className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="purchase-type"
                                    defaultChecked
                                    className="peer sr-only"
                                />
                                <span className="absolute inset-0 rounded-full border-2 border-black bg-white transition-colors duration-200 peer-checked:bg-[#d67eb4]"></span>
                            </div>
                            One-time Purchase
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group" aria-label="Subscribe and save 10 percent plus free shipping">
                            <div className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="purchase-type"
                                    className="peer sr-only"
                                />
                                <span className="absolute inset-0 rounded-full border-2 border-black bg-white transition-colors duration-200 peer-checked:bg-[#d67eb4]"></span>
                            </div>
                            Subscribe & Save 10% + Free Shipping
                        </label>
                    </div>

                    {/* Cart Button - Hidden on mobile */}
                    <div className="flex-shrink-0 hidden lg:block">
                        <button className="flex-[0_0_10%] whitespace-nowrap bg-[#D48FCB] text-black font-bold text-lg lg:text-xl flex justify-between items-center px-4 lg:px-6 py-4 lg:py-6 w-full cursor-pointer" aria-label="Add to cart">
                            <span>ADD TO CART</span>
                            <span className="font-bold">$33</span>
                        </button>
                    </div>

                    {/* Sticky Mobile Cart Button */}
                    <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50">
                        <button
                            className="whitespace-nowrap bg-[#D48FCB] text-black font-bold text-lg flex justify-between items-center px-4 py-4 w-full cursor-pointer border-t-2 border-black"
                            aria-label="Add to cart, 12 cans"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm">ADD TO CART</span>
                                <span className="text-xs font-normal -mt-0.5">12 CANS</span>
                            </div>
                            <span className="font-bold">$33</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}