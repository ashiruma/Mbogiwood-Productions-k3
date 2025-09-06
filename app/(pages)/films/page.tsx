"use client";

import { useEffect, useState, useRef } from "react";
import apiClient from "@/lib/api";
import { Film } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FilmRow({ title, films }: { title: string; films: Film[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (films.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mb-12 relative">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="relative">
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/70 hover:bg-background shadow-md hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {films.map((film) => (
            <Link
              key={film.id}
              href={`/films/${film.slug}`}
              className="group flex-shrink-0 w-48 snap-start rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {film.poster_url && (
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={film.poster_url}
                    alt={film.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-3 bg-card">
                <h3 className="text-base font-semibold text-foreground truncate">
                  {film.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {film.category?.name}
                </p>
                {film.price_cents > 0 && (
                  <p className="text-xs font-medium mt-1">
                    ${(film.price_cents / 100).toFixed(2)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/70 hover:bg-background shadow-md hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default function AllFilmsPage() {
  const [promoFilms, setPromoFilms] = useState<Film[]>([]);
  const [paidFilms, setPaidFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await apiClient.get("/api/films/");
        const data = response.data;

        setPromoFilms(Array.isArray(data.promo_films) ? data.promo_films : []);
        setPaidFilms(Array.isArray(data.paid_films) ? data.paid_films : []);
      } catch (error) {
        console.error("Failed to fetch films:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, []);

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Our Films
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our full collection of films — from promotional features to
          premium releases.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-muted-foreground">Loading films...</p>
      ) : paidFilms.length === 0 && promoFilms.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No films available at the moment. Please check back later.
        </p>
      ) : (
        <>
          <FilmRow title="Latest Releases" films={paidFilms} />
          <FilmRow title="Promotional Features" films={promoFilms} />
        </>
      )}
    </main>
  );
}