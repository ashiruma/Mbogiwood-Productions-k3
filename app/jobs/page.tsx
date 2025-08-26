"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Jobs</h1>
          <p className="text-gray-600 mb-8">Find opportunities or post roles for production talent.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" onClick={() => (window.location.href = "/auth/signup") }>
              Create Profile
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
              onClick={() => (window.location.href = "/post-job") }
            >
              Post a Job
            </Button>
          </div>
        </div>
      </main>

      {/* Footer (jobs subscribe) */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h5 className="font-semibold mb-4">Opportunities</h5>
          <p className="text-gray-300 mb-4">Stay updated with the latest opportunities</p>
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90" onClick={() => (window.location.href = "/subscribe") }>
            Subscribe to Jobs
          </Button>
        </div>
      </footer>
    </div>
  )
}
