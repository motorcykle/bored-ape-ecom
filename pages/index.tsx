import type { NextPage } from 'next'
import Head from 'next/head'
import { prisma } from '../lib/prisma'
import Apes from '../components/Apes'
import Hero from '../components/Hero'
import { Ape } from '@prisma/client'

export interface HomeProps {
  apes: Ape[]
}

const Home: NextPage<HomeProps> = ({ apes }) => {
  return (
    <>
      <main className=''>
        <Hero />
        <Apes apes={apes} />
      </main>
      
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const apes = await prisma.ape.findMany({})

  return { props: { apes } }
}