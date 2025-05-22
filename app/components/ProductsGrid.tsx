'use client'

import Image from 'next/image';

export default function ProductsGrid() {
    return (
        <div className="p-2 lg:p-4">
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-4 auto-rows-max">
                {[
                    { name: 'Pumpkin Spice', bgClass: 'bg-[#F7B7D7]', hoverClass: 'group-hover:bg-[#F7B7D7]/90' },
                    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
                    { name: 'Lavender Melon', bgClass: 'bg-[#B8A5F8]', hoverClass: 'group-hover:bg-[#B8A5F8]/90' },
                    { name: 'Cactus Rose', bgClass: 'bg-[#FF9E93]', hoverClass: 'group-hover:bg-[#FF9E93]/90' },
                    { name: 'Basil Berry', bgClass: 'bg-[#94D675]', hoverClass: 'group-hover:bg-[#94D675]/90' },
                    { name: 'Chai Cranberry', bgClass: 'bg-[#FFB17A]', hoverClass: 'group-hover:bg-[#FFB17A]/90' },
                    { name: 'Cactus Rose', bgClass: 'bg-[#FF9E93]', hoverClass: 'group-hover:bg-[#FF9E93]/90' },
                    { name: 'Basil Berry', bgClass: 'bg-[#94D675]', hoverClass: 'group-hover:bg-[#94D675]/90' },
                    { name: 'Chai Cranberry', bgClass: 'bg-[#FFB17A]', hoverClass: 'group-hover:bg-[#FFB17A]/90' },
                    { name: 'Cactus Rose', bgClass: 'bg-[#FF9E93]', hoverClass: 'group-hover:bg-[#FF9E93]/90' },
                    { name: 'Basil Berry', bgClass: 'bg-[#94D675]', hoverClass: 'group-hover:bg-[#94D675]/90' },
                    { name: 'Chai Cranberry', bgClass: 'bg-[#FFB17A]', hoverClass: 'group-hover:bg-[#FFB17A]/90' }
                ].map((flavor, i) => (
                    <button
                        key={i}
                        className="relative w-full aspect-square rounded-2xl border-2 border-black overflow-hidden group transition-colors duration-300 cursor-pointer"
                        aria-label={`Select ${flavor.name} flavor`}
                    >
                        <div className={`absolute inset-0 transition-colors duration-300 bg-[#FFFEF6] opacity-70 ${flavor.hoverClass}`} />
                        <div className="absolute top-2 lg:top-4 left-1/2 -translate-x-1/2 w-4/5 h-[140%] lg:h-[120%]">
                            <Image
                                src="/can.png"
                                alt={flavor.name}
                                width={120}
                                height={180}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 min-h-[2.35em] flex items-center justify-center bg-white border-t-2 border-black">
                            <span className="text-center text-[0.7rem] lg:text-xs font-mono font-light leading-tight line-clamp-2 px-2">
                                {flavor.name}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}