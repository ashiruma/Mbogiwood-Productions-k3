// lib/data.ts
import { Film, Job, ApiResponse } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { API_BASE_URL } from "./constants";

export async function fetchFilms(): Promise<Film[]> {
  noStore();

  if (!API_BASE_URL) {
    console.error("DJANGO_API_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/films-list/`);
    if (!response.ok) {
      console.error(`API Error: Failed to fetch films with status ${response.status}`);
      return [];
    }
    
    const data: ApiResponse = await response.json();
    
    // Combine the promo and paid films into a single array
    const allFilms = [...(data.promo_films || []), ...(data.paid_films || [])];
    
    return allFilms;

  } catch (error) {
    console.error("API Error fetching films:", error);
    return [];
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
      console.error(`API Error: Failed to fetch jobs with status ${response.status}`);
      return [];
    }
    // Assuming the API returns an object like { "jobs": [...] }
    // Or just returns the array directly. This handles both cases.
    const data = await response.json();
    return data.jobs || data || [];
  } catch (error) {
    console.error("API Error fetching jobs:", error);
    return [];
  }
}