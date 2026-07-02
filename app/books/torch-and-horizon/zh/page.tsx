import Link from "next/link";
import { getChineseChapters } from "@/lib/books";

export default function ChineseTableOfContentsPage() {
  const chapters = getChineseChapters();

  return (
    <div className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Torch and Horizon / 远方与火炬</p>
        <h1>中文目录</h1>
        <p className="lead">
          The table of contents is generated from Markdown files in
          <code> books/torch-and-horizon/zh/</code>.
        </p>
      </section>

      <section className="content-section">
        {chapters.length > 0 ? (
          <ol className="chapter-list">
            {chapters.map((chapter) => (
              <li key={chapter.slug}>
                <Link href={`/books/torch-and-horizon/zh/${chapter.slug}`}>
                  <span>{chapter.title}</span>
                  <small>{chapter.fileName}</small>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p>章节内容待添加。</p>
        )}
      </section>
    </div>
  );
}
