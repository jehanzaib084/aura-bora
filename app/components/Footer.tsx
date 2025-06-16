'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

    return (
        <footer className="w-full bg-[#E0FFC1] py-8 px-4 lg:px-8 border-t-2 border-black font-mono text-xs lg:text-sm">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-1">
                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full text-center gap-2">
                    {/* Left Navigation */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="hover:underline">HOME</Link>
                        <Link href="/mixology" className="hover:underline">MIXOLOGY</Link>
                        <Link href="/wholesale" className="hover:underline">WHOLESALE</Link>
                        <Link href="/say-hey" className="hover:underline">SAY HEY</Link>
                    </nav>

                    {/* Center: Email Subscription */}
                    <div className="flex flex-col items-center gap-4 flex-grow">
                        <Link href="/" className="mb-4">
                            <Image
                                src="/logo.svg"
                                alt="Aura Bora"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-center max-w-xs">Sign up for our newsletter and get 15% off!</p>
                        <div className="flex w-full max-w-sm border-2 border-black rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 py-2 px-3 outline-none bg-white text-xs"
                            />
                            <button className="bg-[#FFE6A7] py-2 px-3 border-l-2 border-black flex items-center justify-center">
                                <Image src="/arrow-right.svg" alt="Subscribe" width={16} height={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/subscriptions" className="hover:underline">SUBSCRIPTIONS</Link>
                        <Link href="/free-membership-program" className="hover:underline">FREE MEMBERSHIP PROGRAM</Link>
                        <Link href="/blog" className="hover:underline">BLOG</Link>
                        <Link href="/vacation" className="hover:underline">VACATION</Link>
                    </nav>
                </div>

                {/* Bottom Legal Links and Copyright */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center text-xs uppercase text-gray-700 mt-8">
                    <span className="mb-2 sm:mb-0">© AURA BORA {new Date().getFullYear()}</span>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link>
                        <Link href="/terms-of-service" className="hover:underline">TERMS OF SERVICE</Link>
                        <Link href="/faqs" className="hover:underline">FAQS</Link>
                        <Link href="/press" className="hover:underline">PRESS</Link>
                        <Link href="/accessibility" className="hover:underline">ACCESSIBILITY</Link>
                        <Link href="/site-credit" className="hover:underline">SITE CREDIT</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 