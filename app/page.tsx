// app/page.tsx
import apiClient from "@/lib/api";
import { Film } from "@/types";
import FilmList from "@/components/FilmList";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Briefcase, ImageIcon, Video, Clapperboard, Music, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

async function getFilms(): Promise<{ promo_films: Film[], paid_films: Film[] }> {
  try {
    const response = await apiClient.get("/films/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch films:", error);
    return { promo_films: [], paid_films: [] };
  }
}

export default async function Page() {
  const { paid_films } = await getFilms();

  return (
    <main className="flex-grow">
      {/* ================= HERO SECTION ================= */}
      <section className="relative text-white h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Male-photographer.jpg"
          alt="Mbogiwood Film Production"
          layout="fill"
          objectFit="cover"
          className="z-0 object-right" // <-- Class added here to align image to the right
          priority
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 container w-full px-6">
          <div className="max-w-2xl text-left">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="block text-white">EMPOWERING</span>
              <span className="block text-primary">AFRICAN</span>
              <span className="block text-accent">NARRATIVES</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Authentic African storytelling, film culture, and creative collaboration — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground"><Link href="/films"><Play className="w-5 h-5 mr-2" />Watch Films</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 text-white hover:bg-white hover:text-black"><Link href="/gallery">Explore Gallery</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR PRODUCTION SERVICES ================= */}
      <section className="py-16 bg-secondary">
         <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Our Production Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">From concept to final cut, we bring your vision to life with professional production services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={Clapperboard} title="Film & TV Production" description="Full-service production for narrative films, series, and documentaries."/>
            <ServiceCard icon={Music} title="Music Videos" description="Creative and high-quality music video production for artists."/>
            <ServiceCard icon={Building} title="Corporate Commercials" description="Engaging video content to elevate your brand and message."/>
            <ServiceCard icon={Video} title="Event Coverage" description="Professional multi-camera coverage for live events and conferences."/>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">What We Offer</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore African cinema and entertainment industry opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow bg-card text-card-foreground"><CardContent className="p-6"><div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><Play className="w-6 h-6 text-primary-foreground" /></div><h4 className="font-heading text-xl font-semibold text-foreground mb-2">Premium Films</h4><p className="text-muted-foreground">Stream exclusive African films and documentaries</p></CardContent></Card>
            <Card className="text-center hover:shadow-xl transition-shadow bg-card text-card-foreground"><CardContent className="p-6"><div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"><Briefcase className="w-6 h-6 text-accent-foreground" /></div><h4 className="font-heading text-xl font-semibold text-foreground mb-2">Career Hub</h4><p className="text-muted-foreground">Find jobs and opportunities in film & entertainment</p></CardContent></Card>
            <Card className="text-center hover:shadow-xl transition-shadow bg-card text-card-foreground"><CardContent className="p-6"><div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4"><ImageIcon className="w-6 h-6 text-destructive-foreground" /></div><h4 className="font-heading text-xl font-semibold text-foreground mb-2">Gallery</h4><p className="text-muted-foreground">Behind-the-scenes content, stills & moments</p></CardContent></Card>
            <Card className="text-center hover:shadow-xl transition-shadow bg-card text-card-foreground"><CardContent className="p-6"><div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-6 h-6 text-background" /></div><h4 className="font-heading text-xl font-semibold text-foreground mb-2">Community</h4><p className="text-muted-foreground">Connect with filmmakers and enthusiasts</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* ================= WATCH OUR FILMS ================= */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Watch Our Films</h3>
            <p className="text-muted-foreground">Stream exclusive content from our talented filmmakers.</p>
          </div>
          <FilmList films={paid_films} />
        </div>
      </section>
    </main>
  );
}