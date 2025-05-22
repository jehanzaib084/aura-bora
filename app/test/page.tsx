import Image from 'next/image';

export default function ThreeColumnLayout() {
    return (
        <div className="h-[130dvh] w-full bg-gray-100 flex items-center justify-center px-6 py-4 font-mono bg-[#FFC76A]">
            <div className="h-[95dvh] w-full flex rounded-2xl border-2 border-black overflow-hidden">

                {/* Column 1 */}
                <div className="flex flex-col border-r-2 border-black w-[32%]">
                    <div className="flex-[0_0_30%] p-4 border-b-2 border-black whitespace-nowrap">
                        <h1 className="text-6xl font-bold text-center tracking-wider font-gliker text-[#5FBC12FF] text-stroke">
                            PUMPKIN<br />SPICE
                        </h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl text-black">★ ★ ★ ★ ☆</span>
                            <a href="#" className="underline">37 Reviews</a>
                        </div>
                    </div>
                    <div className="flex-[0_0_20%] py-4 px-6 text-center text-md border-b-2 border-black">
                        <p>Pumpkin Spice is soul-warming and robust with notes of cinnamon and clove: the quintessential autumnal introduction!</p>
                    </div>
                    <div className="flex-[0_0_20 %] border-b-2 border-black whitespace-nowrap">
                        <Image
                            src="/illustration.webp"
                            alt="Pumpkin Spice Illustration"
                            width={1000}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Remaining 20% for Row 4 */}
                    <div className="flex flex-[0_0_30%]">
                        <div className="flex-[0_0_70%] p-4 border-r-2 border-black">
                            <div className="flex-1 flex items-center justify-evenly gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <Image
                                        src="/pumpkin.avif"
                                        alt="Pumpkin"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                    <span className="text-xs">PUMPKIN</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Image
                                        src="/spice.avif"
                                        alt="Spice"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                    <span className="text-xs">SPICE</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_30%] px-4 py-2">
                            <div className="flex flex-col text-xs">
                                <span className="uppercase">Name:</span>
                                <span className="font-bold">Baddie</span>
                                <span className="uppercase mt-1">Species:</span>
                                <span className="font-bold">Fruit Bat</span>
                                <span className="uppercase mt-1">Hobbies:</span>
                                <span className="font-bold">Hanging out</span>
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
                    <div className="flex-[0_0_10%] p-4 whitespace-nowrap">
                        <div className="flex gap-2 items-center">
                            <button className="flex-1 py-2 rounded-full border-2 border-black bg-[#FFE6A7] font-mono">
                                SINGLE FLAVORS
                            </button>
                            <button className="flex-1 py-2 rounded-full border-2 border-black bg-white font-mono">
                                VARIETY PACKS
                            </button>
                        </div>
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

                    <div className="flex-[0_0_10%] border-b-2 border-black whitespace-nowrap">
                        <div className="flex items-center justify-between px-4 py-3 text-lg">
                            <button className="text-2xl font-bold">-</button>
                            <span className="font-bold tracking-wide">1 CASE (12 CANS)</span>
                            <button className="text-2xl font-bold">+</button>
                        </div>
                    </div>
                    <div className="flex-[0_0_15%] border-b-2 border-black whitespace-nowrap">
                        <div className="px-4 py-4 text-base">
                            <label className="flex items-center gap-2 mb-2">
                                <span className="w-4 h-4 rounded-full border-2 border-black bg-[#B94F6F] inline-block"></span>
                                One-time Purchase
                            </label>
                            <label className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full border-2 border-black bg-white inline-block"></span>
                                Subscribe & Save 10% + Free Shipping
                            </label>
                        </div>
                    </div>
                    <div className="flex-[0_0_10%] whitespace-nowrap">
                        <button className="bg-[#D48FCB] text-black font-bold text-xl flex justify-between items-center px-6 py-6 w-full">
                            <span>ADD TO CART</span>
                            <span className="font-bold">$33</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}
