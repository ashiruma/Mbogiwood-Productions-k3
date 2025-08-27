"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface MpesaButtonProps {
  movieId: string;
  amount: number;
  title?: string;
}

export default function MpesaButton({ movieId, amount, title }: MpesaButtonProps) {
  const router = useRouter();

  const goToCheckout = () => {
    const qs = new URLSearchParams({
      amount: String(amount),
      title: title || "",
    }).toString();

    router.push(`/purchase/${movieId}?${qs}`);
  };

  return (
    <Button
      className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
      onClick={goToCheckout}
    >
      Buy / Pay KES {amount}
    </Button>
  );
}
