// FILE: app/(pages)/coproduction/create/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateProjectPage() {
    const [formData, setFormData] = useState({ title: "", logline: "", description: "", roles_needed: "" });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post("/api/coproduction/projects/", formData);
            router.push("/coproduction");
        } catch (error) {
            console.error("Failed to create project:", error);
        }
    };

    // ... JSX for the form with Input and Textarea fields
    return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}