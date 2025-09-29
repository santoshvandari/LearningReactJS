import React from 'react';

function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-700 mb-4"></div>
            <p className="text-gray-300 text-lg">Loading movies...</p>
        </div>
    );
}

export default Loader;
