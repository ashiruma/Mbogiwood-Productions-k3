import { fetchFilms } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function FilmsPage() {
  // The fetchFilms function from lib/data.ts already has error handling
  const films = await fetchFilms();

  return (
    <div className="bg-background">
      <main className="container mx-auto py-12 px-6">
        <h1 className="font-heading text-4xl font-bold text-center mb-12 text-primary">
          Our Films
        </h1>
        
        {films.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No films available at the moment. Please check back later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film) => (
              <Card key={film.id} className="overflow-hidden bg-secondary border-border hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  {/* Use Next.js Image component for optimization */}
                  <Image
                    src={film.poster_image || '/placeholder-image.png'} // Fallback image
                    alt={`Poster for ${film.title}`}
                    width={500}
                    height={750}
                    className="w-full h-auto object-cover aspect-[2/3]"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-heading mb-2">{film.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 line-clamp-3 h-18">
                    {film.description}
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={film.trailer_link || '#'} target="_blank" rel="noopener noreferrer">
                      Watch Trailer
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
