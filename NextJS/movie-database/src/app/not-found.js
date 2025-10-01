"use client";
import Link from 'next/link';

export default function NotFound() {
    return (
        <>
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="text-8xl mb-4">🎬</div>
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                    <p className="text-gray-300 mb-8">
                        The movie or page you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <div className="space-y-4">
                        <Link 
                            href="/"
                            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
        </>
    );
}
