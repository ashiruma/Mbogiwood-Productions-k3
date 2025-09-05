// FILE: components/layout/Header.tsx

import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    // Centralized nav links for consistency
    const navLinks = [
        { href: "/films", label: "Films" },
        { href: "/jobs", label: "Jobs" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="bg-background/80 backdrop-blur-sm text-foreground px-6 py-4 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 font-medium">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild size="sm" variant="outline"><Link href="/login">Sign In</Link></Button>
                    <Button asChild size="sm"><Link href="/register">Sign Up</Link></Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="text-lg hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="border-t pt-4 flex flex-col space-y-2">
                                     <Button asChild variant="outline"><Link href="/login">Sign In</Link></Button>
                                     <Button asChild><Link href="/register">Sign Up</Link></Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}