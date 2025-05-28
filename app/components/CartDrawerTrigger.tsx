'use client';

import { useState, useEffect } from 'react';
import CartDrawer from './CartDrawer';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function CartDrawerTrigger() {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const openCart = () => setCartOpen(true);
    window.addEventListener('open-cart-drawer', openCart);
    return () => window.removeEventListener('open-cart-drawer', openCart);
  }, []);

  return (
    <>
      {/* Cart Button (fixed top right) */}
      <button
        className="fixed top-4 right-4 z-50 bg-[#F5B54A] text-black rounded-full p-3 shadow-lg hover:bg-[#e5a53a] transition-colors flex items-center gap-2"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
            {totalItems}
          </span>
        )}
      </button>
      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
} 