import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function WatchPage({ params }: Props) {
  const { id } = params;

  // Simple placeholder: if you want to validate ids, add logic here
  if (!id) return notFound();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Now playing: {id.replace(/-/g, " ")}</h1>
        <p className="text-gray-300 mb-6">This is a placeholder player. Real player will be added later.</p>

        <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <img src="/placeholder-video-poster.svg" alt="placeholder" className="opacity-60" />
            <div className="absolute">
              <div className="text-center">
                <p className="mb-4">Placeholder poster / player</p>

                {/* Play Sample navigates to a sample film route so the button is functional */}
                <Link href="/watch/journey-home">
                  <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Play Sample</button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-400">When the backend/video service is ready, this route will stream the selected film.</p>
        </div>
      </div>
    </div>
  );
}