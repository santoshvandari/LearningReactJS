import React from "react";
import Button from "@/components/Button/Button";


function Search() {
    return (
        <div className="flex items-center max-w-lg mx-auto bg-white rounded-full shadow-md overflow-hidden">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none outline-none"
            />
            <Button variant="primary" size="sm" className="rounded-r-full">
                Search
            </Button>
        </div>
    );
}

export default Search;
