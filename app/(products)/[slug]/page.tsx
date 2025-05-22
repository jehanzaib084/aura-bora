'use client';

import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-6 py-4 font-mono bg-[#FFC76A]">
            <div className="h-[95dvh] w-full flex rounded-2xl border-2 border-black overflow-hidden">

                <div className="flex flex-col border-r-2 border-black w-[32%]">

                    {/* Row 1: Title + Stars + Reviews (30%) */}
                    <div className="flex-[0_0_28%] flex flex-col items-center justify-center gap-2 p-4 border-b-2 border-black text-center">
                        <h1 className="text-6xl font-bold tracking-wider font-gliker text-[#5FBC12FF] text-stroke leading-tight">
                            PUMPKIN<br />SPICE
                        </h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl text-black">★ ★ ★ ★ ☆</span>
                            <a href="#" className="underline">37 Reviews</a>
                        </div>
                    </div>

                    {/* Row 2: Description (20%) */}
                    <div className="flex-[0_0_18%] flex items-center justify-center border-b-2 border-black px-6 text-center text-md">
                        <p>
                            Pumpkin Spice is soul-warming and robust with notes of cinnamon and clove: the quintessential autumnal introduction!
                        </p>
                    </div>

                    {/* Row 3: Illustration (auto height) */}
                    <div className="flex-1 border-b-2 border-black">
                        <Image
                            src="/illustration.webp"
                            alt="Pumpkin Spice Illustration"
                            width={1000}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Row 4: Ingredients + Bio (25%) */}
                    <div className="flex flex-[0_0_25%]">
                        {/* Ingredients (70%) */}
                        <div className="flex-[0_0_70%] flex items-center justify-center gap-16 border-r-2 border-black">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/pumpkin.avif"
                                    alt="Pumpkin"
                                    width={60}
                                    height={60}
                                />
                                <span className="text-sm uppercase tracking-wider">PUMPKIN</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/spice.avif"
                                    alt="Spice"
                                    width={60}
                                    height={60}
                                />
                                <span className="text-sm uppercase tracking-wider">SPICE</span>
                            </div>
                        </div>

                        {/* Bio (30%) */}
                        <div className="flex-[0_0_30%] flex flex-col pl-3 pt-1">
                                <div>
                                    <span className="text-[#666666] uppercase text-xs">NAME:</span>
                                    <p className="text-sm">Baddie</p>
                                </div>
                                <div>
                                    <span className="text-[#666666] uppercase text-xs">SPECIES:</span>
                                    <p className="text-sm">Fruit Bat</p>
                                </div>
                                <div>
                                    <span className="text-[#666666] uppercase text-xs">HOBBIES:</span>
                                    <p className="text-sm">Hanging out</p>
                                </div>
                        </div>
                    </div>

                </div>


                {/* Column 2 */}
                <div className="flex-1 flex items-center justify-center border-r-2 border-black">
                    <Image
                        src="/can.png"
                        alt="Aura Bora Can"
                        width={300}
                        height={400}
                        className="h-96 object-contain"
                    />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col min-w-[32%] w-auto">
                    <div className="flex-[0_0_10%] flex gap-2 items-center p-2 whitespace-nowrap">
                        <button className="flex-1 py-2 rounded-full border-2 border-black bg-[#FFE6A7] font-mono">
                            SINGLE FLAVORS
                        </button>
                        <button className="flex-1 py-2 rounded-full border-2 border-black bg-white font-mono">
                            VARIETY PACKS
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto border-b-2 border-black">
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-4 auto-rows-max">
                                {[
                                    {
                                        name: 'Pumpkin Spice',
                                        bgClass: 'bg-[#F7B7D7]',
                                        hoverClass: 'group-hover:bg-[#F7B7D7]/90'
                                    },
                                    {
                                        name: 'Green Bean Casserole',
                                        bgClass: 'bg-[#d6ef70]',
                                        hoverClass: 'group-hover:bg-[#d6ef70]/90'
                                    },
                                    {
                                        name: 'Lavender Melon',
                                        bgClass: 'bg-[#B8A5F8]',
                                        hoverClass: 'group-hover:bg-[#B8A5F8]/90'
                                    },
                                    {
                                        name: 'Cactus Rose',
                                        bgClass: 'bg-[#FF9E93]',
                                        hoverClass: 'group-hover:bg-[#FF9E93]/90'
                                    },
                                    {
                                        name: 'Basil Berry',
                                        bgClass: 'bg-[#94D675]',
                                        hoverClass: 'group-hover:bg-[#94D675]/90'
                                    },
                                    {
                                        name: 'Chai Cranberry',
                                        bgClass: 'bg-[#FFB17A]',
                                        hoverClass: 'group-hover:bg-[#FFB17A]/90'
                                    },
                                    {
                                        name: 'Cactus Rose',
                                        bgClass: 'bg-[#FF9E93]',
                                        hoverClass: 'group-hover:bg-[#FF9E93]/90'
                                    },
                                    {
                                        name: 'Basil Berry',
                                        bgClass: 'bg-[#94D675]',
                                        hoverClass: 'group-hover:bg-[#94D675]/90'
                                    },
                                    {
                                        name: 'Chai Cranberry',
                                        bgClass: 'bg-[#FFB17A]',
                                        hoverClass: 'group-hover:bg-[#FFB17A]/90'
                                    },
                                    {
                                        name: 'Cactus Rose',
                                        bgClass: 'bg-[#FF9E93]',
                                        hoverClass: 'group-hover:bg-[#FF9E93]/90'
                                    },
                                    {
                                        name: 'Basil Berry',
                                        bgClass: 'bg-[#94D675]',
                                        hoverClass: 'group-hover:bg-[#94D675]/90'
                                    },
                                    {
                                        name: 'Chai Cranberry',
                                        bgClass: 'bg-[#FFB17A]',
                                        hoverClass: 'group-hover:bg-[#FFB17A]/90'
                                    }
                                ].map((flavor, i) => (
                                    <button
                                        key={i}
                                        className="relative w-full aspect-square rounded-2xl border-2 border-black overflow-hidden group transition-colors duration-300"
                                    >
                                        <div className={`absolute inset-0 transition-colors duration-300 ${flavor.bgClass} ${flavor.hoverClass}`} />
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4/5 h-[120%]">
                                            <Image
                                                src="/can.png"
                                                alt={flavor.name}
                                                width={120}
                                                height={180}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 min-h-[2.35em] flex items-center justify-center bg-white border-t-2 border-black">
                                            <span className="text-center text-[0.7rem] font-mono font-light leading-tight line-clamp-2 px-2">
                                                {flavor.name}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-[0_0_10%] flex items-center justify-between px-4 text-lg border-b-2 border-black whitespace-nowrap">
                        <button className="text-2xl font-bold">-</button>
                        <span className="font-bold tracking-wide">1 CASE (12 CANS)</span>
                        <button className="text-2xl font-bold">+</button>
                    </div>
                    <div className="flex-[0_0_15%] flex flex-col flex-start border-b-2 px-4 py-4 text-base border-black whitespace-nowrap">
                        <label className="flex gap-2 mb-2">
                            <span className="w-4 h-4 rounded-full border-2 border-black bg-[#B94F6F] inline-block"></span>
                            One-time Purchase
                        </label>
                        <label className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-black bg-white inline-block"></span>
                            Subscribe & Save 10% + Free Shipping
                        </label>
                    </div>
                    <button className="flex-[0_0_10%] whitespace-nowrap bg-[#D48FCB] text-black font-bold text-xl flex justify-between items-center px-6 py-6 w-full">
                        <span>ADD TO CART</span>
                        <span className="font-bold">$33</span>
                    </button>
                </div>

            </div>
        </div>
    );
}