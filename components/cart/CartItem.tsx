import React from 'react'
import { product } from '../../recoil/cart'
import Image from 'next/image'
import WethIcon from '../../assets/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png';

export default function CartItem({ item }: { item: product }) {
    const { ape: {image_url, number, price}, quantity } = item;

    return (
        <div className='flex items-center space-x-3'>
            {/* <img src={} alt="" /> */}
            <img src={image_url} alt="" className='w-10 h-10 rounded-xl' />
            <p className='font-medium'>#{number}</p>
            <div className="flex items-center space-x-1">
                <Image src={WethIcon} alt='' width={20} height={20}/>
                <p className='font-medium text-zinc-800'>{price.toString().replace('.', ',')}</p>
            </div> 

            <small>x {quantity}</small>
        </div>
    )
}
