import Link from "next/link";

const contributionLinks = [
  {
    label: "Translation suggestion",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=translation-suggestion.yml",
  },
  {
    label: "Chapter feedback",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=chapter-feedback.yml",
  },
  {
    label: "ClimateOS idea",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=climateos-idea.yml",
  },
  {
    label: "Collaboration request",
    href: "https://github.com/simon947161/climateos-book/issues/new?template=collaboration-request.yml",
  },
];

export default function ContributePage() {
  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Reader interaction</p>
        <h1>Contribute</h1>
        <p className="lead">
          ClimateOS Living Books welcomes translation suggestions, chapter feedback, ClimateOS
          ideas, collaboration requests, typo reports and terminology notes.
        </p>
        <p>
          For v0.2, contribution intake uses GitHub Issues. No database, login system or external
          translation API is connected here.
        </p>
      </section>

      <section className="content-section contribution-grid">
        {contributionLinks.map((link) => (
          <Link className="contribution-card" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </section>
    </div>
  );
}
