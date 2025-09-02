// components/FilmList.tsx
import { Film } from "@/types";
import FilmCard from "./FilmCard";

type FilmListProps = {
  title: string;
  films: Film[];
};

export default function FilmList({ title, films }: FilmListProps) {
  // ✅ Ensure only valid films are passed to FilmCard
  const validFilms = (films || []).filter(
    (film): film is Film =>
      !!film &&
      typeof film.id === "number" &&
      typeof film.title === "string" &&
      film.title.trim().length > 0
  );

  if (validFilms.length === 0) {
    return null; // Don’t render if nothing valid
  }

  return (
    <div className="mb-12">
      <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {validFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
