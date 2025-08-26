import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#3B2F2F] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold">Mbogiwood</h4>
            </div>
            <p className="text-gray-300">Celebrating African cinema and connecting talent with opportunities.</p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/films" className="hover:text-[#4CAF50]">Films</Link></li>
              <li><Link href="/jobs" className="hover:text-[#4CAF50]">Jobs</Link></li>
              <li><Link href="/gallery" className="hover:text-[#4CAF50]">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#4CAF50]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-[#4CAF50]">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4CAF50]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#4CAF50]">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <p className="text-gray-300 mb-4">Stay updated with the latest from Mbogiwood</p>
            <Link href="/subscribe" className="bg-[#4CAF50] inline-block px-4 py-2 rounded text-white">Subscribe</Link>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mbogiwood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}