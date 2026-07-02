import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import {
  getAdjacentChineseChapters,
  getChineseChapter,
  getChineseChapters,
} from "@/lib/books";

type ChapterPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getChineseChapters().map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChineseChapter(slug);

  return {
    title: chapter ? `${chapter.title} | Torch and Horizon` : "Chapter | Torch and Horizon",
  };
}

export default async function ChineseChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChineseChapter(slug);

  if (!chapter) {
    notFound();
  }

  const { previous, next } = getAdjacentChineseChapters(chapter.slug);

  return (
    <div className="reader-shell">
      <nav className="reader-nav" aria-label="Chapter navigation">
        <Link href="/books/torch-and-horizon/zh">返回中文目录</Link>
        <span>{chapter.fileName}</span>
      </nav>

      <MarkdownDocument content={chapter.content} />

      <nav className="chapter-nav" aria-label="Previous and next chapter">
        {previous ? (
          <Link href={`/books/torch-and-horizon/zh/${previous.slug}`}>
            <small>上一章</small>
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/books/torch-and-horizon/zh/${next.slug}`}>
            <small>下一章</small>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
