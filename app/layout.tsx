import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClimateOS Living Books",
  description: "Public Living Books for ClimateOS knowledge, reflection, and evidence systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="mathjax-config" strategy="beforeInteractive">
          {`
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
              },
              svg: { fontCache: 'global' }
            };
          `}
        </Script>
        <Script
          id="mathjax"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
          strategy="afterInteractive"
        />
        <header className="site-header">
          <Link className="brand" href="/">
            ClimateOS Living Books
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/books/torch-and-horizon">Torch and Horizon</Link>
            <Link href="/contribute">Contribute</Link>
            <Link href="/about-climateos">About</Link>
            <Link href="/feedback">Feedback</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>ClimateOS Living Books</span>
          <span>Human-readable and AI-readable public knowledge.</span>
        </footer>
      </body>
    </html>
  );
}
