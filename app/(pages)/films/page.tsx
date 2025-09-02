// app/(pages)/films/page.tsx
import apiClient from "@/lib/api";
import { Film } from "@/types";
import FilmList from "@/components/FilmList";

async function getAllFilms(): Promise<{ promo_films: Film[], paid_films: Film[] }> {
  try {
    const response = await apiClient.get("/films/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch films:", error);
    return { promo_films: [], paid_films: [] };
  }
}

export default async function AllFilmsPage() {
  const { promo_films, paid_films } = await getAllFilms();

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Films</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our full collection of promotional and premium films.
        </p>
      </div>
      { (paid_films.length === 0 && promo_films.length === 0) ? (
          <p className="text-center text-muted-foreground">No films available at the moment. Please check back later.</p>
      ) : (
          <>
              <FilmList title="Latest Releases" films={paid_films} />
              <FilmList title="Promotional Features" films={promo_films} />
          </>
      )}
    </main>
  );
}