import React from 'react'

async function page({params}) {
    const {movieId} = await params
    return (
        <div>
            <h1>Movie {movieId}</h1>
        </div>
    )
}

export default page
