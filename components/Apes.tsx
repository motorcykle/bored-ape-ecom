import React, { useEffect } from 'react'
import { HomeProps } from '../pages'
import Ape from './Ape'

function Apes({ apes }: HomeProps) {
    return (
        <div className='p-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:max-w-7xl mx-auto'>
                {apes.length > 0 && apes.map(ape => (
                    <Ape key={ape.id} ape={ape} />
                ))}
            </div>
        </div>
    )
}

export default Apes

