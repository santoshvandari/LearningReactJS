import React from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";


function MovieSection() {
    const tempMovies = {
        "dates": { maximum: "2025-10-01", minimum: "2025-08-20" },
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/ckT96Sn8r1IDNyIBJ1mDZ1Jh2kR.jpg",
                "genre_ids": [
                    28,
                    80,
                    53
                ],
                "id": 1267319,
                "original_language": "ko",
                "original_title": "사마귀",
                "overview": "Mantis, an ace assassin, returns to the contract killer industry after a hiatus, encountering his trainee friend Jae-yi and a retired legendary killer Dok-go, who now runs the organization.",
                "popularity": 475.7892,
                "poster_path": "/xS9bbciDC5lHPgl79SrPyzxKAXL.jpg",
                "release_date": "2025-09-26",
                "title": "Mantis",
                "video": false,
                "vote_average": 5.9,
                "vote_count": 21
            },
            {
                "adult": false,
                "backdrop_path": "/iUy1LdIX74krb0ZEhq8IImIneFk.jpg",
                "genre_ids": [
                    28,
                    10752,
                    53,
                    36
                ],
                "id": 1328803,
                "original_language": "en",
                "original_title": "Prisoner of War",
                "overview": "British RAF Wing Commander James Wright is captured by the Japanese during WWII and forced to fight in brutal hand-to-hand combat. The Japanese soldiers get more than they bargained for when Wright’s years of martial arts training in Hong Kong prove him to be a formidable opponent.",
                "popularity": 440.7085,
                "poster_path": "/1XET89sjRm9mUuHXhGIlKTNd5uD.jpg",
                "release_date": "2025-09-19",
                "title": "Prisoner of War",
                "video": false,
                "vote_average": 7.095,
                "vote_count": 37
            },
        ],
        "total_pages": 287,
        "total_results": 5739
    };

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
                {tempMovies?.results?.length === 0 ? (
                    <p className="text-center text-gray-400 italic">
                        No movies available.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {tempMovies?.results?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
                {tempMovies?.total_pages && (
                    <Pagination
                        totalPages={tempMovies.total_pages}
                        currentPage={tempMovies.page}
                    />
                )}
            </div>

        </section>
    );
}

export default MovieSection;
