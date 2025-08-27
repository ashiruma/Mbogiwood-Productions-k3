'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-transparent">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/mbogiwood-logo.png"
          alt="Mbogiwood logo"
          width={160}
          height={48}
          className="logo-img"
          priority
        />
      </Link>

      <nav className="flex items-center space-x-4">
        <Link href="/gallery" className="hover:text-[var(--primary)] transition-colors">Gallery</Link>
        <Link href="/about" className="hover:text-[var(--primary)] transition-colors">About</Link>
        <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
