// app/(pages)/services/film-production/page.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function FilmProductionPage() {
  const services = [
    "Scriptwriting & Development",
    "Casting & Location Scouting",
    "Principal Photography (4K/6K/8K)",
    "Post-Production & VFX",
    "Sound Design & Mixing",
    "Color Grading & Finishing",
  ];

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">Film & TV Production</h1>
          <p className="text-lg text-muted-foreground mb-6">
            We handle every aspect of the production pipeline to bring compelling narratives to the screen. From the initial spark of an idea to the final cut, our team is dedicated to creating high-quality cinematic experiences that resonate with audiences.
          </p>
          <ul className="space-y-3 mb-8">
            {services.map((service) => (
              <li key={service} className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-500" />
                <span className="text-foreground">{service}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image 
            src="/gallery/director-and-actors.jpeg" // Example image from your gallery
            alt="Film production team on set"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}