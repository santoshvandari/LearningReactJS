import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Left side - Branding */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">Movie Database</span>. All rights reserved.
                </p>

                {/* Right side - Links */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition">About</Link>
                    <Link href="#" className="hover:text-white transition">Contact</Link>
                    <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
