import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-gray-600 mb-6">Settings coming soon — we’re working on it.</p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}