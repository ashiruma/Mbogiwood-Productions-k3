"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import apiClient from "@/lib/api";

interface RatingData {
  average_rating: number | null;
  rating_count: number;
}

export default function FilmRating() {
  const { slug } = useParams<{ slug: string }>();
  const [rating, setRating] = useState<RatingData>({
    average_rating: null,
    rating_count: 0,
  });
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await apiClient.get(`/community/films/${slug}/ratings/`);
        setRating(res.data);
      } catch (err) {
        console.error("Failed to fetch rating:", err);
      }
    }
    fetchRating();
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS_URL}/ws/ratings/${slug}/`
    );
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRating(data);
    };
    setWs(socket);
    return () => {
      socket.close();
    };
  }, [slug]);

  function sendRating(value: number) {
    ws?.send(JSON.stringify({ rating: value }));
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Rate this film</h2>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            key={val}
            onClick={() => sendRating(val)}
            className="px-3 py-1 border rounded hover:bg-primary/20"
          >
            {val} 
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Average Rating: {rating.average_rating ?? "No ratings yet"} (
        {rating.rating_count} votes)
      </p>
    </div>
  );
}
