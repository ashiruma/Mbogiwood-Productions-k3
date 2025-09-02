// app/(pages)/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api';
import { Film } from '@/types';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }
    const fetchFilmmakerFilms = async () => {
      try {
        const response = await apiClient.get('/films/dashboard/my-films/');
        setFilms(response.data);
      } catch (err) {
        setError("Could not load your films. You may not have filmmaker permissions.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmmakerFilms();
  }, [router]);

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><p>Loading Dashboard...</p></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
        </div>
      </header>
      
      <main className="container mx-auto py-8 sm:py-12 px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading text-3xl font-bold">Filmmaker Dashboard</h1>
          <Button asChild>
            <Link href="/dashboard/upload">
              <PlusCircle className="w-4 h-4 mr-2" />
              Upload New Film
            </Link>
          </Button>
        </div>

        {error ? (
          <div className="text-center py-16 bg-secondary rounded-lg"><p className="text-accent">{error}</p></div>
        ) : (
          <div className="bg-secondary rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead><TableHead>Price (KES)</TableHead>
                  <TableHead>Status</TableHead><TableHead>Date Uploaded</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {films.length > 0 ? (
                  films.map((film) => (
                    <TableRow key={film.id}>
                      <TableCell className="font-medium">{film.title}</TableCell>
                      <TableCell>{film.price}</TableCell>
                      <TableCell>Published</TableCell>
                      <TableCell>{new Date(film.release_date || Date.now()).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow><TableCell colSpan={4} className="text-center h-24">You have not uploaded any films yet.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}