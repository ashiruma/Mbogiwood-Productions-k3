// components/FilmPurchaseClient.tsx
'use client';

import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Film } from '@/types';
import apiClient from '@/lib/api';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';

type FilmPurchaseClientProps = {
  film: Film;
};

export default function FilmPurchaseClient({ film }: FilmPurchaseClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentConfirm = async (phoneNumber: string) => {
    try {
      await apiClient.post('/payments/mpesa/initiate/', {
        film_id: film.id,
        phone: phoneNumber,
      });
      toast.success('Success! Check your phone to enter your M-Pesa PIN.');
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Payment initiation failed:', error);
      const errorMessage = error.response?.data?.error || "An unknown error occurred.";
      toast.error(`Payment failed: ${errorMessage}`);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handlePaymentConfirm}
        filmTitle={film.title}
        price={film.price}
      />
      <div className="mt-6 p-6 bg-secondary rounded-lg">
        <p className="text-3xl font-bold text-primary mb-4">
          KES {film.price}
        </p>
        <Button
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setIsModalOpen(true)}
        >
          Buy Now to Watch Full Movie
        </Button>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Includes 48-hour rental period.
        </p>
      </div>
    </>
  );
}