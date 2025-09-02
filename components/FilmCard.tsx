// components/FilmCard.tsx
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Film } from '@/types';

type FilmCardProps = {
  film: Film;
};

export default function FilmCard({ film }: FilmCardProps) {
  if (!film) return null; // ✅ prevents crashes on undefined film

  const posterUrl = film.poster_image || '/placeholder-137vc.png'; 

  // ✅ Defensive description handling
  const description = film.description
    ? film.description.substring(0, 100) + (film.description.length > 100 ? '...' : '')
    : 'No description available.';

  // ✅ Normalize status
  const status = film.status?.toLowerCase() || "new"; 
  let statusLabel = "New Release";
  let statusColor = "text-accent"; // green

  if (status === "coming") {
    statusLabel = "Coming Soon";
    statusColor = "text-secondary"; // gold
  } else if (status === "exclusive") {
    statusLabel = "Exclusive";
    statusColor = "text-primary"; // red
  }

  return (
    <Card 
      className="overflow-hidden bg-card text-card-foreground flex flex-col 
                 border-2 border-secondary/40 hover:border-secondary 
                 hover:shadow-xl transition-transform duration-300 hover:scale-105"
    >
      {/* Poster */}
      <Link href={`/films/${film.slug}`} className="block">
        <img 
          src={posterUrl} 
          alt={`Poster for ${film.title}`} 
          className="w-full h-56 object-cover"
        />
      </Link>

      {/* Card Content */}
      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Film Status Badge */}
        <div className="flex items-center mb-3">
          <Star className={`w-4 h-4 mr-1 ${statusColor}`} />
          <span className={`text-sm font-medium ${statusColor}`}>{statusLabel}</span>
        </div>

        {/* Film Title */}
        <h4 className="font-heading text-xl font-bold text-foreground mb-3 flex-grow">
          {film.title}
        </h4>

        {/* Film Description */}
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <Button 
          asChild 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide"
        >
          <Link href={`/films/${film.slug}`}>Watch Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
