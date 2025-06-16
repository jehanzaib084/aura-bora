'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    return (
        <header className="w-full bg-[#FFE6A7] border-b-2 border-black sticky top-0 z-50">
            {/* Top Banner for free shipping */}
            <div className="bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] text-white text-center py-1 text-xs font-mono overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block py-1">
                    {'FREE SHIPPING ON ORDERS OVER $40.00 '.repeat(5)} {/* Repeat for continuous scroll effect */}
                </div>
            </div>

            {/* Main Header Content */}
            <div className="h-20 flex items-center justify-between px-4 lg:px-8 bg-transparent">
                {/* Left Section: Shop & About */}
                <nav className="flex gap-6 font-mono text-md">
                    <Link href="/shop-all">
                        SHOP
                    </Link>
                    <Link href="/about">
                        ABOUT
                    </Link>
                </nav>

                {/* Center Section: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="text-xl font-gliker tracking-wider text-black">
                    <Image
                src="/logo.svg"
                alt="Aura Bora"
                width={100}
                height={30}
                className="h-12 w-auto"
              />
                    </Link>
                </div>

                {/* Right Section: Login & Cart */}
                <div className="flex gap-4 items-center font-mono text-lg">
                    <button className="p-2 border-2 border-black rounded-lg bg-white hover:bg-gray-100 transition-colors">
                        LOG IN
                    </button>
                    <button className="relative p-2">
                        <Image src="/cart.svg" alt="Cart" width={30} height={30} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span> {/* Placeholder for cart item count */}
                    </button>
                </div>
            </div>
        </header>
    );
}