"use client"

import React from "react"
import Link from "next/link" // Import the Link component
import { Button } from "@/components/ui/button"

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Films</h1>
          <p className="text-gray-300 mb-8">Discover curated films and support African storytellers.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" onClick={() => (window.location.href = "/subscribe") }>
              Start Free Trial
            </Button>

            {/* --- UPDATED --- */}
            {/* This button is now wrapped in a Link for faster navigation */}
            <Link href="/films/browse">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
              >
                Browse Free Films
              </Button>
            </Link>

          </div>
        </div>
      </main>

      {/* Footer (subscribe CTA) */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h5 className="font-semibold mb-2">Stay in the loop</h5>
              <p className="text-gray-300">Get updates about new releases and screenings.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90" onClick={() => (window.location.href = "/subscribe") }>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
