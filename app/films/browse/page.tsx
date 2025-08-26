// app/films/browse/page.tsx
import FilmCard from "@/components/film-card";
import { fetchFilms } from "@/lib/data";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default async function BrowseFilmsPage() {
  // Fetch real data from your Django backend
  const { promo_films, paid_films } = await fetchFilms();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Film Collection</h1>
        
        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-2">Free Promos</h2>
        {promo_films?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {promo_films.map((film) => (
              <Link href={`/movies/${film.slug}`} key={film.slug}>
                <FilmCard film={film} />
              </Link>
            ))}
          </div>
        ) : <p className="text-gray-400 mb-8">No promotional films available right now.</p>}

        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-2">Pay-to-Watch</h2>
        {paid_films?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paid_films.map((film) => (
              <Link href={`/movies/${film.slug}`} key={film.slug}>
                <FilmCard film={film} />
              </Link>
            ))}
          </div>
         ) : <p className="text-gray-400">No paid films available right now.</p>}
      </main>
    </div>
  );
}
