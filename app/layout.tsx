import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Speed Demo',
  description: 'Demo kecepatan Next.js - Perbandingan dengan Astro.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <nav className="nav">
          <div className="container">
            <a href="/" className="nav-logo">
              <span>&#9883;</span> <span>Next.js Speed</span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/benchmark">Benchmark</a></li>
              <li><a href="/islands">Islands</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <p>
              Built with <a href="https://nextjs.org" target="_blank" rel="noopener">Next.js</a> &mdash;
              Perbandingan kecepatan dengan Astro.js. Node 20 compatible.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
