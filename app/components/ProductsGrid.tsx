'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Product {
  name: string;
  slug: string;
  detailPageBgColor: string;
  imageUrl: string;
  subtitleBgColor: string;
}

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
    const [showVarietyPacks, setShowVarietyPacks] = useState(false)
    const pathname = usePathname()
    const currentSlug = pathname.split('/').pop()

    // Reorder products to show current product first
    const reorderedProducts = [...products].sort((a, b) => {
        if (a.slug === currentSlug) return -1
        if (b.slug === currentSlug) return 1
        return 0
    })

    const items = reorderedProducts.map(product => ({
        name: product.name,
        imageUrl: product.imageUrl,
        bgColor: product.detailPageBgColor,
        subtitleBgColor: product.subtitleBgColor,
        slug: product.slug,
        isCurrent: product.slug === currentSlug
    }))

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
                            <Link
                                key={i}
                                href={`/${item.slug}`}
                                className={`relative w-full aspect-square rounded-2xl border-2 border-black overflow-hidden group transition-colors duration-300 cursor-pointer
                                    ${item.isCurrent ? 'ring-2 ring-black ring-offset-2' : ''}`}
                                aria-label={`Select ${item.name}`}
                            >
                                <div 
                                    className="absolute inset-0 transition-all duration-300 opacity-30 group-hover:opacity-70" 
                                    style={{ backgroundColor: item.bgColor }}
                                />
                                <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-4/5 h-[140%] md:h-[120%]">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.name}
                                        width={120}
                                        height={180}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div 
                                    className="absolute bottom-0 left-0 right-0 min-h-[2.35em] flex items-center justify-center border-t-2 border-black"
                                    style={{ backgroundColor: item.subtitleBgColor }}
                                >
                                    <span className="text-center text-[0.7rem] md:text-xs font-mono font-light leading-tight line-clamp-2 px-2">
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}