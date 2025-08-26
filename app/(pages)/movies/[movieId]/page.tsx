import Link from "next/link";
import ConfirmPaymentButton from "@/components/ConfirmPaymentButton";

interface PurchasePageProps {
  params: { movieId: string };
  searchParams?: { amount?: string; title?: string };
}

export default function PurchasePage({ params, searchParams }: PurchasePageProps) {
  const { movieId } = params;
  const amount = searchParams?.amount ?? "150";
  const title = searchParams?.title ?? "Selected Movie";

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      {/* Navigation (kept visually consistent with About page) */}
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
            </div>
            <Link href="/" className="text-2xl font-bold">
              Mbogiwood
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/films" className="hover:text-[#4CAF50] transition-colors">Films</Link>
            <Link href="/jobs" className="hover:text-[#4CAF50] transition-colors">Jobs</Link>
            <Link href="/gallery" className="hover:text-[#4CAF50] transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/signin" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent px-3 py-1 rounded-md border">Sign In</Link>
            <Link href="/signup" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-3 py-1 rounded-md">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Checkout */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white shadow-md rounded-md p-8">
            <h1 className="text-3xl font-bold text-[#3B2F2F] mb-4">Checkout</h1>
            <p className="text-gray-600 mb-6">You're about to buy: <span className="font-semibold text-[#3B2F2F]">{title}</span></p>

            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-gray-500">Amount</div>
                <div className="text-2xl font-bold text-[#4CAF50]">KES {amount}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Movie ID</div>
                <div className="text-lg font-medium text-[#3B2F2F]">{movieId}</div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Confirm to initiate M-Pesa payment. After initiating, follow the prompts on your phone to complete the payment.
            </p>

            <ConfirmPaymentButton movieId={movieId} />

            <div className="mt-8 text-sm text-gray-500">
              <p>If you prefer not to proceed, <Link href={`/movies/${movieId}`} className="text-[#4CAF50]">go back to movie</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (simple) */}
      <footer className="bg-[#3B2F2F] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300">&copy; 2024 Mbogiwood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
