"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api";
import { useSession } from "next-auth/react";

interface Comment {
  id: number;
  user: string;
  body: string;
  created_at: string;
}

interface Post {
  id: number;
  user: string;
  title: string;
  body: string;
  category: string;
  created_at: string;
  updated_at: string;
  like_count: number;
  comment_count: number;
  comments: Comment[];
}

export default function CommunityPage() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: "", body: "", category: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await apiClient.get("/community/posts/");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await apiClient.post("/community/posts/", newPost);
      setPosts([res.data, ...posts]);
      setNewPost({ title: "", body: "", category: "" });
    } catch (err) {
      console.error("Error creating post:", err);
    }
  }

  async function toggleLike(postId: number) {
    try {
      await apiClient.post(`/community/posts/${postId}/toggle-like/`);
      setPosts(
        posts.map((p) =>
          p.id === postId
            ? { ...p, like_count: p.like_count + (p.like_count ? -1 : 1) }
            : p
        )
      );
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  }

  async function addComment(postId: number, body: string) {
    try {
      const res = await apiClient.post("/community/comments/", {
        post_id: postId,
        body,
      });
      setPosts(
        posts.map((p) =>
          p.id === postId
            ? { ...p, comments: [...p.comments, res.data] }
            : p
        )
      );
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  }

  if (loading) return <p className="text-center">Loading posts...</p>;

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Community</h1>

      {/* Create Post */}
      {session && (
        <form onSubmit={createPost} className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="What's on your mind?"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newPost.category}
            onChange={(e) =>
              setNewPost({ ...newPost, category: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded"
          >
            Post
          </button>
        </form>
      )}

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm bg-card"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground">
              by {post.user} | {new Date(post.created_at).toLocaleString()}
            </p>
            <p className="mt-2">{post.body}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => toggleLike(post.id)}
                className="text-sm text-primary"
              >
                👍 {post.like_count}
              </button>
              <span className="text-sm">
                💬 {post.comment_count}
              </span>
            </div>

            {/* Comments */}
            <div className="mt-4 space-y-2">
              {post.comments.map((c) => (
                <div key={c.id} className="text-sm border-t pt-2">
                  <strong>{c.user}:</strong> {c.body}
                </div>
              ))}
            </div>

            {/* Add comment */}
            {session && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const body = (e.currentTarget.elements.namedItem(
                    "comment"
                  ) as HTMLInputElement).value;
                  if (body) {
                    addComment(post.id, body);
                    (e.currentTarget.elements.namedItem(
                      "comment"
                    ) as HTMLInputElement).value = "";
                  }
                }}
                className="mt-2"
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded"
                />
              </form>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
