export default function ChineseChaptersPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">Chinese Edition</p>
        <h1>Chinese chapters</h1>
        <p>The book folder is ready. Add chapter files under books/torch-and-horizon/zh/.</p>
        <div className="nav">
          <a className="button" href="/books/torch-and-horizon">Back to book</a>
          <a className="button" href="/">Home</a>
        </div>
      </section>
      <section className="card">
        <h2>Content status</h2>
        <p className="muted">When Markdown chapters are added, this page can become the table of contents.</p>
      </section>
    </main>
  );
}
