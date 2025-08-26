import Link from "next/link";

export default function ProfileCreatePage() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
        <p className="text-gray-600 mb-6">Profile creation UI is coming soon. For now, please prepare your CV and portfolio.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/jobs">
            <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Browse Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}