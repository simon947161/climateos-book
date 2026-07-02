export default function AboutClimateOSPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">About</p>
        <h1>About ClimateOS</h1>
        <p>
          ClimateOS is a knowledge and governance framework for connecting environmental evidence, AI agents and earth system decision-making.
        </p>
        <div className="nav">
          <a className="button" href="/">Home</a>
          <a className="button" href="/books/torch-and-horizon">Current book</a>
        </div>
      </section>
      <section className="card">
        <h2>Site direction</h2>
        <p className="muted">
          The first website version keeps the structure simple. Later versions can add multilingual publication, search, PDF reading and AI-assisted navigation.
        </p>
      </section>
    </main>
  );
}
