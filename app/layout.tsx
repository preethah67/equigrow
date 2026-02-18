import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navigation Bar with SDG Colors */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-slate-100 flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-[var(--sdg-pink)]">Equi</span>
            <span className="text-[var(--sdg-blue)]">Grow</span>
          </div>
          
          <div className="flex gap-6 font-bold text-xs uppercase tracking-widest">
            <Link href="/" className="px-3 py-2 rounded-xl hover:bg-[var(--sdg-pink)] hover:text-white transition-all">
              Scanner
            </Link>
            <Link href="/quiz" className="px-3 py-2 rounded-xl hover:bg-[var(--sdg-orange)] hover:text-white transition-all">
              Quiz
            </Link>
            <Link href="/match" className="px-3 py-2 rounded-xl hover:bg-[var(--sdg-violet)] hover:text-white transition-all">
              Mentors
            </Link>
          </div>
        </nav>

        {/* This renders your 3 pages */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}