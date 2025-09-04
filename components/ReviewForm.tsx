// components/ReviewForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

type ReviewFormProps = {
  onSubmit: (rating: number, comment: string) => Promise<void>;
};

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(rating, comment);
    setIsLoading(false);
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <h3 className="font-semibold">Leave a Review</h3>
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={ratingValue}>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} className="hidden" />
                        <Star
                            className="cursor-pointer"
                            color={(ratingValue <= (hoverRating || rating)) ? '#F5A623' : '#a1a1aa'}
                            onMouseEnter={() => setHoverRating(ratingValue)}
                            onMouseLeave={() => setHoverRating(0)}
                        />
                    </label>
                );
            })}
        </div>
        <Textarea
            placeholder="Share your thoughts on the film..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
        />
        <Button type="submit" disabled={isLoading || rating === 0}>
            {isLoading ? "Submitting..." : "Submit Review"}
        </Button>
    </form>
  );
}