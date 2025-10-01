import React from "react";
import Link from "next/link";

function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Title */}
                <Link href="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
                    🎬 Movie Database
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                    <Link href="/" className="hover:text-yellow-400 transition">Movies</Link>
                    <Link href="/" className="hover:text-yellow-400 transition">About</Link>
                    <Link href="/" className="hover:text-yellow-400 transition">Contact</Link>
                </div>

            </nav>
        </header>
    );
}

export default Header;
