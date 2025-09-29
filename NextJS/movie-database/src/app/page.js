import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import MovieSection from '@/components/MovieSection/MovieSection'
import React from 'react'

function page() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <MovieSection />
            </main>
            <Footer />
        </>
    )
}

export default page
