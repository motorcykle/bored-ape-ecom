import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

interface LayoutProps {
    children: ReactNode
}