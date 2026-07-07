import { Metadata } from "next";
import Link from "next/link";
import { getZhiyuanjiChineseChapters } from "@/lib/zhiyuanji";
import { getLocale, locales, type LocaleCode } from "@/lib/locales";
import "@/styles/zhiyuanji.css";

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

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: localeCode } = await params;
  const locale = getLocale(localeCode);

  return {
    title: locale?.code === "zh"
      ? "智元纪战略总纲 | 作者审校草稿"
      : "Epoch of Intelligence | Author Review Draft",
    description: "全球生态智能体与绿色治理系统构建计划 | Global Eco-Agent & Green Value Operating System",
    robots: "noindex, nofollow",
  };
}

export default async function ZhiyuanjiLocalePage({ params }: LocalePageProps) {
  const { locale: localeCode } = await params;
  const locale = getLocale(localeCode);
  const chapters = getZhiyuanjiChineseChapters();

  if (!locale) {
    return (
      <div className="page-shell">
        <section className="content-section">
          <h1>Locale not found</h1>
        </section>
      </div>
    );
  }

  const typedLocale = locale.code as LocaleCode;
  const isChinese = typedLocale === "zh";

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

  // 英文副标题映射
  const chapterSubtitles: { [key: string]: string } = {
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
    <div className="zyj-book-home">
      {/* Hero 区域 */}
      <header className="zyj-hero">
        <div className="zyj-hero-content">
          <h1 className="zyj-book-title">智元纪战略总纲</h1>
          <p className="zyj-book-title-en">Epoch of Intelligence</p>

          <p className="zyj-book-subtitle">
            全球生态智能体与绿色治理系统构建计划
          </p>
          <p className="zyj-book-subtitle-en">
            Global Eco-Agent & Green Value Operating System
          </p>

          <span className="zyj-status-badge">
            作者审校草稿 · Author Review Draft
          </span>
        </div>
      </header>

      {/* 出版状态 */}
      <section className="zyj-publication-status">
        <div className="zyj-status-grid">
          <div className="zyj-status-item">
            <div className="zyj-status-label">状态 / Status</div>
            <div className="zyj-status-value">作者审校草稿</div>
          </div>
          <div className="zyj-status-item">
            <div className="zyj-status-label">章节 / Chapters</div>
            <div className="zyj-status-value">全书导入 (0–8)</div>
          </div>
          <div className="zyj-status-item">
            <div className="zyj-status-label">发布 / Release</div>
            <div className="zyj-status-value">正式发布待定</div>
          </div>
        </div>
      </section>

      {/* 出版安全声明 */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <div className="zyj-safety-notice">
          <h3>出版安全声明 / Publication Safety Notice</h3>
          <p>
            本书为作者审校草稿。书稿涉及战略治理、绿色金融系统、RWA、稳定币、个人数据与国际合作等概念。
            <strong>本书内容不构成金融、法律、投资、政策或公开募资建议。</strong>
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            This is an author-review draft. The book covers strategic governance, green financial systems,
            RWA, stablecoins, personal data, and international cooperation.
            <strong> Nothing in this book constitutes financial, legal, investment, policy, or public-offering advice.</strong>
          </p>
        </div>
      </section>

      {/* 章节星座 */}
      <section className="zyj-chapters">
        <h2 className="zyj-chapters-title">章节目录 / Table of Contents</h2>
        <div className="zyj-chapters-grid">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/books/zhiyuanji/${typedLocale}/${chapter.slug}`}
              className="zyj-chapter-card"
            >
              <div className="zyj-chapter-number">
                {chapterNumbers[chapter.slug] || "章节"}
              </div>
              <h3 className="zyj-chapter-title">{chapter.title}</h3>
              {chapterSubtitles[chapter.slug] && (
                <p className="zyj-chapter-title-en">
                  {chapterSubtitles[chapter.slug]}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* 阅读指引 */}
      <section className="zyj-reading-guide">
        <p>
          当前为作者审校草稿阶段，全书内容已导入供审阅。
          <br />
          正式公开发布待作者确认后启动。
        </p>
      </section>

      {/* 多语言提示 */}
      {!isChinese && (
        <div className="zyj-translation-notice">
          <p>
            <strong>本语言版本尚未完成翻译。</strong>
            <br />
            当前显示中文作者审校草稿供参考。
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>This translation is not yet available.</strong>
            <br />
            The Chinese author-review draft is shown for reference.
          </p>
        </div>
      )}

      {/* 系列归属 */}
      <footer className="zyj-series-note">
        Climatebook / ClimateOS Book Series · 气候书系
      </footer>
    </div>
  );
}
