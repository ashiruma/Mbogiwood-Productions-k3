// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mbogiwood Productions",
  description: "Empowering African Narratives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            {/* ================= HEADER ================= */}
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

            {/* --- Page Content Will Be Inserted Here --- */}
            <main className="flex-grow">
              {children}
            </main>

            {/* ================= FOOTER ================= */}
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}