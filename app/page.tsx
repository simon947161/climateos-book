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
        <h2>Current publications</h2>

        <article className="book-card" style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">Living Book v0.3</p>
          <h3>Torch and Horizon / 远方与火炬</h3>
          <p>
            The Chinese original remains online, and the English Publication Edition v1.0 is now
            available as a parallel reading path. Spanish, French, German and Arabic remain pending
            translation pathways.
          </p>
          <Link href="/books/torch-and-horizon">Open book page</Link>
        </article>

        <article className="book-card">
          <p className="eyebrow">Chinese Author-Review Draft</p>
          <h3>《智元纪战略总纲》/ Epoch of Intelligence</h3>
          <p>
            A civilizational strategy text on ecological intelligence, green governance, RWA-based
            value systems, energy sovereignty, and planetary coordination. Chinese author-review
            draft publicly released. English and other translations pending.
          </p>
          <Link href="/books/zhiyuanji/zh">Read Chinese draft</Link>
        </article>
      </section>
    </div>
  );
}
