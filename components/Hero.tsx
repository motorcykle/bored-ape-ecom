import Image from 'next/image'
import React from 'react'
import BaycImg from '../assets/bayc-footer.webp';

export default function Hero() {
    return (
        <section className='p-3 max-h-3xl'>
            <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

                <div className="">
                    <Image src={BaycImg} alt='' objectFit='contain' className='max-w-full'/>
                </div>
                <div className="flex flex-col justify-center items-center text-center md:order-first">
                    <h1 className='text-7xl font-black'>
                        Bored Ape Yacht Club
                    </h1>
                    <p className='text-2xl font-medium text-zinc-600 mt-2 mb-4'>Let's get you some NFTs.</p>
                    <button className='text-neutral-50 tracking-wide text-sm font-medium bg-black rounded-lg py-2 px-4'>Explore Apes</button>
                </div>

            </div>
        </section>
    )
}
