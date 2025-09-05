// FILE: components/FilmList.tsx
"use client";

import { Film } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function FilmList({ title, films }: { title: string; films: Film[] }) {
  if (!films || films.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {films.map((film) => (
          <Link key={film.id} href={`/films/${film.slug}`}>
            <div className="group cursor-pointer bg-card rounded-xl shadow hover:shadow-lg overflow-hidden transition">
              {film.poster_url ? (
                <Image
                  src={film.poster_url}
                  alt={film.title}
                  width={300}
                  height={450}
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />
              ) : (
                <div className="w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
                  No Poster
                </div>
              )}
              <div className="p-3">
                <h3 className="text-sm font-semibold truncate">{film.title}</h3>
                <p className="text-xs text-muted-foreground">{film.filmmaker_name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
