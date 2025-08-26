export default function GalleryPage() {
  const images = new Array(6).fill(0).map((_, i) => `/placeholder.svg?height=300&width=400&text=Image+${i+1}`);
  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded overflow-hidden shadow bg-white">
              <img src={src} alt={`Gallery ${idx+1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="font-medium">Image {idx + 1}</div>
                <div className="text-sm text-gray-500">Caption or description</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
