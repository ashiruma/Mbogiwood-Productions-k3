// app/(pages)/layout.tsx
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* No header/footer here — RootLayout already provides them */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}