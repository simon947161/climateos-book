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
        {/* Draft Warning Notice */}
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
              <strong>English:</strong> This page is a private draft shell for author review.
              The manuscript has not been approved for public release.
              No chapter body text is published here yet.
              The project contains strategic, governance, financial-system, and personal-data-related concepts that require author review before publication.
              <strong style={{ display: "block", marginTop: "8px" }}>
                Nothing on this page constitutes financial, legal, investment, policy, or public-offering advice.
              </strong>
            </p>
            <p style={{ margin: 0 }}>
              <strong>中文：</strong> 本页面仅为作者审校用私有草稿书壳。
              书稿尚未批准公开发布。
              当前页面未发布章节正文。
              本书涉及战略治理、绿色金融系统、RWA、稳定币、个人数据与国际合作等概念，正式发布前必须经过作者审校。
              <strong style={{ display: "block", marginTop: "8px" }}>
                本页面内容不构成金融、法律、投资、政策或公开募资建议。
              </strong>
            </p>
          </div>
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
          <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "16px" }}>
            <em>Chapter titles only. Body text not published.</em>
            <br />
            <em>仅章节标题。未发布正文内容。</em>
          </p>
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
            <li><strong>Content:</strong> No chapter body text committed</li>
          </ul>
        </div>

        {/* Content Risk Disclosure */}
        <div style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#fef2f2",
          borderRadius: "8px",
          border: "1px solid #ef4444"
        }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#991b1b", fontSize: "0.95rem" }}>
            Content Risk Disclosure / 内容风险披露
          </h3>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#7f1d1d", lineHeight: "1.6" }}>
            This manuscript includes discussions of financial systems (RWA, stablecoin, carbon credits),
            governance frameworks, energy sovereignty, and international cooperation.
            All such content requires author and expert review before any publication decision.
            <br /><br />
            本书稿包含对金融系统（RWA、稳定币、碳信用）、治理框架、能源主权和国际合作的讨论。
            所有此类内容在做出任何发布决定之前都需要作者和专家审校。
          </p>
        </div>
      </section>
    </div>
  );
}
