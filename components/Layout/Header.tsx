// FILE: components/layout/Header.tsx

import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="bg-background/80 backdrop-blur-sm text-foreground px-6 py-4 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />
                <nav className="hidden md:flex items-center space-x-8 font-medium">
                    <Link href="/films" className="hover:text-primary transition-colors">Films</Link>
                    <Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link>
                    <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button asChild size="sm" variant="outline"><Link href="/login">Sign In</Link></Button>
                    <Button asChild size="sm"><Link href="/register">Sign Up</Link></Button>
                </div>
            </div>
        </header>
    );
}