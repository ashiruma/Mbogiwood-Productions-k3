// FILE: app/(pages)/coproduction/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import apiClient from "@/lib/api";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectDetailPage() {
    const [project, setProject] = useState<Project | null>(null);
    const [message, setMessage] = useState("");
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (id) {
            // ... fetch project details logic
        }
    }, [id]);

    const handleProposalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to submit the proposal to `/api/coproduction/proposals/`
    };
    
    if (!project) return <div>Loading project...</div>;

    return (
        <main className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.logline}</p>
            <div className="prose dark:prose-invert max-w-none mb-8">
                <p>{project.description}</p>
            </div>

            <form onSubmit={handleProposalSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold">Submit a Collaboration Proposal</h2>
                <Textarea
                    placeholder="Write your message to the project owner..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <Button type="submit">Send Proposal</Button>
            </form>
        </main>
    );
}