export default function TorchAndHorizonPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">Current Publication</p>
        <h1>Torch and Horizon / 远方与火炬</h1>
        <p>
          A ClimateOS reflection series on environmental cognition, validation science, possibility computing and the future of civilization.
        </p>
        <div className="nav">
          <a className="button" href="/books/torch-and-horizon/zh">Chinese chapters</a>
          <a className="button" href="/">Home</a>
        </div>
      </section>
      <section className="card">
        <h2>Publication status</h2>
        <p className="muted">
          This v0.1 site shell is now ready for deployment. Book chapters can be added under books/torch-and-horizon/zh/ and linked from this page.
        </p>
      </section>
    </main>
  );
}
