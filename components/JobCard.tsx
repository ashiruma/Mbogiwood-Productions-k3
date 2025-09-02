// components/JobCard.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Building } from "lucide-react";

// We'll define a Job type for TypeScript
type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    job_type: string;
    slug: string;
};

export default function JobCard({ job }: { job: Job }) {
    return (
        <Card className="flex flex-col h-full bg-secondary">
            <CardHeader>
                <CardTitle className="font-heading">{job.title}</CardTitle>
                <CardDescription className="flex items-center space-x-4 pt-2">
                    <span className="flex items-center"><Building className="w-4 h-4 mr-2" />{job.company}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-4">{job.description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/jobs/${job.slug}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}