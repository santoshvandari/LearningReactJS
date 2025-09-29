import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MovieCard({ movie }) {
    const title = movie.title || 'Unknown Title';
    const overview = movie.overview || 'No description available.';
    const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown';
    const posterPath = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-gray-800 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            {/* Movie Poster */}
            <div className="relative w-full h-72">
                {posterPath ? (
                    <Image
                        src={posterPath}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                        priority={false}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">No Image</span>
                        </div>
                    </div>
                )}
                
                {/* Rating badge */}
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full shadow-md text-sm">
                    ⭐ {voteAverage}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2" title={title}>
                    {title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3 mb-3" title={overview}>
                    {overview}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                        {releaseYear}
                    </span>

                    {/* Details Link */}
                    <Link
                        href={`/moviedetails/${movie.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm transition inline-block text-center"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
