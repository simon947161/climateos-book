import { Metadata } from "next";

export const metadata: Metadata = {
  title: "智元纪战略总纲 | Private Draft",
  description: "Private draft - Author review needed - Not public release",
  robots: "noindex, nofollow",
};

const CHAPTER_TITLES = [
  "全球生态背景与人类危机的叙述",
  "AI 系统构建与智能感知治理",
  "智能体育与绿色社会政治的未来治理模式",
  "绿色价值与 RWA 数字体系",
  "绿色能源与生态权力重构",
  "研发体系、试验场与知识产出系统",
  "战略使命、政治经济判断与行动计划",
  "总结章：系统觉醒与人类生态文明的再启动",
];

export default function ZhiyuanjiPage() {
  return (
    <div className="page-shell">
      <section className="content-section">
        <div className="draft-notice" style={{
          backgroundColor: "#fef3c7",
          border: "2px solid #f59e0b",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px"
        }}>
          <p style={{ margin: 0, fontWeight: "bold", color: "#92400e" }}>
            ⚠️ Private Draft
          </p>
          <p style={{ margin: "8px 0 0 0", color: "#92400e" }}>
            Author Review Needed — Not Public Release
          </p>
        </div>

        <p className="eyebrow">ClimateOS Living Book (Draft)</p>
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
          <h2>Chapter Structure (Placeholder)</h2>
          <ol style={{ lineHeight: "2" }}>
            {CHAPTER_TITLES.map((title, index) => (
              <li key={index}>{title}</li>
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
            <li><strong>Status:</strong> Private Draft</li>
            <li><strong>Review:</strong> Author Review Needed</li>
            <li><strong>Public Access:</strong> Not Available</li>
            <li><strong>Manuscript:</strong> Staged locally, not published</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
