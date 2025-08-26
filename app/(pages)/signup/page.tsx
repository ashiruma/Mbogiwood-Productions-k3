import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Mbogiwood</Link>
        </div>
      </nav>

      <main className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Create an account</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Full name</label>
            <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 mt-1" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 mt-1" placeholder="Choose a password" />
          </div>

          <div className="flex items-center justify-between">
            <button type="button" className="bg-[#4CAF50] text-white px-4 py-2 rounded">Create account</button>
            <Link href="/signin" className="text-sm text-[#4CAF50]">Already have an account?</Link>
          </div>
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
