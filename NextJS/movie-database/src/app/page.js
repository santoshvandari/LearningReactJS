import { getMovies, searchMovies } from '@/apis/getMovies';
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import MovieSection from '@/components/MovieSection/MovieSection'
import { Suspense } from 'react';



export default async function HomePage({searchParams}) {
    const {query} = await searchParams;
    let moviesData = {
        results: [], 
        total_pages: 0, 
        page: 1,
        total_results: 0
    };
    console.log(query);
    
    if (query) {
        console.log('Searching movies for query:', query);
        
        moviesData = await searchMovies(query);
    }else{
        console.log('No search query provided, fetching now playing movies.');
        
        moviesData = await getMovies();
    }
    
    if (!moviesData) {
        return (
            <>
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="text-center py-20">
    -                        <h1 className="text-3xl font-bold mb-4">Welcome to MovieDB</h1>
                            <p className="text-gray-300 mb-8">Your gateway to the world of movies</p>
                            <p className="text-gray-300">Failed to load movies. Please try again later.</p>
                        </div>
                    </div>
            </>
        )
    }

    return (
        
        <>
                <HeroSection />
                <MovieSection moviesData={moviesData}/>
        </>
    )
}


