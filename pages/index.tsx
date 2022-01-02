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
    <div className={""}>
      <Head>
        <title>BAYC</title>
        <meta name="description" content="Bored Ape Yacht Club Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Hero />
        <Apes apes={apes} />
      </main>
      
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const apes = await prisma.ape.findMany({})

  return { props: { apes } }
}