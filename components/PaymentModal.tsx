// components/PaymentModal.tsx
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (phoneNumber: string) => Promise<void>;
  filmTitle: string;
  price: string;
};

export default function PaymentModal({ isOpen, onClose, onConfirm, filmTitle, price }: PaymentModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConfirm = async () => {
    if (!phoneNumber.match(/^(254)\d{9}$/)) {
      setError('Please enter a valid M-Pesa number in the format 254xxxxxxxxx.');
      return;
    }
    setError('');
    setIsLoading(true);
    await onConfirm(phoneNumber);
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Pay for "{filmTitle}" with M-Pesa.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="font-bold text-2xl text-center">KES {price}</div>
          <Input
            id="phone"
            placeholder="e.g., 254712345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Confirm & Pay'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}