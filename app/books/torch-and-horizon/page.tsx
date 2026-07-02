import Link from "next/link";
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
          A public thought book for ClimateOS readers, preserving the original source text while
          making the work readable online.
        </p>

        <div className="action-list">
          <Link className="primary-link" href="/books/torch-and-horizon/zh">
            中文阅读目录
          </Link>
          {hasPdf ? (
            <Link className="secondary-link" href="/books/torch-and-horizon/pdf">
              Download PDF
            </Link>
          ) : null}
        </div>
      </section>

      <section className="content-section two-column">
        <div>
          <h2>Chinese edition</h2>
          <p>
            {chapters.length > 0
              ? `${chapters.length} Markdown chapters are available for reading.`
              : "章节内容待添加。"}
          </p>
          <Link href="/books/torch-and-horizon/zh">Open Chinese table of contents</Link>
        </div>
        <div>
          <h2>English edition</h2>
          <p>
            English translation is planned as a future multilingual edition. It is not marked as
            complete in v0.1.
          </p>
        </div>
      </section>
    </div>
  );
}
