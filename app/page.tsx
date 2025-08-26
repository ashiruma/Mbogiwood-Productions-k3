import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span className="text-2xl font-bold">Mbogiwood</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/films" className="hover:text-[#4CAF50]">Films</Link>
            <Link href="/jobs" className="hover:text-[#4CAF50]">Jobs</Link>
            <Link href="/gallery" className="hover:text-[#4CAF50]">Gallery</Link>
            <Link href="/about" className="hover:text-[#4CAF50]">About</Link>
            <Link href="/contact" className="hover:text-[#4CAF50]">Contact</Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link href="/signin" className="text-sm border border-[#4CAF50] text-[#4CAF50] px-3 py-1 rounded">Sign In</Link>
            <Link href="/signup" className="text-sm bg-[#4CAF50] text-white px-3 py-1 rounded">Sign Up</Link>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover & Support African Cinema</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Browse films, connect with industry professionals and support creators across the continent.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/films" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-5 py-3 rounded-md">Browse Films</Link>
            <Link href="/about" className="bg-transparent border border-white text-white px-5 py-3 rounded-md hover:bg-white hover:text-[#3B2F2F]">Learn More</Link>
          </div>
        </div>
      </header>

      <main className="py-12 max-w-7xl mx-auto px-6">
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-md shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-[#3B2F2F]">Featured Films</h3>
            <p className="text-gray-600 mt-2">Curated selection from across Africa.</p>
            <div className="mt-4">
              <Link href="/films" className="text-[#4CAF50]">View Films →</Link>
            </div>
          </div>

          <div className="bg-white rounded-md shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-[#3B2F2F]">Jobs & Opportunities</h3>
            <p className="text-gray-600 mt-2">Find roles and collaborate with peers.</p>
            <div className="mt-4">
              <Link href="/jobs" className="text-[#4CAF50]">View Jobs →</Link>
            </div>
          </div>

          <div className="bg-white rounded-md shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-[#3B2F2F]">Gallery & Events</h3>
            <p className="text-gray-600 mt-2">Discover photos, trailers and more.</p>
            <div className="mt-4">
              <Link href="/gallery" className="text-[#4CAF50]">View Gallery →</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3B2F2F] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300">&copy; 2024 Mbogiwood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
