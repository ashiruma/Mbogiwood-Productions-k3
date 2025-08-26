import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mbogiwood",
  description: "Discover & Support African Cinema",
};

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#3B2F2F]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}