import { Ape as ApeType } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import WethIcon from '../assets/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png';
import { HeartIcon } from '@heroicons/react/solid';

export default function Ape({ ape }: { ape: ApeType }) {
    const { id, number, image_url, price, likes_opensea } = ape;

    return (
        <div className='border rounded-2xl p-2 overflow-hidden'>
           <img src={image_url} alt="" />
           <div className="mt-2">
               <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold text-zinc-900'>#{number}</h2> 
                    <div className="flex items-center space-x-1">
                        <Image src={WethIcon} alt='' width={20} height={20}/>
                        <p className='font-medium text-zinc-800'>{price.toString().replace('.', ',')}</p>
                    </div> 
               </div>
               
               <div className="flex items-center space-x-1">
                    <HeartIcon className='h-5 w-5 text-zinc-400' />
                    <p className=' font-normal text-zinc-500'>{kFormatter(likes_opensea)}</p>
               </div>
               
           </div>
        </div>
    )
}

function kFormatter(num: number) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}