// app/(pages)/gallery/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import apiClient from '@/lib/api';

type GalleryImage = {
  id: number;
  title: string;
  image_url: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await apiClient.get('/api/gallery/');
        setImages(response.data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };
    getImages();
  }, []);

  const lightboxSlides = images.map(img => ({ src: img.image_url, title: img.title }));

  // The <header> and <footer> have been removed from this file.
  // The content is wrapped in <main> which will be placed inside the main layout.
  return (
    <main className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A look behind the scenes at the magic of filmmaking.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <div 
            key={image.id} 
            className="group cursor-pointer overflow-hidden rounded-lg aspect-square"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={image.image_url}
              alt={image.title}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={lightboxSlides}
      />
    </main>
  );
}