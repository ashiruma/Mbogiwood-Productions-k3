import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import apiClient from "@/lib/api";

type Article = {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
};

async function getArticles(): Promise<Article[]> {
  try {
    const response = await apiClient.get("/api/news/");
    // If your Django API wraps results in an object, e.g. { results: [...] }
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (Array.isArray(response.data.results)) {
      return response.data.results;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch news articles:", error);
    return [];
  }
}

export default async function NewsListPage() {
  const articles = await getArticles();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Film News</h1>
      {articles.length > 0 ? (
        <div className="space-y-6">
          {articles.map((article) => (
            <Link href={`/news/${article.slug}`} key={article.id}>
              <Card className="hover:border-primary transition">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">
                    {article.content}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No news articles available.</p>
      )}
    </div>
  );
}
