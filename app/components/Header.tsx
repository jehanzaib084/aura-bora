import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return(
        <div className="fixed w-full flex flex-row justify-between items-center h-[65px] px-[30px] z-[1000] bg-transparent">
            <div className="flex flex-row gap-8 text-lg uppercase">
                <Link href="/shop-all">Shop</Link>
                <Link href="/about">About</Link>
            </div>
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={140} height={140} />
            </Link>
            <div className="flex flex-row gap-4 text-lg uppercase">
                <Link href="/account"><Image src="/cart.svg" alt="account" width={30} height={30} /></Link>
                <Link href="/cart"><Image src="/cart.svg" alt="cart" width={30} height={30} /></Link>
                <Link href="/game"><Image src="/controller.svg" alt="game" width={30} height={30} /></Link>
                <button><Image src="/cursor.svg" alt="cursor" width={30} height={30} /></button>
            </div>
        </div>
    )
}