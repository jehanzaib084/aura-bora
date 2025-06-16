'use client';

import Link from 'next/link';
import Image from 'next/image';
import CartDrawerTrigger from './CartDrawerTrigger';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Navigation Links */}
        <div className="flex items-center space-x-6 pl-4">
          <Link href="/shop-all" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
        </div>

        {/* Middle - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Right side - Cart Button */}
        <div className="flex items-center">
        <CartDrawerTrigger />
        </div>
      </div>
    </header>
  );
};

export default Header;