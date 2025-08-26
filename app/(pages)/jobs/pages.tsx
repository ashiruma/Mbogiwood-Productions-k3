import Link from "next/link";

export default function FilmsPage() {
  // Placeholder list of films; keep this brief so it's easy to replace with real data or a server component later
  const items = [
    { id: "film-1", title: "Sunrise Over Lagos", price: 150 },
    { id: "film-2", title: "Sahara Echoes", price: 150 },
    { id: "film-3", title: "Harbor Lights", price: 150 },
  ];

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Films</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.id} className="bg-white rounded-md shadow p-4">
              <img src={`/placeholder.svg?height=240&width=360&text=${encodeURIComponent(f.title)}`} alt={f.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-gray-600 mb-4">KES {f.price}</p>
              <div className="flex gap-2">
                <Link href={`/movies/${f.id}`} className="text-[#4CAF50]">View</Link>
                <Link href={`/purchase/${f.id}?amount=${f.price}&title=${encodeURIComponent(f.title)}`} className="ml-auto bg-[#4CAF50] text-white px-3 py-1 rounded">Buy</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
