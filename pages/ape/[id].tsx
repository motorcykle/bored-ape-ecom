import React, { useEffect } from 'react'
import next, { GetServerSideProps } from 'next';
import { prisma } from '../../lib/prisma'
import { Ape } from '@prisma/client';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/solid';
import { kFormatter } from '../../components/Ape';
import WethIcon from '../../assets/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png';

export default function ApePage({ ape }: { ape: Ape }) {
    const { id, number, image_url, price, likes_opensea } = ape;

    return (
        <div className='p-3'>
                <img src={image_url} alt="" />
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
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const ape = await prisma.ape.findFirst({
        where: {
            id
        }
    })
  
    return {
      props: {
        ape
      },
    };
  };