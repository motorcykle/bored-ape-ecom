import React from 'react'
import { product } from '../../recoil/cart'
import CartItem from './CartItem'

interface cartProps {
    items: product[]
}

export default function CartItems({ items }: cartProps) {
    return (
        <div className='flex flex-col py-2 space-y-2'>
            {items.length > 0 && items.map(item => (
                <CartItem key={item.ape.id} item={item} />
            ))}
        </div>
    )
}
