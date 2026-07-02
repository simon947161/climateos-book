import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getChaptersForLocale, getChineseChapters, hasTorchAndHorizonPdf } from "@/lib/books";

export default function TorchAndHorizonPage() {
  const chineseChapters = getChineseChapters();
  const englishChapters = getChaptersForLocale("en");
  const hasPdf = hasTorchAndHorizonPdf();

  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">ClimateOS Living Book</p>
        <h1>Torch and Horizon / 远方与火炬</h1>
        <p className="lead">
          A public thought book for ClimateOS readers, preserving the original Chinese source text
          while opening a parallel English publication edition.
        </p>

        <div className="action-list">
          <Link className="primary-link" href="/books/torch-and-horizon/zh">
            中文原文目录
          </Link>
          <Link className="secondary-link" href="/books/torch-and-horizon/en">
            English publication edition
          </Link>
          {hasPdf ? (
            <Link className="secondary-link" href="/books/torch-and-horizon/pdf">
              Download PDF
            </Link>
          ) : null}
          <Link className="secondary-link" href="/contribute">
            Contribute
          </Link>
        </div>
        <LanguageSwitcher currentLocale="zh" />
      </section>

      <section className="content-section two-column">
        <div>
          <h2>Chinese original</h2>
          <p>
            {chineseChapters.length > 0
              ? `${chineseChapters.length} Markdown chapters are available as the original edition.`
              : "章节内容待添加。"}
          </p>
        </div>
        <div>
          <h2>English publication edition</h2>
          <p>
            {englishChapters.length > 0
              ? `${englishChapters.length} English reading sections are available from the canonical publication manuscript.`
              : "English publication content is not available yet."}
          </p>
        </div>
      </section>
    </div>
  );
}
