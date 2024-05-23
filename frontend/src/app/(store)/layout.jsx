import Footer from '@/components/store/Footer'
import { Nav1, Nav2 } from '@/components/store/Nav'
import React from 'react'

function Layout({ children }) {
    return (
        <>
            <Nav1 />
            <Nav2 />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout