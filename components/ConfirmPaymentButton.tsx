"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ConfirmPaymentButton({ movieId, amount, title }: { movieId: string; amount: number; title?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handlePay = async () => {
    setStatus("loading");
    try {
      // Initiate MPesa (stub or real endpoint)
      const res = await fetch("/api/mpesa/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId, amount, title }),
      });

      if (!res.ok) {
        throw new Error("Failed to initiate payment");
      }

      const data = await res.json();
      const checkoutRequestId = data.checkoutRequestId ?? null;

      // Record a purchase (pending) in our DB
      const recordRes = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movieId,
          amount,
          title,
          paymentRef: checkoutRequestId,
        }),
      });

      if (!recordRes.ok) {
        throw new Error("Failed to record purchase");
      }

      setStatus("success");

      // Redirect user back to movie page (or show a waiting page)
      setTimeout(() => {
        router.push(`/movies/${movieId}`);
      }, 1200);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handlePay} disabled={status === "loading"}>
        {status === "loading" ? "Processing..." : "Confirm: Pay with M-Pesa"}
      </Button>
      {status === "success" && <div className="text-green-400">Payment initiated. You will be redirected shortly.</div>}
      {status === "error" && <div className="text-red-400">There was an error initiating payment. Try again.</div>}
    </div>
  );
}
