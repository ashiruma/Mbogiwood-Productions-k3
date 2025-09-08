// app/(pages)/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma"; // when DB is ready

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // Direct DB query with Prisma
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
    </article>
  );
}
