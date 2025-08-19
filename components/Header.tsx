// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const brandYellow = "#FBBF24";

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <Image
              src="/mbogiwood-logo.png" // Make sure your logo is in the /public folder
              alt="Mbogiwood Productions Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </a>
        </Link>
        <ul className="flex space-x-6 items-center">
          <li><Link href="/"><a className="hover:text-yellow-400">Home</a></Link></li>
          <li><Link href="/#films"><a className="hover:text-yellow-400">Films</a></Link></li>
          <li><Link href="/#gallery"><a className="hover:text-yellow-400">Gallery</a></Link></li>
          <li><Link href="/jobs"><a className="hover:text-yellow-400">Jobs</a></Link></li>
          <li><Link href="/silent-bruises"><a style={{ color: brandYellow }}>Silent Bruises</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
