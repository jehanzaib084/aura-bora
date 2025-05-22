'use client'

import Image from 'next/image'
import { useState } from 'react'

const singleFlavors = [
    { name: 'Pumpkin Spice', bgClass: 'bg-[#F7B7D7]', hoverClass: 'group-hover:bg-[#F7B7D7]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' },
    { name: 'Green Bean Casserole', bgClass: 'bg-[#d6ef70]', hoverClass: 'group-hover:bg-[#d6ef70]/90' }
]

const varietyPacks = [
    { name: 'Classic Pack', bgClass: 'bg-[#FFB17A]', hoverClass: 'group-hover:bg-[#FFB17A]/90' },
    { name: 'Holiday Pack', bgClass: 'bg-[#F7B7D7]', hoverClass: 'group-hover:bg-[#F7B7D7]/90' },
]

export default function ProductsGrid() {
    const [showVarietyPacks, setShowVarietyPacks] = useState(false)
    const items = showVarietyPacks ? varietyPacks : singleFlavors

    return (
        <div className="flex flex-col h-full">
            {/* Toggle Buttons */}
            <div className="flex gap-2 items-center text-sm lg:text-md p-2 whitespace-nowrap">
                <button 
                    className={`flex-1 py-2 rounded-full border-2 border-black font-mono cursor-pointer transition-colors duration-200
                        ${!showVarietyPacks ? 'bg-[#FFE6A7]' : 'bg-white'}`}
                    aria-label="Show single flavors"
                    onClick={() => setShowVarietyPacks(false)}
                >
                    SINGLE FLAVORS
                </button>
                <button 
                    className={`flex-1 py-2 rounded-full border-2 border-black font-mono cursor-pointer transition-colors duration-200
                        ${showVarietyPacks ? 'bg-[#FFE6A7]' : 'bg-white'}`}
                    aria-label="Show variety packs"
                    onClick={() => setShowVarietyPacks(true)}
                >
                    VARIETY PACKS
                </button>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto border-b-2">
                <div className="p-2 lg:p-4">
                    <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-4 auto-rows-max">
                        {items.map((item, i) => (
                            <button
                                key={i}
                                className="relative w-full aspect-square rounded-2xl border-2 border-black overflow-hidden group transition-colors duration-300 cursor-pointer"
                                aria-label={`Select ${item.name}`}
                            >
                                <div className={`absolute inset-0 transition-all duration-300 ${item.bgClass} opacity-30 group-hover:opacity-70`} />
                                <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-4/5 h-[140%] md:h-[120%]">
                                    <Image
                                        src="/can.png"
                                        alt={item.name}
                                        width={120}
                                        height={180}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 min-h-[2.35em] flex items-center justify-center bg-white border-t-2 border-black">
                                    <span className="text-center text-[0.7rem] md:text-xs font-mono font-light leading-tight line-clamp-2 px-2">
                                        {item.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}