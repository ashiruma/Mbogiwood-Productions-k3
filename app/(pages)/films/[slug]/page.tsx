// FILE: app/(pages)/films/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import apiClient from "@/lib/api";
import { Film } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function FilmDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      try {
        const response = await apiClient.get(`/api/films/${slug}/`);
        setFilm(response.data);
      } catch (error) {
        console.error("Failed to fetch film:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchFilm();
  }, [slug]);

  const handleWatch = () => {
    if (!film) return;
    router.push(`/films/api/${film.slug}/stream/`); // 🔑 backend stream endpoint
  };

  const handleMpesaPayment = async () => {
    if (!film) return;

    try {
      setProcessing(true);
      const res = await apiClient.post(`/api/films/pay/${film.slug}/`);

      if (res.data.checkout_url) {
        // Online checkout flow
        window.location.href = res.data.checkout_url;
      } else {
        // STK push flow
        alert("M-Pesa payment request sent to your phone. Confirm to continue.");
      }
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment could not be initiated. Try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <main className="container mx-auto py-12 px-6 text-center">
        <p className="text-muted-foreground">Loading film...</p>
      </main>
    );
  }

  if (!film) {
    return (
      <main className="container mx-auto py-12 px-6 text-center">
        <p className="text-muted-foreground">Film not found.</p>
        <Link href="/films" className="text-primary underline">
          Back to films
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Film Poster */}
        {film.poster_url && (
          <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src={film.poster_url}
              alt={film.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Film Details */}
        <div>
          <h1 className="font-heading text-4xl font-bold mb-4">
            {film.title}
          </h1>
          <p className="text-muted-foreground mb-4">{film.description}</p>

          {film.category?.name && (
            <p className="mb-2 text-sm text-muted-foreground">
              Category: {film.category.name}
            </p>
          )}

          {film.price_cents > 0 ? (
            <p className="text-lg font-semibold mb-6">
              Price: ${(film.price_cents / 100).toFixed(2)}
            </p>
          ) : (
            <p className="text-lg font-semibold mb-6 text-green-600">
              Free to Watch
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            {film.price_cents > 0 ? (
              <button
                onClick={handleMpesaPayment}
                disabled={processing}
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
              >
                {processing ? "Processing..." : "Pay with M-Pesa"}
              </button>
            ) : (
              <button
                onClick={handleWatch}
                className="px-6 py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition"
              >
                Watch Now
              </button>
            )}
            <Link
              href="/films"
              className="px-6 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
