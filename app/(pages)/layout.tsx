// app/(pages)/layout.tsx
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-background/80 backdrop-blur-sm text-foreground px-6 py-4 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Logo />
              <nav className="hidden md:flex items-center space-x-8 font-medium">
                  {/* ... Your Nav Links ... */}
              </nav>
              <div className="flex items-center space-x-4">
                  <Button asChild size="sm" variant="outline"><Link href="/login">Sign In</Link></Button>
                  <Button asChild size="sm"><Link href="/register">Sign Up</Link></Button>
              </div>
          </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-background text-foreground py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
              {/* ... Your Footer JSX ... */}
          </div>
      </footer>
    </div>
  );
}