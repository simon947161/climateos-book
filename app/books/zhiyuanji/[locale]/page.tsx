import Link from "next/link";
import { Metadata } from "next";
import { getZhiyuanjiChineseChapters } from "@/lib/zhiyuanji";
import { getLocale, locales, type LocaleCode } from "@/lib/locales";

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
      ? "智元纪战略总纲 | Author Review Draft"
      : "Epoch of Intelligence | Author Review Draft",
    description: "Private draft - Author review needed - Not public release",
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

  return (
    <div className="page-shell">
      <section className="content-section">
        {/* Draft Warning Notice */}
        <div className="draft-notice" style={{
          backgroundColor: "#fef3c7",
          border: "2px solid #f59e0b",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px"
        }}>
          <p style={{ margin: 0, fontWeight: "bold", color: "#92400e" }}>
            ⚠️ Author Review Draft
          </p>
          <p style={{ margin: "8px 0 0 0", color: "#92400e" }}>
            Full Draft Imported — Formal Public Release Pending
          </p>
        </div>

        {/* Publication Safety Notice */}
        <div className="safety-notice" style={{
          backgroundColor: "#eff6ff",
          border: "1px solid #3b82f6",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px"
        }}>
          <h3 style={{ margin: "0 0 12px 0", color: "#1e40af", fontSize: "1rem" }}>
            Publication Safety Notice / 出版安全声明
          </h3>
          <div style={{ fontSize: "0.9rem", color: "#1e3a8a", lineHeight: "1.6" }}>
            <p style={{ margin: "0 0 12px 0" }}>
              <strong>English:</strong> This is an author-review draft.
              The manuscript has been imported for review purposes.
              The project contains strategic, governance, financial-system, and personal-data-related concepts.
              <strong style={{ display: "block", marginTop: "8px" }}>
                Nothing in this book constitutes financial, legal, investment, policy, or public-offering advice.
              </strong>
            </p>
            <p style={{ margin: 0 }}>
              <strong>中文：</strong> 本书为作者审校草稿。
              书稿已导入供审校使用。
              本书涉及战略治理、绿色金融系统、RWA、稳定币、个人数据与国际合作等概念。
              <strong style={{ display: "block", marginTop: "8px" }}>
                本书内容不构成金融、法律、投资、政策或公开募资建议。
              </strong>
            </p>
          </div>
        </div>

        <p className="eyebrow">ClimateOS Living Book (Author Review Draft)</p>
        <h1>智元纪战略总纲</h1>
        <p className="lead" style={{ fontSize: "1.25rem", color: "#6b7280" }}>
          Epoch of Intelligence
        </p>
        <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
          全球生态智能体与绿色治理系统构建计划
        </p>
        <p style={{ color: "#6b7280" }}>
          Global Eco-Agent & Green Value Operating System
        </p>

        <div style={{ marginTop: "32px" }}>
          <h2>Series</h2>
          <p>Climatebook / ClimateOS Book Series</p>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>Table of Contents</h2>
          <ol style={{ lineHeight: "2.2" }}>
            {chapters.map((chapter) => (
              <li key={chapter.slug}>
                <Link
                  href={`/books/zhiyuanji/${typedLocale}/${chapter.slug}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div style={{
          marginTop: "32px",
          padding: "16px",
          backgroundColor: "#f3f4f6",
          borderRadius: "8px"
        }}>
          <h3 style={{ margin: "0 0 8px 0" }}>Publication Status</h3>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li><strong>Status:</strong> Author Review Draft</li>
            <li><strong>Chapters:</strong> Full draft imported (0–8)</li>
            <li><strong>Formal Release:</strong> Pending</li>
            <li><strong>Public Navigation:</strong> Not added yet</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
