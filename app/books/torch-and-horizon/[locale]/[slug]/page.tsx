import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import {
  getAdjacentChaptersForLocale,
  getChapterForLocale,
  getChineseChapter,
  getChineseChapters,
  getChaptersForLocale,
} from "@/lib/books";
import { getLocale, getLocaleStatusLabel, locales, type LocaleCode } from "@/lib/locales";

type ChapterPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const chineseSlugs = getChineseChapters().map((chapter) => chapter.slug);

  return locales.flatMap((locale) => {
    const localeSlugs = getChaptersForLocale(locale.code).map((chapter) => chapter.slug);
    const slugs = localeSlugs.length > 0 ? localeSlugs : chineseSlugs;

    return slugs.map((slug) => ({
      locale: locale.code,
      slug,
    }));
  });
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { locale: localeCode, slug } = await params;
  const locale = getLocale(localeCode);
  const chapter =
    locale && getChapterForLocale(locale.code as LocaleCode, slug)
      ? getChapterForLocale(locale.code as LocaleCode, slug)
      : getChineseChapter(slug);

  return {
    title: chapter ? `${chapter.title} | Torch and Horizon` : "Chapter | Torch and Horizon",
  };
}

export default async function MultilingualChapterPage({ params }: ChapterPageProps) {
  const { locale: localeCode, slug } = await params;
  const locale = getLocale(localeCode);

  if (!locale) {
    notFound();
  }

  const typedLocale = locale.code as LocaleCode;
  const translatedChapter = getChapterForLocale(typedLocale, slug);
  const chineseChapter = getChineseChapter(slug);
  const visibleChapter = translatedChapter ?? chineseChapter;

  if (!visibleChapter) {
    notFound();
  }

  const { previous, next } = getAdjacentChaptersForLocale(
    translatedChapter ? typedLocale : "zh",
    visibleChapter.slug,
  );
  const isPending = locale.status === "pending" || locale.status === "machine-draft";
  const isShowingFallback = !translatedChapter && typedLocale !== "zh";

  return (
    <div className="reader-shell" dir={locale.dir}>
      <nav className="reader-nav" aria-label="Chapter navigation">
        <Link href={`/books/torch-and-horizon/${typedLocale}`}>Back to table of contents</Link>
        <span>{visibleChapter.fileName}</span>
      </nav>
      <LanguageSwitcher currentLocale={typedLocale} slug={slug} />

      <section className={locale.dir === "rtl" ? "rtl-reading" : ""}>
        <p className="status-pill">Translation status: {getLocaleStatusLabel(locale.status)}</p>
        {isPending || isShowingFallback ? (
          <div className="pending-box">
            <h1>Translation in progress</h1>
            <p>
              This {locale.label} chapter is not yet a completed translation. The original Chinese
              chapter is shown below for reference only.
            </p>
            <p>
              <Link href={`/books/torch-and-horizon/zh/${slug}`}>Read the Chinese original</Link>
            </p>
          </div>
        ) : null}

        <MarkdownDocument content={visibleChapter.content} />
      </section>

      <nav className="chapter-nav" aria-label="Previous and next chapter">
        {previous ? (
          <Link href={`/books/torch-and-horizon/${typedLocale}/${previous.slug}`}>
            <small>Previous</small>
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/books/torch-and-horizon/${typedLocale}/${next.slug}`}>
            <small>Next</small>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
