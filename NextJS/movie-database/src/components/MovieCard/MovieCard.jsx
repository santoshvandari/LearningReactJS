import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MovieCard({ movie }) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-gray-800 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            {/* Movie Poster */}
            <div className="relative w-full h-72">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    priority={false}
                />
                {/* Rating badge */}
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full shadow-md text-sm">
                    ⭐ {movie.vote_average.toFixed(1)}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
                <p className="text-gray-300 text-sm line-clamp-3 mb-3">{movie.overview}</p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                        {new Date(movie.release_date).getFullYear()}
                    </span>

                    {/* Correct Link usage for Next.js 13+ */}
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
