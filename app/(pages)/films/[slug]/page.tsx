// FILE: app/(pages)/films/[slug]/page.tsx

"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import apiClient from '@/lib/api';
import { Film } from '@/types';
import SecureVideoPlayer from '@/components/SecureVideoPlayer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function FilmDetailPage() {
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const { slug } = params;

    useEffect(() => {
        if (slug) {
            async function fetchFilm() {
                try {
                    const response = await apiClient.get<Film>(`/api/films/${slug}/`);
                    setFilm(response.data);
                } catch (error) {
                    console.error("Failed to fetch film details:", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchFilm();
        }
    }, [slug]);

    if (loading) {
        return <div className="text-center py-10">Loading film...</div>;
    }

    if (!film) {
        return <div className="text-center py-10">Film not found.</div>;
    }

    return (
        <main className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-4">{film.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{film.description}</p>
            
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Watch Now</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>{film.title}</DialogTitle>
                    </DialogHeader>
                    {/* This is where your SecureVideoPlayer component is used */}
                    <SecureVideoPlayer filmId={film.id} />
                </DialogContent>
            </Dialog>
        </main>
    );
}
