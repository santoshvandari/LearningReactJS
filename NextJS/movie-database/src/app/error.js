'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="text-8xl mb-4">⚠️</div>
                    <h1 className="text-4xl font-bold mb-4">Oops!</h1>
                    <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
                    <p className="text-gray-300 mb-8">
                        We encountered an error while loading the page. Please try again.
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={reset}
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            Try Again
                        </button>
                        <Link
                            href="/"
                            className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
