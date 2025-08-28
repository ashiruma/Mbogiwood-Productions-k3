// lib/definitions.ts
export interface Film {
  id: number;
  title: string;
  description: string;
  release_date: string;
  poster_image: string;
  trailer_link: string;
}

// Add this new interface to describe the API's object structure
export interface ApiResponse {
  promo_films: Film[];
  paid_films: Film[];
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  posted_date: string;
  application_link: string;
}