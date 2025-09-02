// app/(pages)/dashboard/upload/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import apiClient from '@/lib/api';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function UploadPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Protect the route by checking for a login token
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      setError('Please select a video file to upload.');
      return;
    }
    setError(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('video_file', videoFile);

    try {
      await apiClient.post('/films/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Film uploaded successfully! It will be reviewed shortly.');
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.response?.data?.detail || "An error occurred during upload.");
      toast.error('Upload failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-background">
        <header className="bg-secondary text-secondary-foreground px-6 py-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Logo />
            <Button asChild variant="secondary"><Link href="/dashboard">Back to Dashboard</Link></Button>
          </div>
        </header>
        <main className="container mx-auto py-12 px-6">
          <Card className="max-w-3xl mx-auto bg-secondary">
            <CardHeader>
              <CardTitle className="font-heading text-3xl">Upload New Film</CardTitle>
              <CardDescription>Fill in the details below to submit your film for review.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-muted-foreground mb-2">Film Title</label>
                  <Input id="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-2">Synopsis / Description</label>
                  <Textarea id="description" required value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-muted-foreground mb-2">Price (KES)</label>
                  <Input id="price" type="number" step="0.01" required value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="videoFile" className="block text-sm font-medium text-muted-foreground mb-2">Video File</label>
                  <Input id="videoFile" type="file" required onChange={handleFileChange} accept="video/mp4,video/x-m4v,video/*" />
                  <p className="text-xs text-muted-foreground mt-1">Max file size: 2GB. Supported formats: MP4, MOV.</p>
                </div>
                {error && <p className="text-sm text-accent text-center">{error}</p>}
                <div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Submit Film for Review'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}