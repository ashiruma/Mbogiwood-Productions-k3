// components/Navbar.tsx
"use client"; // This marks the component as a Client Component

import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

const Navbar = () => {
  // We use a simple state to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    // In a real app, this would redirect to a login page
    console.log("Signing in...");
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    setIsLoggedIn(false);
  };

  return (
    <nav className="w-full bg-black bg-opacity-90 p-4 fixed z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-red-600">MBOGIWOOD</h1>
          </Link>
          <div className="hidden lg:flex ml-8 space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/series" className="text-white hover:text-gray-300">Series</Link>
            <Link href="/movies" className="text-white hover:text-gray-300">Movies</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BsSearch className="text-white cursor-pointer" />
          <BsBell className="text-white cursor-pointer" />
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <p className="text-white">Welcome!</p>
              <button onClick={handleSignOut} className="text-white hover:text-gray-300">
                Sign Out
              </button>
            </div>
          ) : (
            <button onClick={handleSignIn} className="bg-red-600 text-white px-4 py-2 rounded">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
