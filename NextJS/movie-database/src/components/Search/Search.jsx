import React from 'react'
import Button from '@/components/Button/Button'

function Search() {
    return (
        <div>
            <input type="text" placeholder="Search for a movie..." />
            <Button>Search</Button>
        </div>
    )
}

export default Search
