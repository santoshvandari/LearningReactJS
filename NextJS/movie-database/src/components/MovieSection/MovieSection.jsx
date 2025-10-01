import React from "react";
import MovieCard from "@/components/MovieCard/MovieCard";

function MovieSection({ moviesData}) {
    return (
        <section className="py-12 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        🎬 Movie List
                    </h2>
                    <p className="text-gray-300 mt-2">
                        Discover the latest and greatest films.
                    </p>
                </div>


                {/* Movie Grid or Fallback */}
                {moviesData && (
                    <>
                        {moviesData?.results?.length === 0 ? (
                            <p className="text-center text-gray-400 italic py-20">
                                No movies available.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {moviesData.results?.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default MovieSection;
