// app/(pages)/dashboard/layout.tsx
import Logo from "@/components/Logo";
import Link from "next/link";
import { LayoutDashboard, DollarSign, PlusCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* --- SIDEBAR --- */}
      <aside className="hidden md:flex flex-col bg-secondary border-r border-border">
        <div className="p-6 border-b border-border">
          <Logo />
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            <li><Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><LayoutDashboard className="h-4 w-4" />My Films</Link></li>
            <li><Link href="/dashboard/earnings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><DollarSign className="h-4 w-4" />Earnings</Link></li>
            <li><Link href="/dashboard/upload" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><PlusCircle className="h-4 w-4" />Upload Film</Link></li>
          </ul>
        </nav>
        <div className="mt-auto p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start">
                <LogOut className="h-4 w-4 mr-2"/>
                Logout
            </Button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}