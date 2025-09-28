import Card from '@/components/Card/Card';
import React from 'react'

export default async function page({params}) {
    const {movieId} = await params;
    console.log(movieId);
    return (
        <div>
            <Card />
        </div>
    )
}
