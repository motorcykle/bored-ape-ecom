import { Popover } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../../recoil/cart';
import CartItems from './CartItems';


export function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const [convertedTotalPrice, setConvertedTotalPrice] = useState(0);
  
  const checkout = () => {
    console.log("checkout", cart)
    setCart([]);
  }

  const truncNum = (num: number) => Math.floor(num * 100) / 100;

  const totalPriceCalc = () => {
    const sum = cart.reduce((previousValue, currentValue) => previousValue + (currentValue.ape.price * currentValue.quantity), 0)
    const truncSum = truncNum(sum);
    ETH2USD(truncSum);
    return truncSum;
  }

  const ETH2USD = async (ETH: number) => {
    try {
      const res = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
      const { USD } = await res.json();
      setConvertedTotalPrice(truncNum(USD * ETH));
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Popover className="relative">
      <Popover.Button>
        <ShoppingBagIcon className='w-10 h-10' />
      </Popover.Button>

      <Popover.Panel className="absolute right-0 z-10 p-3 border-2 min-w-max bg-neutral-50 rounded-xl">
        <p className="text-2xl">CART</p>
        <CartItems items={cart} />
        <p className=' text-zinc-500'>Total price: <span className='font-medium text-zinc-900'>{totalPriceCalc()} (WETH)</span></p>
        <p className='mb-2 text-xs font-bold'>TOTAL IN USD ${convertedTotalPrice}</p>
        <button onClick={checkout} className='px-4 py-2 text-xl font-medium tracking-wide bg-black rounded-lg text-neutral-50'>Checkout</button>
      </Popover.Panel>
    </Popover>
  )
}