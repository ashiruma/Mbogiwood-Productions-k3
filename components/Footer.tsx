// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <Image
            src="/mbogiwood-logo.png"
            alt="Mbogiwood Productions Logo"
            width={120}
            height={60}
          />
          <p className="mt-4">Creative Storytelling Through Film.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link href="/"><a className="hover:text-yellow-400">Home</a></Link></li>
            <li className="mb-2"><Link href="/#films"><a className="hover:text-yellow-400">Films</a></Link></li>
            <li><Link href="/jobs"><a className="hover:text-yellow-400">Jobs</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <p>Nairobi, Kenya</p>
          <p>admin@mbogiwood.com</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-800 pt-6">
        <p>&copy; {new Date().getFullYear()} Mbogiwood Productions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
