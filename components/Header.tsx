
import Link from 'next/link'
import React from 'react'
import { Cart } from './cart/Cart';

export default function Header() {
    return (
        <header className='p-3'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto'>
                <Link passHref={true} href="/">
                    <p className='text-3xl font-bold cursor-pointer'>BAYC</p>
                </Link>

                <Cart />

            </nav>
        </header>
    )
}
