"use client";
import Spinner from "@/components/Spinner/Spinner";

export default function Loader() {
    return (
        <Spinner>
            <h2 className="text-xl font-semibold text-white mb-2">Loading Movies...</h2>
            <p className="text-gray-400">Please wait while we fetch the latest movies</p>
        </Spinner>
    );
}
