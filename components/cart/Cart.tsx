import { Popover } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../../recoil/cart';
import CartItems from './CartItems';


export function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  
  const checkout = () => {
    console.log("checkout", cart)
    setCart([]);
  }

  return (
    <Popover className="relative">
      <Popover.Button>
        <ShoppingBagIcon className='h-10 w-10' />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-neutral-50 p-3 rounded-xl border-2">
        <p className="text-2xl">CART</p>
        <CartItems items={cart} />
        <button onClick={checkout} className=' text-neutral-50 tracking-wide text-xl font-medium bg-black rounded-lg py-2 px-4'>Checkout</button>
      </Popover.Panel>
    </Popover>
  )
}