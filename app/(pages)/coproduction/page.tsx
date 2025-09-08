// FILE: app/(pages)/coproduction/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import apiClient from "@/lib/api";
import { Project } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CoproductionListPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await apiClient.get("/api/coproduction/projects/");
                setProjects(response.data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    if (loading) return <div>Loading projects...</div>;

    return (
        <main className="container mx-auto py-12 px-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Co-Production Hub</h1>
                <Button asChild>
                    <Link href="/coproduction/create">Post a Project</Link>
                </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Link href={`/coproduction/${project.id}`} key={project.id}>
                        <Card className="h-full hover:border-primary">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.logline}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <p className="text-sm text-muted-foreground">Roles Needed: {project.roles_needed}</p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    );
}