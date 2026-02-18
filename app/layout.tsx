import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import your new SupportBot component
import SupportBot from "@/components/SupportBot"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquiGrow | SDG 5 Leadership Platform",
  description: "Empowering gender equality through AI-driven insights and mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The children represents your Scanner, Quiz, and Match pages */}
        <main>
          {children}
        </main>

        {/* 2. Place the SupportBot here so it stays fixed as the user scrolls */}
        <SupportBot />
      </body>
    </html>
  );
}