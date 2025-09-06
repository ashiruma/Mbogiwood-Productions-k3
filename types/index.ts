// types/index.ts

// Define allowed statuses
export type FilmStatus = "new" | "coming" | "exclusive";

export type Film = {
  id: number;
  title: string;
  slug: string;
  description: string;
  release_date: string | null;
  poster_image: string | null;
  trailer_link: string | null;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  price: string;
  status: FilmStatus; // ✅ now required, since backend will provide it
};
export type RevenueData = {
    total_revenue_cents: number;
    total_paid_out_cents: number;
    current_balance_cents: number;
};