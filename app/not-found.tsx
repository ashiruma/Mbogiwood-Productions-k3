// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the page you’re looking for.  
        It might have been removed, renamed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
