"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 mb-8">A curated collection of production stills and photographic work.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" onClick={() => (window.location.href = "/gallery/submit") }>
              Submit Your Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
              onClick={() => (window.location.href = "/gallery/guidelines") }
            >
              Photographer Guidelines
            </Button>
          </div>
        </div>
      </main>

      {/* Footer (follow/subscribe) */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h5 className="font-semibold mb-4">Follow the Gallery</h5>
          <p className="text-gray-300 mb-4">Follow us for the latest visual stories</p>
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90" onClick={() => (window.location.href = "/subscribe") }>
            Follow Gallery
          </Button>
        </div>
      </footer>
    </div>
  )
}
