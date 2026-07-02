import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getChaptersForLocale, getChineseChapters } from "@/lib/books";
import { getLocale, getLocaleStatusLabel, locales, type LocaleCode } from "@/lib/locales";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.code,
  }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale: localeCode } = await params;
  const locale = getLocale(localeCode);

  return {
    title: locale ? `${locale.nativeLabel} | Torch and Horizon` : "Torch and Horizon",
  };
}

export default async function LocaleTableOfContentsPage({ params }: LocalePageProps) {
  const { locale: localeCode } = await params;
  const locale = getLocale(localeCode);

  if (!locale) {
    notFound();
  }

  const typedLocale = locale.code as LocaleCode;
  const chapters = getChaptersForLocale(typedLocale);
  const chineseChapters = getChineseChapters();
  const isOriginal = locale.status === "original";
  const isPending = locale.status === "pending" || locale.status === "machine-draft";

  return (
    <div className="page-shell" dir={locale.dir}>
      <section className="content-section">
        <p className="eyebrow">Torch and Horizon / 远方与火炬</p>
        <h1>{locale.nativeLabel}</h1>
        <p className="status-pill">Translation status: {getLocaleStatusLabel(locale.status)}</p>
        <p className="lead">
          {isOriginal
            ? "This is the original Chinese edition generated from Markdown source files."
            : isPending
              ? "Translation in progress. This language is open for contribution and does not yet contain completed translated chapters."
              : "This publication edition is generated from the canonical English Markdown manuscript."}
        </p>
        {isPending ? (
          <p>
            <Link href="/books/torch-and-horizon/zh">Return to the Chinese original</Link>
          </p>
        ) : null}
        <LanguageSwitcher currentLocale={typedLocale} />
      </section>

      <section className={`content-section ${locale.dir === "rtl" ? "rtl-reading" : ""}`}>
        {chapters.length > 0 ? (
          <ol className="chapter-list">
            {chapters.map((chapter) => (
              <li key={chapter.slug}>
                <Link href={`/books/torch-and-horizon/${typedLocale}/${chapter.slug}`}>
                  <span>{chapter.title}</span>
                  <small>{chapter.fileName}</small>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <div className="pending-box">
            <h2>Translation in progress</h2>
            <p>
              No completed {locale.label} chapter files are available yet. The entries below are
              translation placeholders mapped to the Chinese source chapters.
            </p>
            <ol className="chapter-list">
              {chineseChapters.map((chapter) => (
                <li key={chapter.slug}>
                  <Link href={`/books/torch-and-horizon/${typedLocale}/${chapter.slug}`}>
                    <span>{chapter.title}</span>
                    <small>Pending translation</small>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>
    </div>
  );
}
