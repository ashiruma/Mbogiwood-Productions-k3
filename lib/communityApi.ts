// lib/communityApi.ts
import apiClient from './api';

// ----------------- POSTS -----------------
export const fetchPosts = async () => {
  const res = await apiClient.get('/api/community/posts/');
  return res.data;
};

export const fetchPost = async (id: number) => {
  const res = await apiClient.get(`/api/community/posts/${id}/`);
  return res.data;
};

export const createPost = async (postData: { title: string; content: string }) => {
  const res = await apiClient.post('/api/community/posts/', postData);
  return res.data;
};

// ----------------- COMMENTS -----------------
export const fetchComments = async (postId: number) => {
  const res = await apiClient.get(`/api/community/posts/${postId}/comments/`);
  return res.data;
};

export const createComment = async (postId: number, content: string) => {
  const res = await apiClient.post(`/api/community/posts/${postId}/comments/`, {
    content,
  });
  return res.data;
};

// ----------------- RATINGS -----------------
export const fetchRatings = async (postId: number) => {
  const res = await apiClient.get(`/api/community/posts/${postId}/ratings/`);
  return res.data;
};

export const createRating = async (postId: number, rating: number) => {
  const res = await apiClient.post(`/api/community/posts/${postId}/ratings/`, {
    rating,
  });
  return res.data;
};
