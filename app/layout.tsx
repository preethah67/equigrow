import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScanSearch, BrainCircuit, Users, Zap, Palette, Feather, Award } from "lucide-react"; // Import new icons

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquiGrow | Empowering Talent",
  description: "Language, Confidence, Opportunity for Gender Equality",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}> {/* Set a light base background */}
        {/* ATTRACTIVE TITLE BAR */}
        <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* LOGO SECTION */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="bg-gradient-to-br from-pink-500 to-violet-600 p-2 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.4)] group-hover:rotate-12 transition-transform">
                  <Award className="text-white w-6 h-6 fill-current" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-gray-900">
                  EQUI<span className="text-pink-500">GROW</span>
                </span>
              </div>

              {/* NAVIGATION LINKS */}
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 font-bold transition-colors group">
                  <ScanSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Scanner</span>
                </a>
                <a href="/test" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-colors group">
                  <BrainCircuit className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Equity Test</span>
                </a>
                <a href="/match" className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-bold transition-colors group">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Mentor Match</span>
                </a>
              </div>

              {/* CTA BUTTON */}
              <div className="flex items-center">
                <button className="bg-violet-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-400/50">
                  Join Community
                </button>
              </div>

            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}