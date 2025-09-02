// app/(pages)/dashboard/apply/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import apiClient from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function ApplyPage() {
  const [portfolioLink, setPortfolioLink] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
        // We need a new API endpoint for this. For now, we'll assume it exists.
        // Let's add the API endpoint in the next step.
      toast.error("Submit functionality not yet implemented.");
      // This will be something like: await apiClient.post('/filmmakers/apply/', { portfolio_link: portfolioLink, bio });
      // toast.success('Application submitted! We will review it shortly.');
      // router.push('/dashboard');

    } catch (err: any) {
      setError("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-background text-foreground">
         <header className="bg-background/80 backdrop-blur-sm text-foreground px-6 py-4 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />
                <Button asChild variant="secondary"><Link href="/dashboard">Back to Dashboard</Link></Button>
            </div>
        </header>
        <main className="container mx-auto py-12 px-6 flex justify-center">
            <div className="w-full max-w-2xl p-8 space-y-6 bg-secondary rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-center">Become a Filmmaker</h2>
            <p className="text-center text-muted-foreground">Submit your application to start uploading your films and earning revenue.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="portfolioLink" className="block text-sm font-medium text-muted-foreground mb-2">Portfolio Link (Optional)</label>
                <Input id="portfolioLink" type="url" placeholder="https://vimeo.com/your-profile" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} />
                </div>
                <div>
                <label htmlFor="bio" className="block text-sm font-medium text-muted-foreground mb-2">Brief Bio</label>
                <Textarea id="bio" required value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us about yourself and your work..." />
                </div>
                
                {error && <p className="text-sm text-accent text-center">{error}</p>}

                <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                </Button>
                </div>
            </form>
            </div>
        </main>
      </div>
    </>
  );
}