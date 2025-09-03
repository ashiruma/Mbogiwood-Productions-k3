// app/(pages)/dashboard/apply/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import apiClient from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ApplyPage() {
  const [portfolioLink, setPortfolioLink] = useState('');
  const [bio, setBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Protect the route client-side
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This now connects to your backend API
      await apiClient.post('/filmmakers/apply/', {
        portfolio_link: portfolioLink,
        bio: bio,
      });

      toast.success('Application submitted! We will review it shortly.');
      router.push('/dashboard');

    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || "Submission failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <main className="container mx-auto py-12 px-6 flex justify-center">
        <Card className="w-full max-w-2xl bg-secondary">
          <CardHeader>
            <CardTitle className="font-heading text-3xl">Become a Filmmaker</CardTitle>
            <CardDescription>Submit your application to start uploading your films and earning revenue.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="portfolioLink" className="block text-sm font-medium text-muted-foreground mb-2">Portfolio Link (Optional)</label>
                <Input id="portfolioLink" type="url" placeholder="https://vimeo.com/your-profile" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-muted-foreground mb-2">Brief Bio</label>
                <Textarea id="bio" required value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us about yourself and your work..." />
              </div>
              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  );
}