// app/(pages)/movies/[movieId]/page.tsx
"use client";

import React, { useState, useEffect } from "react";

// This is a temporary function to get mock data
const getMockFilmDetails = (movieId: string) => ({
  id: movieId,
  title: `Movie Title for ID: ${movieId}`,
  description: "This is a detailed description of the film. It's a compelling story that will keep you on the edge of your seat. We will replace this with real data fetched from the Django API.",
  price: 5.99,
});

const MovieDetails = ({ params }: { params: { movieId: string } }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const film = getMockFilmDetails(params.movieId);

  const handlePurchase = () => {
    console.log(`Simulating purchase for ${film.title}...`);
    // In a real app, this would redirect to the Stripe/Mpesa URL
    alert("Purchase successful! The film is now unlocked.");
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{film.title}</h1>
        
        {isUnlocked ? (
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-800 rounded-lg mb-8">
            <div className="flex items-center justify-center h-full">
              <p className="text-2xl">▶️ Film Unlocked - Video Player Here</p>
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
             <p>Trailer Placeholder</p>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          {!isUnlocked && (
            <button
              onClick={handlePurchase}
              className="bg-red-600 text-white w-full py-3 text-xl font-bold rounded hover:bg-red-700 mb-8"
            >
              Pay ${film.price} to Watch Now
            </button>
          )}

          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-400">{film.description}</p>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
