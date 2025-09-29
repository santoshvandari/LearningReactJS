import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Search from '@/components/Search/Search'
import React from 'react'

function page() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
            </main>
            <Footer />
        </>
    )
}

export default page
