// app/api/news/route.ts
import { NextResponse } from "next/server";

// For now, mock some static data. Later, you can hook this up to a database.
const articles = [
  { id: 1, slug: "mbogiwood-update", title: "Mbogiwood Productions Releases New Short Film" },
  { id: 2, slug: "kenyan-film-awards", title: "Kenyan Film Awards 2025 Nominees Announced" },
  { id: 3, slug: "streaming-growth", title: "African Film Streaming Sees Record Growth" },
];

export async function GET() {
  return NextResponse.json(articles);
}
