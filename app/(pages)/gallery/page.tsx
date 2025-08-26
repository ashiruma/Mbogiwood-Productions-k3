import { djangoFetch } from "@/lib/django";

export default async function GalleryPage() {
  let data: any = null;
  let error: string | null = null;

  try {
    data = await djangoFetch("/api/gallery/");
  } catch (err: any) {
    console.error("Error fetching gallery from Django:", err);
    error = err?.message || String(err);
  }

  // Helper to render objects gracefully
  const renderKeyValue = (obj: any) => {
    if (obj == null) return <div className="text-gray-500">null</div>;
    if (typeof obj !== "object") return <div className="text-sm text-[#3B2F2F]">{String(obj)}</div>;
    return (
      <div className="space-y-1">
        {Object.entries(obj).map(([k, v]) => (
          <div key={k} className="flex items-start gap-2">
            <div className="w-36 text-sm text-gray-600">{k}</div>
            <div className="flex-1 text-sm text-[#3B2F2F]">{String(typeof v === "object" ? JSON.stringify(v) : v)}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>

        {error && <div className="mb-6 text-red-500">Could not load gallery from Django API. {error}</div>}

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Raw API response</h2>
          <div className="bg-gray-100 p-4 rounded border border-gray-200 overflow-auto">
            <pre className="whitespace-pre-wrap text-sm">{data ? JSON.stringify(data, null, 2) : "No data returned"}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Images</h2>
          {Array.isArray(data) ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((img: any) => {
                const src = img.url ?? img.image ?? null;
                const caption = img.caption ?? img.title ?? "";
                return (
                  <div key={img.id ?? JSON.stringify(img)} className="rounded overflow-hidden shadow bg-white">
                    {src ? (
                      // Render image URL exactly as provided
                      <img src={src} alt={caption || `Image ${img.id ?? ""}`} className="w-full h-48 object-cover" />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">No image URL</div>
                    )}
                    <div className="p-4">
                      <div className="font-medium text-[#3B2F2F]">{caption || "Gallery image"}</div>
                      <div className="text-sm text-gray-500 mt-1">{renderKeyValue(img)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-gray-600">Response is not an array. See raw JSON above.</div>
          )}
        </section>
      </main>
    </div>
  );
}
