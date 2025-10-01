import React from "react";
import Search from "@/components/Search/Search";

function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 text-center">
            <div className="max-w-3xl mx-auto px-6">
                {/* Tagline */}
                <p className="text-lg md:text-xl text-gray-300 mb-4">
                    Explore a vast collection of movies and find your favorites!
                </p>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight flex flex-col justify-center items-center gap-4">
                    <span>Welcome to the </span> <span className="text-yellow-400">Movie Database</span>
                </h1>

                {/* Search Component */}
                <Search />
            </div>
        </section>
    );
}

export default HeroSection;
