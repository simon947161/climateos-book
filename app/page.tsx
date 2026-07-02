import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <p className="eyebrow">ClimateOS publication layer</p>
        <h1>ClimateOS Living Books</h1>
        <p className="lead">
          A public reading home for ClimateOS knowledge, reflection, evidence systems, and long-term
          environmental governance thinking.
        </p>
        <div className="button-row">
          <Link className="primary-link" href="/books/torch-and-horizon">
            Read Torch and Horizon
          </Link>
          <Link className="secondary-link" href="/about-climateos">
            About ClimateOS
          </Link>
        </div>
      </section>

      <section className="content-section">
        <h2>Current publication</h2>
        <article className="book-card">
          <p className="eyebrow">Living Book v0.1</p>
          <h3>Torch and Horizon / 远方与火炬</h3>
          <p>
            A ClimateOS Reflection Series book on environmental cognition, validation science,
            possibility computing, and the future of civilization.
          </p>
          <Link href="/books/torch-and-horizon">Open book page</Link>
        </article>
      </section>
    </div>
  );
}
