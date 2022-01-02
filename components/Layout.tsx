import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>BAYC</title>
                <meta name="description" content="Bored Ape Yacht Club Ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

interface LayoutProps {
    children: ReactNode
}