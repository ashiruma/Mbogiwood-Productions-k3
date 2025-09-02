// app/(pages)/about/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/lib/api";

// --- Type Definitions ---
type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
};

type AboutData = {
    mission_statement: string;
    vision_statement: string;
    our_values: string;
    team_members: TeamMember[];
};

// --- Data Fetching ---
async function getAboutData(): Promise<AboutData | null> {
    try {
        const response = await apiClient.get('/about/');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch about data:", error);
        return null;
    }
}

// --- Page Component ---
export default async function AboutPage() {
  const data = await getAboutData();

  if (!data) {
    return (
        <main className="container mx-auto py-12 px-6">
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold text-destructive">Failed to Load Content</h1>
                <p className="text-muted-foreground">Please try again later.</p>
            </div>
        </main>
    );
  }

  return (
    <main>
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">About <span className="text-primary">Mbogiwood</span></h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                    We're passionate about celebrating and promoting African cinema, connecting talented professionals, and building a thriving ecosystem for the continent's film industry.
                </p>
            </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <Card className="text-center bg-card border-border"><CardContent className="p-8">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"><Target className="w-8 h-8 text-primary-foreground" /></div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                        <p className="text-muted-foreground">{data.mission_statement}</p>
                    </CardContent></Card>
                    <Card className="text-center bg-card border-border"><CardContent className="p-8">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"><Eye className="w-8 h-8 text-accent-foreground" /></div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                        <p className="text-muted-foreground">{data.vision_statement}</p>
                    </CardContent></Card>
                    <Card className="text-center bg-card border-border"><CardContent className="p-8">
                        <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6"><Heart className="w-8 h-8 text-destructive-foreground" /></div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Values</h3>
                        <p className="text-muted-foreground">{data.our_values}</p>
                    </CardContent></Card>
                </div>
            </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Since our launch, we've been proud to support the African film industry</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div><div className="text-4xl font-bold text-primary mb-2">500+</div><div className="text-muted-foreground">Films Featured</div></div>
                    <div><div className="text-4xl font-bold text-primary mb-2">10K+</div><div className="text-muted-foreground">Professionals Connected</div></div>
                    <div><div className="text-4xl font-bold text-primary mb-2">50+</div><div className="text-muted-foreground">Countries Reached</div></div>
                    <div><div className="text-4xl font-bold text-primary mb-2">1M+</div><div className="text-muted-foreground">Hours Watched</div></div>
                </div>
            </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Meet the passionate individuals behind Mbogiwood</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {data.team_members.map((member) => (
                        <Card key={member.id} className="text-center bg-card hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
                                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
                <p className="text-xl text-muted-foreground mb-8">Be part of the movement celebrating and advancing African cinema.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg"><Link href="/register">Get Started</Link></Button>
                    <Button asChild size="lg" variant="outline"><Link href="/contact">Contact Us</Link></Button>
                </div>
            </div>
        </section>
    </main>
  );
}