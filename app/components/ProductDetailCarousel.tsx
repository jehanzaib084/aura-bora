'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = ['/can.png', '/pumpkin_nt.webp', '/pumpkin_show.webp']

export default function ProductDetailCarousel() {
    const [current, setCurrent] = useState(0)

    return (
        <div className="relative w-full h-full min-h-[400px] lg:min-h-full">
            {/* Fixed container for images */}
            <div className="absolute inset-0 flex items-center justify-center px-2 py-16">
                <div className="relative w-full h-full">
                    {images.map((src, index) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center
                ${current === index ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image
                                src={src}
                                alt={`Aura Bora Product View ${index + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-height: 768px) 60vh, 33vh"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation dots with fixed positioning */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="w-10 h-10 flex items-center justify-center"
                        aria-label={`View product image ${i + 1}`}
                    >
                        {i === current ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                className="w-6 h-6 fill-white"
                                aria-hidden="true"
                            >
                                <path d="M8 2C4 2 0.7 6 0 8c0.7 2 4 6 8 6s7.3-4 8-6c-0.7-2-4-6-8-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                            </svg>
                        ) : (
                            <div className="w-4 h-4 rounded-full bg-white" aria-hidden="true"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}