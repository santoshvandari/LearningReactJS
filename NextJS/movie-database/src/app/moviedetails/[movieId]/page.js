import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMovieDetails } from '@/apis/getMoviesInformation';
import MovieDetailsSection from '@/components/MovieDetailsSection/MovieDetailsSection';

export default async function MovieDetailsPage({ params }) {
    // Await params to resolve the Promise
    const { movieId } = await params;
    const movie = await getMovieDetails(movieId);

    if (!movie) {
        notFound();
    }

    return (
        <>
            <MovieDetailsSection movie={movie} />
        </>
    );
}
