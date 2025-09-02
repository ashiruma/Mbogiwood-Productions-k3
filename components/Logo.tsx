// components/Logo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Logo() {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="flex items-center space-x-2">
      {!imageError ? (
        <Image
          src="/mbogiwoodlogo.png" // ✅ should be inside /public
          alt="Mbogiwood Productions Logo"
          width={120}
          height={45}
          priority={true}
          onError={() => setImageError(true)} // fallback if image fails
        />
      ) : (
        <div className="flex items-center space-x-2">
          {/* Multicolored brand circle */}
          <span
            className="w-6 h-6 rounded-full flex-shrink-0"
            style={{
              background:
                "conic-gradient(from 0deg, #008000 0deg 120deg, #FFD700 120deg 240deg, #FF0000 240deg 360deg)",
            }}
          />
          {/* Branded text fallback */}
          <span className="font-heading text-xl font-bold text-primary">
            Mbogiwood Productions
          </span>
        </div>
      )}
    </Link>
  );
}
