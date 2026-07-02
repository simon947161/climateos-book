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
          <Link className="secondary-link" href="/books/torch-and-horizon/en">
            English edition
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
          <p className="eyebrow">Living Book v0.3</p>
          <h3>Torch and Horizon / 远方与火炬</h3>
          <p>
            The Chinese original remains online, and the English Publication Edition v1.0 is now
            available as a parallel reading path. Spanish, French, German and Arabic remain pending
            translation pathways.
          </p>
          <Link href="/books/torch-and-horizon">Open book page</Link>
        </article>
      </section>
    </div>
  );
}
