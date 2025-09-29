import React from 'react'

function Spinner({ children }) {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400 mx-auto mb-4"></div>
               {children}
            </div>
        </div>
    )
}

export default Spinner
