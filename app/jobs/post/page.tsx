import Link from "next/link";

export default function JobsPostPage() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
        <p className="text-gray-600 mb-6">Job posting form coming soon. For now you can contact us directly via the Contact page.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <button className="px-4 py-2 bg-[#3B2F2F] text-white rounded-md">Contact Us</button>
          </Link>
          <Link href="/jobs">
            <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Back to Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}