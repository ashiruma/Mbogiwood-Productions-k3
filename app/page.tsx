"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero / top content (keep your existing content above) */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Exclusive production photos and moments</h2>
          <p className="text-gray-600 mb-4">Enjoy behind the scenes and select stills from our productions.</p>

          <Button
            onClick={() => (window.location.href = "/gallery")}
            variant="outline"
            className="w-full md:w-auto border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
          >
            View Gallery
          </Button>
        </div>
      </section>

      {/* Footer (excerpt) */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xl font-bold">Mbogiwood</h4>
              </div>
              <p className="text-gray-300">Celebrating African cinema and connecting talent with opportunities.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/films" className="hover:text-[#4CAF50]">
                    Films
                  </a>
                </li>
                <li>
                  <a href="/jobs" className="hover:text-[#4CAF50]">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-[#4CAF50]">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#4CAF50]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/help" className="hover:text-[#4CAF50]">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-[#4CAF50]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-[#4CAF50]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <p className="text-gray-300 mb-4">Stay updated with the latest from Mbogiwood</p>
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90" onClick={() => (window.location.href = "/subscribe") }>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Mbogiwood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
