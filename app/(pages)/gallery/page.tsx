type GalleryImage = {
  id: string;
  url: string;
  caption?: string;
};

async function fetchGallery(): Promise<GalleryImage[]> {
  const base = process.env.DJANGO_API_URL;
  if (!base) throw new Error("DJANGO_API_URL is not configured.");
  const res = await fetch(`${base.replace(/\/$/, "")}/api/gallery/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch gallery: ${res.status}`);
  return (await res.json()) as GalleryImage[];
}

export default async function GalleryPage() {
  let images: GalleryImage[] = [];
  let error: string | null = null;

  try {
    images = await fetchGallery();
  } catch (err: any) {
    console.error("Error fetching gallery:", err);
    error = err.message || String(err);
  }

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>

        {error && <div className="mb-6 text-red-500">Could not load gallery images. {error}</div>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.length === 0 && !error && <div className="text-gray-600">No images available.</div>}
          {images.map((img) => (
            <div key={img.id} className="rounded overflow-hidden shadow bg-white">
              <img src={img.url} alt={img.caption ?? `Image ${img.id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="font-medium">{img.caption ?? "Gallery image"}</div>
                <div className="text-sm text-gray-500">Image ID: {img.id}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
