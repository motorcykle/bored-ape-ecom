import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/solid';

export default function Header() {
    return (
        <header className='p-3'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto'>
                <Link passHref={true} href="/">
                    <p className='text-3xl font-bold'>BAYC</p>
                </Link>

                <button>
                    <ShoppingBagIcon className='h-10 w-10' />
                </button>
            </nav>
        </header>
    )
}
