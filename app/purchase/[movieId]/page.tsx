import ConfirmPaymentButton from "@/components/ConfirmPaymentButton";
import Header from "@/components/layout/Header";
import Image from "next/image";

interface PurchasePageProps {
  params: { movieId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function PurchasePage({ params, searchParams }: PurchasePageProps) {
  const movieId = params.movieId;
  const amount = Number(Array.isArray(searchParams?.amount) ? searchParams?.amount[0] : searchParams?.amount) || 200; // default
  const title = Array.isArray(searchParams?.title) ? searchParams?.title[0] : (searchParams?.title as string | undefined);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6 text-center text-white">
        <h1 className="text-3xl font-semibold mb-4">Purchase & Payment</h1>
        <p className="mb-8 text-gray-300">You are buying access to <strong>{title ?? movieId}</strong>. Amount: KES {amount}</p>

        <div className="flex flex-col items-center gap-6">
          <Image src="/silent-bruises-hero.jpg" alt="Hero" width={800} height={400} className="rounded-lg opacity-80" />
          <ConfirmPaymentButton movieId={movieId} amount={amount} title={title} />
        </div>
      </main>
    </div>
  );
}
