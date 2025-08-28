// lib/data.ts
import { Film, Job } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { API_BASE_URL } from "./constants";

export async function fetchFilms(): Promise<Film[]> {
  noStore(); // Prevents caching on Vercel

  if (!API_BASE_URL) {
    console.error("DJANGO_API_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/films-list/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error fetching films:", error);
    throw new Error("Failed to fetch films data from the backend.");
  }
}

export async function fetchJobs(): Promise<Job[]> {
  noStore();

  if (!API_BASE_URL) {
    console.error("DJANGO_API_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/jobs-list/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error fetching jobs:", error);
    throw new Error("Failed to fetch jobs data from the backend.");
  }
}
