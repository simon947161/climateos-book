import Link from "next/link";

const feedbackLinks = [
  {
    label: "General feedback",
    href: "https://github.com/simon947161/climateos-book/issues/new",
  },
  {
    label: "Translation suggestion",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=translation-suggestion.yml",
  },
  {
    label: "Chapter comment",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=chapter-feedback.yml",
  },
  {
    label: "Collaboration request",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=collaboration-request.yml",
  },
  {
    label: "ClimateOS idea",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=climateos-idea.yml",
  },
];

export default function FeedbackPage() {
  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Feedback</p>
        <h1>Feedback</h1>
        <p className="lead">
          Feedback for ClimateOS Living Books is tracked through GitHub Issues so suggestions,
          corrections and publication notes remain reviewable.
        </p>
        <div className="contribution-grid">
          {feedbackLinks.map((link) => (
            <Link className="contribution-card" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
