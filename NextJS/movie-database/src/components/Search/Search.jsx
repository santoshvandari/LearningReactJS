'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from "@/components/Button/Button";

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchQuery.trim()) return;
        
        setIsLoading(true);
        
        try {
            // Navigate to search results page
            router.push(`/?query=${encodeURIComponent(searchQuery.trim())}`);
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center max-w-lg mx-auto bg-white rounded-full shadow-md overflow-hidden">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none outline-none"
                disabled={isLoading}
            />
            <Button 
                type="submit"
                variant="primary" 
                size="sm" 
                className="rounded-r-full"
                disabled={isLoading || !searchQuery.trim()}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </Button>
        </form>
    );
}

export default Search;
