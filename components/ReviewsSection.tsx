// components/ReviewsSection.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import apiClient from '@/lib/api';
import { toast } from 'react-hot-toast';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

type User = { full_name: string; };
type Review = { id: number; user: User; rating: number; comment: string; created_at: string; };

export default function ReviewsSection({ filmSlug }: { filmSlug: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await apiClient.get(`/films/${filmSlug}/reviews/`);
      setReviews(response.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  }, [filmSlug]);

  useEffect(() => {
    fetchReviews();
    // Check if user is logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [fetchReviews]);

  const handleReviewSubmit = async (rating: number, comment: string) => {
    try {
      await apiClient.post(`/films/${filmSlug}/reviews/create/`, {
        rating,
        comment,
      });
      toast.success("Review submitted successfully!");
      fetchReviews(); // Refresh the reviews list
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "You must purchase the film to leave a review.";
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold font-heading mb-6">Reviews & Comments</h2>
      {isAuthenticated && <ReviewForm onSubmit={handleReviewSubmit} />}
      <div className="space-y-6 mt-6">
        {reviews.length > 0 ? (
          reviews.map((review) => <ReviewCard key={review.id} review={review} />)
        ) : (
          <p className="text-muted-foreground">Be the first to leave a review for this film.</p>
        )}
      </div>
    </div>
  );
}