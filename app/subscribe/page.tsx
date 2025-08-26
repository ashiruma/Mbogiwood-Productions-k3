import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Subscribe</h1>
        <p className="text-gray-600 mb-6">Subscription options are coming soon. We'll add flexible plans and billing here.</p>
        <div className="flex gap-4 justify-center">
          {/* Notify Me navigates to the Contact page so the button is functional */}
          <Link href="/contact">
            <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Notify Me</button>
          </Link>
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-[#3B2F2F] text-white rounded-md">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}