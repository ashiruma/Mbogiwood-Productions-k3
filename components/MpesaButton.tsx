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
      className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white"
      onClick={goToCheckout}
    >
      Buy / Pay KES {amount}
    </Button>
  );
}
