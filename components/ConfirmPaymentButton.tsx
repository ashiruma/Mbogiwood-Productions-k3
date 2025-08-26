"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ConfirmPaymentButton({ movieId }: { movieId: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handlePay = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/mpesa/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId }),
      });

      if (!res.ok) {
        throw new Error("Failed to initiate payment");
      }

      const data = await res.json();
      // data.checkoutRequestId can be used to display to user or poll for callback
      setStatus("success");

      // Redirect user back to movie page (or you could show a waiting page)
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
      <Button onClick={handlePay} className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" disabled={status === "loading"}>
        {status === "loading" ? "Processing..." : "Confirm: Pay with M-Pesa"}
      </Button>
      {status === "success" && <div className="text-green-400">Payment initiated. You will be redirected shortly.</div>}
      {status === "error" && <div className="text-red-400">There was an error initiating payment. Try again.</div>}
    </div>
  );
}
