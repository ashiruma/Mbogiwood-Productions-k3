import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Mbogiwood</Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow rounded text-center">
        <h1 className="text-3xl font-bold mb-4">Subscribe</h1>
        <p className="text-gray-600 mb-6">Join our mailing list to get the latest films, jobs and events.</p>

        <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input type="email" placeholder="you@example.com" className="w-full sm:w-auto border rounded px-3 py-2" />
          <button type="button" className="bg-[#4CAF50] text-white px-4 py-2 rounded">Subscribe</button>
        </form>
      </main>

      <footer className="bg-[#3B2F2F] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300">&copy; 2024 Mbogiwood</p>
        </div>
      </footer>
    </div>
  );
}
