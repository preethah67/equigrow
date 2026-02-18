import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EquiGrow | Bold Equality",
  description: "Modern tools for gender equity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          {/* Top Brand Header */}
          <header className="brand-header">
            <h1 className="brand-logo">EQUIGROW</h1>
          </header>

          {/* Three Large Oval Columns */}
          <nav className="mega-oval-grid">
            <Link href="/" className="oval-col col-pink">
              <span className="col-num">01</span>
              <h2 className="col-title">Bias<br/>Scanner</h2>
              <div className="col-arrow">→</div>
            </Link>

            <Link href="/test" className="oval-col col-yellow">
              <span className="col-num">02</span>
              <h2 className="col-title">Skill<br/>Test</h2>
              <div className="col-arrow">→</div>
            </Link>

            <Link href="/mentor" className="oval-col col-green">
              <span className="col-num">03</span>
              <h2 className="col-title">Mentor<br/>Match</h2>
              <div className="col-arrow">→</div>
            </Link>
          </nav>

          {/* Large Content Area */}
          <main className="content-surface">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


