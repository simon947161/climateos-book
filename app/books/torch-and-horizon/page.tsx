import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getChineseChapters, hasTorchAndHorizonPdf } from "@/lib/books";

export default function TorchAndHorizonPage() {
  const chapters = getChineseChapters();
  const hasPdf = hasTorchAndHorizonPdf();

  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">ClimateOS Living Book</p>
        <h1>Torch and Horizon / 远方与火炬</h1>
        <p className="lead">
          A public thought book for ClimateOS readers, preserving the original Chinese source text
          while opening careful multilingual publication pathways.
        </p>

        <div className="action-list">
          <Link className="primary-link" href="/books/torch-and-horizon/zh">
            中文原文目录
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
            {chapters.length > 0
              ? `${chapters.length} Markdown chapters are available as the original edition.`
              : "章节内容待添加。"}
          </p>
        </div>
        <div>
          <h2>Multilingual editions</h2>
          <p>
            English, Spanish, French, German and Arabic editions are pending. Placeholder pages are
            visible for coordination, but they are not completed translations.
          </p>
        </div>
      </section>
    </div>
  );
}
