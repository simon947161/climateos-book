export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">ClimateOS Living Books</p>
        <h1>Torch and Horizon / 远方与火炬</h1>
        <p>
          An open Living Book site for environmental cognition, validation science, AI agents and earth system governance.
        </p>
        <div className="nav">
          <a className="button" href="/books/torch-and-horizon">Enter the book</a>
          <a className="button" href="/about-climateos">About ClimateOS</a>
          <a className="button" href="/feedback">Feedback</a>
        </div>
      </section>
      <section className="card-grid">
        <article className="card">
          <h2>Living Book</h2>
          <p className="muted">A knowledge container that can keep evolving.</p>
        </article>
        <article className="card">
          <h2>Readable First</h2>
          <p className="muted">The first version focuses on readable pages, simple navigation and deployment.</p>
        </article>
        <article className="card">
          <h2>ClimateOS Foundation</h2>
          <p className="muted">A base for documentation, translation and future AI reading tools.</p>
        </article>
      </section>
    </main>
  );
}
