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
import "@/styles/zhiyuanji.css";

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
  const isChinese = locale?.code === "zh";
  const chapter =
    locale && getZhiyuanjiChapterForLocale(locale.code as LocaleCode, slug)
      ? getZhiyuanjiChapterForLocale(locale.code as LocaleCode, slug)
      : getZhiyuanjiChineseChapter(slug);

  return {
    title: chapter
      ? `${chapter.title} | 智元纪战略总纲`
      : "Chapter | Epoch of Intelligence",
    description: isChinese
      ? "中文作者审校草稿 - 不构成金融、法律、投资、政策或公开募资建议"
      : "Chinese author-review draft shown for reference - Not financial/legal/investment advice",
    // NB-06: Chinese draft is public; non-Chinese routes remain noindex
    robots: isChinese ? "index, follow" : "noindex, nofollow",
  };
}

export default async function ZhiyuanjiChapterPage({ params }: ChapterPageProps) {
  const { locale: localeCode, slug } = await params;
  const locale = getLocale(localeCode);

  if (!locale) {
    notFound();
  }

  const typedLocale = locale.code as LocaleCode;
  const isChinese = typedLocale === "zh";
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

  // 章节序号映射
  const chapterNumbers: { [key: string]: string } = {
    "00-outline": "序章",
    "01-global-ecological-crisis": "第一章",
    "02-ai-system-architecture": "第二章",
    "03-intelligent-sports-green-governance": "第三章",
    "04-green-value-rwa-digital-system": "第四章",
    "05-green-energy-ecological-sovereignty": "第五章",
    "06-rd-living-labs-knowledge-system": "第六章",
    "07-strategic-mission-action-pathways": "第七章",
    "08-systemic-awakening-epilogue": "终章",
  };

  // 英文标题映射
  const englishTitles: { [key: string]: string } = {
    "00-outline": "Frontmatter and Outline",
    "01-global-ecological-crisis": "Global Ecological Crisis & Human Turning Point",
    "02-ai-system-architecture": "AI Systems & Environmental Intelligence Design",
    "03-intelligent-sports-green-governance": "Smart Sports and Green Governance",
    "04-green-value-rwa-digital-system": "Green Value and Tokenized Real-World Assets",
    "05-green-energy-ecological-sovereignty": "Green Power & Post-National Ecological Sovereignty",
    "06-rd-living-labs-knowledge-system": "R&D Infrastructure & Knowledge Report",
    "07-strategic-mission-action-pathways": "Strategic Vision & Geopolitical Pathway",
    "08-systemic-awakening-epilogue": "Systemic Awakening & Epilogue",
  };

  return (
    <div className="zyj-chapter-page">
      {/* 章节头部 */}
      <header className="zyj-chapter-header">
        <div className="zyj-chapter-number-watermark">
          {chapterNumbers[visibleChapter.slug]?.replace("第", "").replace("章", "").replace("序", "0").replace("终", "8") || "?"}
        </div>
        <div className="zyj-chapter-header-content">
          <div className="zyj-chapter-label">
            {chapterNumbers[visibleChapter.slug] || "章节"} / Chapter {visibleChapter.slug.split("-")[0]}
          </div>
          <h1 className="zyj-chapter-title-main">{visibleChapter.title}</h1>
          {englishTitles[visibleChapter.slug] && (
            <p className="zyj-chapter-title-en">{englishTitles[visibleChapter.slug]}</p>
          )}
        </div>
      </header>

      {/* 草稿状态横幅 */}
      <div className="zyj-draft-banner">
        <strong>作者审校草稿 · Author Review Draft</strong>
        &nbsp;—&nbsp;
        本章内容不构成金融、法律、投资、政策或公开募资建议
      </div>

      {/* 多语言提示 */}
      {!isChinese && !translatedChapter && (
        <div className="zyj-translation-notice">
          <p>
            <strong>本语言版本尚未完成翻译。</strong>
            当前显示中文作者审校草稿供参考。
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>This translation is not yet available.</strong>
            The Chinese author-review draft is shown for reference.
          </p>
        </div>
      )}

      {/* 正文区域 */}
      <article className="zyj-chapter-body">
        <MarkdownDocument content={visibleChapter.content} />
      </article>

      {/* 章节导航 */}
      <nav className="zyj-chapter-nav">
        {previous ? (
          <Link href={`/books/zhiyuanji/${typedLocale}/${previous.slug}`}>
            <span className="zyj-chapter-nav-label">← 上一章 / Previous</span>
            <span className="zyj-chapter-nav-title">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/books/zhiyuanji/${typedLocale}/${next.slug}`}>
            <span className="zyj-chapter-nav-label">下一章 / Next →</span>
            <span className="zyj-chapter-nav-title">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <Link
        href={`/books/zhiyuanji/${typedLocale}`}
        className="zyj-chapter-nav-back"
      >
        返回目录 / Back to Table of Contents
      </Link>
    </div>
  );
}
