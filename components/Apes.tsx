import React, { useEffect } from 'react'
import { HomeProps } from '../pages'
import Ape from './Ape'

function Apes({ apes }: HomeProps) {
    return (
        <div>
            <Ape />
        </div>
    )
}

export default Apes

