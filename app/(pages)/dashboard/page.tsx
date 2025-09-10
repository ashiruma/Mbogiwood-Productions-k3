// app/(pages)/dashboard/page.tsx (Updated)
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'; // 1. Import useSession
import useAxiosAuth from '@/hooks/useAxiosAuth'; // 2. Import our auth hook
import { Film } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type User = {
  email: string;
  full_name: string;
  role: string;
}

export default function DashboardPage() {
  // 3. Use NextAuth to protect the page and get the session
  const { data: session, status } = useSession({
    required: true, // This automatically redirects to /login if not authenticated
  });
  const axiosAuth = useAxiosAuth(); // Get the authenticated API client

  // Your state management remains the same
  const [films, setFilms] = useState<Film[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs once the session is loaded
    if (session) {
      const fetchDashboardData = async () => {
        try {
          // 4. All API calls now use 'axiosAuth' and are automatically secure
          const userResponse = await axiosAuth.get('/api/auth/users/me/');
          setUser(userResponse.data);

          if (userResponse.data.role === 'filmmaker') {
            const filmsResponse = await axiosAuth.get('/api/films/dashboard/my-films/');
            setFilms(filmsResponse.data);
          }
        } catch (err) {
          setError("Could not load your dashboard data.");
          console.error(err);
        }
      };

      fetchDashboardData();
    }
  }, [session, axiosAuth]); // Depend on the session

  // 5. Use NextAuth's status for a clean loading state
  if (status === 'loading' || !user) {
    return <main className="container mx-auto py-12 px-6 text-center"><p>Loading Dashboard...</p></main>;
  }

  // Your entire JSX return statement is perfect and does not need to change
  return (
    <main className="container mx-auto py-8 sm:py-12 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
            {user && <p className="text-muted-foreground">Welcome, {user.full_name || user.email}</p>}
        </div>
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