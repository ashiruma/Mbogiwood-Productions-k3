// app/api/news/[slug]/route.ts
import { NextResponse } from "next/server";

// Temporary mock data until DB is hooked up
const articles = [
  { id: 1, slug: "mbogiwood-update", title: "Mbogiwood Productions Releases New Short Film", content: "Full story about Mbogiwood..." },
  { id: 2, slug: "kenyan-film-awards", title: "Kenyan Film Awards 2025 Nominees Announced", content: "All nominees for the awards..." },
  { id: 3, slug: "streaming-growth", title: "African Film Streaming Sees Record Growth", content: "Streaming platforms statistics..." },
];

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}
