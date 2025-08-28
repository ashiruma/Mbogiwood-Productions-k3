// lib/definitions.ts
export interface Film {
  id: number;
  title: string;
  description: string;
  release_date: string;
  poster_image: string;
  trailer_link: string;
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

// You can add more types for Gallery, etc.
