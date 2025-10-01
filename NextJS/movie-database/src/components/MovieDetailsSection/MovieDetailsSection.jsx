import React from 'react'
import formatCurrency from "@/helpers/formatCurrency"
import Image from 'next/image';
import Link from 'next/link';


function MovieDetailsSection({ movie }) {
    if (!movie) return null;
    return (
        <>
            {/* Hero Section with Backdrop */}
            <div className="relative">
                {movie.backdrop_path && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                    </div>
                )}

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Movies
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Movie Poster */}
                        <div className="flex-shrink-0">
                            <div className="relative w-80 h-[480px] mx-auto lg:mx-0">
                                {movie.poster_path ? (
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        fill
                                        className="object-cover rounded-lg shadow-2xl"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                                        <span className="text-gray-400">No Poster Available</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Movie Details */}
                        <div className="flex-1">
                            <div className="space-y-6">
                                {/* Title and Rating */}
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
                                    {movie.tagline && (
                                        <p className="text-xl text-gray-300 italic mb-4">{movie.tagline}</p>
                                    )}
                                    <div className="flex items-center space-x-4">
                                        <span className="bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full">
                                            ⭐ {movie.vote_average?.toFixed(1)}
                                        </span>
                                        <span className="text-gray-300">
                                            {movie.vote_count?.toLocaleString()} votes
                                        </span>
                                    </div>
                                </div>

                                {/* Movie Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div><strong>Release Date:</strong> {new Date(movie.release_date || "Unknown").toLocaleDateString()}</div>
                                    <div><strong>Runtime:</strong> {movie.runtime || "Unknown"}</div>
                                    <div><strong>Status:</strong> {movie.status || "Unknown"}</div>
                                    {movie.budget > 0 && <div><strong>Budget:</strong> {formatCurrency(movie.budget)}</div>}
                                    {movie.revenue > 0 && <div><strong>Revenue:</strong> {formatCurrency(movie.revenue)}</div>}
                                </div>

                                {/* Genres */}
                                {movie.genres?.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Genres</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {movie.genres.map(genre => (
                                                <span
                                                    key={genre.id}
                                                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Overview */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                                    <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                                </div>

                                {/* Trailer Button */}
                                {movie.video && (
                                    <div>
                                        <a
                                            href={`https://www.youtube.com/watch?v=${movie.video}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                            </svg>
                                            Watch Trailer
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Production Companies */}
            {movie.production_companies?.length > 0 && (
                <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-700">
                    <h2 className="text-2xl font-bold mb-6">Production Companies</h2>
                    <div className="flex flex-wrap gap-6">
                        {movie.production_companies.map(company => (
                            <div key={company.id} className="flex items-center space-x-3">
                                {company.logo_path && (
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                            alt={company.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <span className="text-gray-300">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDetailsSection
