// FILE: components/layout/Footer.tsx

import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div><div className="mb-4"><Logo /></div><p className="text-muted-foreground">Celebrating African cinema and connecting talent.</p></div>
                    <div>
                        <h5 className="font-heading font-semibold mb-4">Quick Links</h5>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/films" className="hover:text-primary">Films</Link></li>
                            <li><Link href="/jobs" className="hover:text-primary">Jobs</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-heading font-semibold mb-4">Support</h5>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-heading font-semibold mb-4">Connect</h5>
                        <p className="text-muted-foreground mb-4">Stay updated with the latest from Mbogiwood</p>
                        <Button><Mail className="w-4 h-4 mr-2" />Subscribe</Button>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground"><p>&copy; 2025 Mbogiwood Productions. All rights reserved.</p></div>
            </div>
        </footer>
    );
}