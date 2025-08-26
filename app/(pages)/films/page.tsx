import Link from "next/link";

type Film = {
  id: string;
  title: string;
  price?: number;
  thumbnail_url?: string;
  description?: string;
};

async function fetchFilms(): Promise<Film[]> {
  const base = process.env.DJANGO_API_URL;
  if (!base) {
    throw new Error("DJANGO_API_URL is not configured.");
  }
  const res = await fetch(`${base.replace(/\/$/, "")}/api/films/`, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch films: ${res.status}`);
  }
  return (await res.json()) as Film[];
}

export default async function FilmsPage() {
  let films: Film[] = [];
  let error: string | null = null;

  try {
    films = await fetchFilms();
  } catch (err: any) {
    console.error("Error fetching films:", err);
    error = err.message || String(err);
  }

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Films</h1>

        {error && (
          <div className="mb-6 text-red-500">
            Could not load films from the API. {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.length === 0 && !error && <div className="text-gray-600">No films available.</div>}
          {films.map((f) => (
            <div key={f.id} className="bg-white rounded-md shadow p-4">
              <img
                src={f.thumbnail_url ?? `/placeholder.svg?height=240&width=360&text=${encodeURIComponent(f.title)}`}
                alt={f.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-gray-600 mb-4">{f.description ?? ""}</p>
              <div className="flex items-center">
                <Link href={`/movies/${f.id}`} className="text-[#4CAF50]">View</Link>
                <Link href={`/purchase/${f.id}?amount=${f.price ?? 150}&title=${encodeURIComponent(f.title)}`} className="ml-auto bg-[#4CAF50] text-white px-3 py-1 rounded">
                  Buy
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
