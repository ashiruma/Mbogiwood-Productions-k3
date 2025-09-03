// app/(pages)/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api';
import { Film } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define a type for the user to get their role
type User = {
  email: string;
  full_name: string;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [films, setFilms] = useState<Film[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchDashboardData = async () => {
      try {
        // First, get the user's details to check their role
        const userResponse = await apiClient.get('/users/me/');
        setUser(userResponse.data);

        // If they are a filmmaker, fetch their films
        if (userResponse.data.role === 'filmmaker') {
          const filmsResponse = await apiClient.get('/films/dashboard/my-films/');
          setFilms(filmsResponse.data);
        }
      } catch (err) {
        setError("Could not load your dashboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  if (isLoading) {
    return <main className="container mx-auto py-12 px-6 text-center"><p>Loading Dashboard...</p></main>;
  }

  return (
    <main className="container mx-auto py-8 sm:py-12 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
            {user && <p className="text-muted-foreground">Welcome, {user.full_name || user.email}</p>}
        </div>
        {/* Only show the Upload button if the user is a filmmaker */}
        {user?.role === 'filmmaker' && (
             <Button asChild>
                <Link href="/dashboard/upload">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Upload New Film
                </Link>
            </Button>
        )}
      </div>

      {error && <div className="text-center py-16 bg-secondary rounded-lg"><p className="text-accent">{error}</p></div>}

      {/* If user is a viewer, show the application prompt */}
      {user?.role === 'viewer' && (
          <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>You are currently a Viewer</AlertTitle>
              <AlertDescription className="mt-2 flex items-center justify-between">
                  <p>Apply to become a filmmaker to upload content and track earnings.</p>
                  <Button asChild><Link href="/dashboard/apply">Apply Now</Link></Button>
              </AlertDescription>
          </Alert>
      )}

      {/* If user is a filmmaker, show their film list */}
      {user?.role === 'filmmaker' && (
        <div className="bg-secondary rounded-lg border border-border">
          <h2 className="font-heading text-xl font-bold p-6">My Films</h2>
          <Table>
            <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Price (KES)</TableHead><TableHead>Status</TableHead><TableHead>Date Uploaded</TableHead></TableRow></TableHeader>
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
  );
}