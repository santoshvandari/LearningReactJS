import Button from '@/components/Button/Button'
import React from 'react'
import Link from 'next/link'

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center px-6">
            <h3 className="text-5xl font-bold text-white mb-4">404 - Page Not Found</h3>
            <p className="text-gray-300 mb-6">
                The page you are looking for does not exist or may have been moved.
            </p>
            <Link href="/">
                <Button variant="primary">Go To Home</Button>
            </Link>
        </div>
    )
}

export default NotFound
