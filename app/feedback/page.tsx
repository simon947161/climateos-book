import Link from "next/link";

export default function FeedbackPage() {
  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Feedback</p>
        <h1>Feedback</h1>
        <p className="lead">
          Feedback for ClimateOS Living Books is tracked through GitHub Issues so suggestions,
          corrections, and publication notes remain reviewable.
        </p>
        <Link
          className="primary-link"
          href="https://github.com/simon947161/climateos-book/issues"
        >
          Open GitHub Issues
        </Link>
      </section>
    </div>
  );
}
