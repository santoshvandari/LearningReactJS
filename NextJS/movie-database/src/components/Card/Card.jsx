import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react'

async function fetchMovieDetails(movie){
    return {
        "adult": false,
        "backdrop_path": "/s94NjfKkcSczZ1FembwmQZwsuwY.jpg",
        "belongs_to_collection": null,
        "budget": 200000000,
        "genres": [
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 12,
                "name": "Adventure"
            }
        ],
        "homepage": "https://www.marvel.com/movies/the-fantastic-four-first-steps",
        "id": 617126,
        "imdb_id": "tt10676052",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_title": "The Fantastic 4: First Steps",
        "overview": "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
        "popularity": 742.1079,
        "poster_path": "/cm8TNGBGG0aBfWj0LgrESHv8tir.jpg",
        "production_companies": [
            {
                "id": 420,
                "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
                "name": "Marvel Studios",
                "origin_country": "US"
            },
            {
                "id": 176762,
                "logo_path": null,
                "name": "Kevin Feige Productions",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2025-07-22",
        "revenue": 520716140,
        "runtime": 115,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Welcome to the family.",
        "title": "The Fantastic 4: First Steps",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1598
    }
}


async function Card({ movieId }) {

    const movie = await fetchMovieDetails(movieId);

    if (!movie) throw new notFound();

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            {/* Movie Poster */}
            <div className="relative w-full h-72">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {movie.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {movie.overview}
                </p>

                {/* Genre Pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {movie.genres?.map((genre) => (
                        <span
                            key={genre.id}
                            className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-medium rounded-full"
                        >
                            {genre.name}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {new Date(movie.release_date).getFullYear()}
                    </span>
                    <a
                        href={movie.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm transition"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card
