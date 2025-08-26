import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span className="text-2xl font-bold">Mbogiwood</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/films" className="hover:text-[#4CAF50]">Films</Link>
            <Link href="/jobs" className="hover:text-[#4CAF50]">Jobs</Link>
            <Link href="/gallery" className="hover:text-[#4CAF50]">Gallery</Link>
            <Link href="/about" className="hover:text-[#4CAF50]">About</Link>
            <Link href="/contact" className="hover:text-[#4CAF50]">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/signin" className="border border-[#4CAF50] text-[#4CAF50] px-3 py-1 rounded">Sign In</Link>
            <Link href="/signup" className="bg-[#4CAF50] text-white px-3 py-1 rounded">Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
