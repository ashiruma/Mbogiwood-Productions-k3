// app/(pages)/films/[slug]/page.tsx
import apiClient from "@/lib/api";
import { Film } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Clock, Star } from "lucide-react";
import FilmPurchaseClient from "@/components/FilmPurchaseClient";
import ReviewsSection from "@/components/ReviewsSection";
import { Toaster } from 'react-hot-toast';

async function getFilmDetail(slug: string): Promise<Film | null> {
  try {
    const response = await apiClient.get(`/films/${slug}/`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch film with slug ${slug}:`, error);
    return null;
  }
}

export default async function FilmDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const film = await getFilmDetail(resolvedParams.slug);

  if (!film) {
    return (
      <main className="container mx-auto py-12 px-6">
        <div className="text-center">
            <h1 className="text-2xl font-bold">Film not found.</h1>
        </div>
      </main>
    );
  }

  // Ensure trailer_link is not null before trying to replace
  const embedUrl = film.trailer_link ? film.trailer_link.replace("watch?v=", "embed/") : "";

  return (
    <>
      <Toaster position="top-center" />
      <main className="container mx-auto py-8 sm:py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-1 lg:col-span-1">
            <img 
              src={film.poster_image || 'https://via.placeholder.com/500x750.png?text=No+Poster'} 
              alt={`Poster for ${film.title}`}
              className="rounded-lg shadow-lg w-full"
            />
            <FilmPurchaseClient film={film} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-3">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{film.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-muted-foreground">
              <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-accent" /> 4.8</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 1h 45m</div>
              <span>{film.category?.name || 'Drama'}</span>
              <span>{film.release_date ? new Date(film.release_date).getFullYear() : '2024'}</span>
            </div>
            <Separator className="my-6" />

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
              {film.trailer_link ? (
                 <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe 
                      className="w-full h-full"
                      src={embedUrl} // <-- THIS LINE IS THE FIX
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                 </div>
              ) : (
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">No trailer available.</p>
                </div>
              )}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
            <p className="text-secondary-foreground leading-relaxed">
              {film.description}
            </p>
          </div>
        </div>

        <Separator className="my-12" />
        
        <ReviewsSection filmSlug={film.slug} />
      </main>
    </>
  );
}