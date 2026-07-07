import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import {
  getAdjacentZhiyuanjiChaptersForLocale,
  getZhiyuanjiChapterForLocale,
  getZhiyuanjiChineseChapter,
  getZhiyuanjiChineseChapters,
  getZhiyuanjiChaptersForLocale,
} from "@/lib/zhiyuanji";
import { getLocale, locales, type LocaleCode } from "@/lib/locales";

type ChapterPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const chineseSlugs = getZhiyuanjiChineseChapters().map((chapter) => chapter.slug);

  return locales.flatMap((locale) => {
    const localeSlugs = getZhiyuanjiChaptersForLocale(locale.code).map((chapter) => chapter.slug);
    const slugs = localeSlugs.length > 0 ? localeSlugs : chineseSlugs;

    return slugs.map((slug) => ({
      locale: locale.code,
      slug,
    }));
  });
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { locale: localeCode, slug } = await params;
  const locale = getLocale(localeCode);
  const chapter =
    locale && getZhiyuanjiChapterForLocale(locale.code as LocaleCode, slug)
      ? getZhiyuanjiChapterForLocale(locale.code as LocaleCode, slug)
      : getZhiyuanjiChineseChapter(slug);

  return {
    title: chapter ? `${chapter.title} | 智元纪战略总纲` : "Chapter | Epoch of Intelligence",
    description: "Author review draft - Not public release",
    robots: "noindex, nofollow",
  };
}

export default async function ZhiyuanjiChapterPage({ params }: ChapterPageProps) {
  const { locale: localeCode, slug } = await params;
  const locale = getLocale(localeCode);

  if (!locale) {
    notFound();
  }

  const typedLocale = locale.code as LocaleCode;
  const translatedChapter = getZhiyuanjiChapterForLocale(typedLocale, slug);
  const chineseChapter = getZhiyuanjiChineseChapter(slug);
  const visibleChapter = translatedChapter ?? chineseChapter;

  if (!visibleChapter) {
    notFound();
  }

  const { previous, next } = getAdjacentZhiyuanjiChaptersForLocale(
    translatedChapter ? typedLocale : "zh",
    visibleChapter.slug,
  );

  return (
    <div className="reader-shell" dir={locale.dir}>
      {/* Author Review Notice */}
      <div style={{
        backgroundColor: "#fef3c7",
        border: "2px solid #f59e0b",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "24px"
      }}>
        <p style={{ margin: 0, fontWeight: "bold", color: "#92400e", fontSize: "0.95rem" }}>
          ⚠️ 作者审校草稿 / Author Review Draft
        </p>
        <p style={{ margin: "8px 0 0 0", color: "#92400e", fontSize: "0.85rem" }}>
          本章属于《智元纪战略总纲》的作者审校草稿。本文是文明与战略思想文本，不构成金融、法律、投资、政策或公开募资建议。
          <br />
          <em style={{ color: "#78350f" }}>
            This chapter is part of the author-review draft of Epoch of Intelligence.
            It is a civilizational and strategic essay, not financial, legal, investment, policy, or public-offering advice.
          </em>
        </p>
      </div>

      <nav className="reader-nav" aria-label="Chapter navigation">
        <Link href={`/books/zhiyuanji/${typedLocale}`}>返回目录 / Back to table of contents</Link>
        <span>{visibleChapter.fileName}</span>
      </nav>

      <section className={locale.dir === "rtl" ? "rtl-reading" : ""}>
        <MarkdownDocument content={visibleChapter.content} />
      </section>

      <nav className="chapter-nav" aria-label="Previous and next chapter">
        {previous ? (
          <Link href={`/books/zhiyuanji/${typedLocale}/${previous.slug}`}>
            <small>上一章 / Previous</small>
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/books/zhiyuanji/${typedLocale}/${next.slug}`}>
            <small>下一章 / Next</small>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
