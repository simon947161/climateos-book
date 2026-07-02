import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
        <p>
          ClimateOS Living Books is opening multilingual pathways for readers, translators,
          researchers and collaborators.
        </p>
        <div className="button-row">
          <Link className="primary-link" href="/books/torch-and-horizon">
            Read Torch and Horizon
          </Link>
          <Link className="secondary-link" href="/contribute">
            Contribute
          </Link>
        </div>
        <LanguageSwitcher />
      </section>

      <section className="content-section">
        <h2>Current publication</h2>
        <article className="book-card">
          <p className="eyebrow">Living Book v0.2</p>
          <h3>Torch and Horizon / 远方与火炬</h3>
          <p>
            The Chinese original is online. English, Spanish, French, German and Arabic are open as
            pending translation pathways, not completed translations.
          </p>
          <Link href="/books/torch-and-horizon">Open book page</Link>
        </article>
      </section>
    </div>
  );
}
