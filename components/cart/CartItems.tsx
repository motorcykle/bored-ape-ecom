import React from 'react'
import { product } from '../../recoil/cart'
import CartItem from './CartItem'

interface cartProps {
    items: product[]
}

export default function CartItems({ items }: cartProps) {

    

    return (
        <div>
            {/* {{/* if cart length is more than 0 */}} */}
            <CartItem item={items[0]} />
        </div>
    )
}
