"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  fetchPost,
  fetchComments,
  createComment,
  fetchRatings,
  createRating,
} from "@/lib/communityApi";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<any | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadPost() {
      try {
        const data = await fetchPost(Number(id));
        setPost(data);
      } catch (err) {
        console.error("Error loading post:", err);
      }
    }

    async function loadComments() {
      try {
        const data = await fetchComments(Number(id));
        setComments(data);
      } catch (err) {
        console.error("Error loading comments:", err);
      }
    }

    async function loadRatings() {
      try {
        const data = await fetchRatings(Number(id));
        if (data.length > 0) {
          setRating(data[0].rating); // assume one rating per user
        }
      } catch (err) {
        console.error("Error loading ratings:", err);
      }
    }

    loadPost();
    loadComments();
    loadRatings();
  }, [id]);

  const handleComment = async () => {
    if (!newComment) return;
    const comment = await createComment(Number(id), newComment);
    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  const handleRate = async (value: number) => {
    const res = await createRating(Number(id), value);
    setRating(res.rating);
  };

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-6">{post.content}</p>

      {/* Rating */}
      <div className="mb-6">
        <p className="mb-2 font-semibold">Your Rating:</p>
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            key={val}
            onClick={() => handleRate(val)}
            className={`px-3 py-1 mr-2 rounded ${
              rating === val ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {val}
          </button>
        ))}
      </div>

      {/* Comments */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Comments</h2>
        <ul className="space-y-3 mb-4">
          {comments.map((c) => (
            <li key={c.id} className="border p-2 rounded">
              <span className="font-semibold">{c.user}</span>: {c.content}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border p-2 flex-grow rounded"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleComment}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
