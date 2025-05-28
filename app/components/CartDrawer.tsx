'use client';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useEffect } from 'react';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-200 transition-all duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#FFFDF6] shadow-xl transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold">Cart ({totalItems})</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-3xl mb-2">🛒</span>
              <p className="text-lg font-semibold mb-2">Oh no! Your cart is super empty :(</p>
              <Link
                href="/shop-all"
                className="mt-4 px-4 py-2 rounded-full bg-[#F5B54A] text-black hover:bg-[#e5a53a] transition-colors"
                onClick={onClose}
              >
                Keep Shopping
              </Link>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.documentId} className="flex gap-3 items-center border-b py-3 px-2" style={{backgroundColor: item.detailPageBgColor}}>
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src={item.img} alt={item.name} fill className="object-contain rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.description}</div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.documentId, item.quantity - 1)} className="p-1 hover:bg-gray-100 rounded"><Minus className="w-4 h-4" /></button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.documentId, item.quantity + 1)} className="p-1 hover:bg-gray-100 rounded"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-bold text-sm">${(item.quantity * 33).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.documentId)} className="text-red-500 hover:bg-red-50 rounded p-1"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="p-4 border-t bg-[#FFF9ED]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="w-full block text-center px-4 py-2 rounded-full bg-[#F5B54A] text-black hover:bg-[#e5a53a] transition-colors"
            onClick={onClose}
          >
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
} 