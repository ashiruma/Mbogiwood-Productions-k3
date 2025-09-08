import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function getArticles() {
  return prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function NewsListPage() {
  const articles = await getArticles();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Film News</h1>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link href={`/news/${article.slug}`} key={article.id}>
            <Card className="hover:border-primary">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{article.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
