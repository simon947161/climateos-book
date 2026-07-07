import fs from "node:fs";
import path from "node:path";
import type { LocaleCode } from "@/lib/locales";

export type ZhiyuanjiChapter = {
  slug: string;
  fileName: string;
  title: string;
  content: string;
};

const rootDirectory = process.cwd();
const zhiyuanjiDirectory = path.join(rootDirectory, "books", "zhiyuanji");
const chineseDirectory = path.join(zhiyuanjiDirectory, "zh");

export function getZhiyuanjiChineseChapterDirectory() {
  return chineseDirectory;
}

export function getZhiyuanjiBookLocaleDirectory(locale: LocaleCode) {
  return path.join(zhiyuanjiDirectory, locale);
}

export function getZhiyuanjiChineseChapters(): ZhiyuanjiChapter[] {
  return getZhiyuanjiChaptersForLocale("zh");
}

export function getZhiyuanjiChaptersForLocale(locale: LocaleCode): ZhiyuanjiChapter[] {
  const localeDirectory = getZhiyuanjiBookLocaleDirectory(locale);

  if (!fs.existsSync(localeDirectory)) {
    return [];
  }

  return fs
    .readdirSync(localeDirectory)
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
    .sort((a, b) => a.localeCompare(b, "en"))
    .map((fileName) => {
      const content = fs.readFileSync(path.join(localeDirectory, fileName), "utf8");
      return {
        slug: fileName.replace(/\.md$/, ""),
        fileName,
        title: extractZhiyuanjiTitle(content, fileName),
        content,
      };
    });
}

export function getZhiyuanjiChineseChapter(slug: string) {
  return getZhiyuanjiChapterForLocale("zh", slug);
}

export function getZhiyuanjiChapterForLocale(locale: LocaleCode, slug: string) {
  return getZhiyuanjiChaptersForLocale(locale).find((chapter) => chapter.slug === slug);
}

export function getAdjacentZhiyuanjiChineseChapters(slug: string) {
  return getAdjacentZhiyuanjiChaptersForLocale("zh", slug);
}

export function getAdjacentZhiyuanjiChaptersForLocale(locale: LocaleCode, slug: string) {
  const chapters = getZhiyuanjiChaptersForLocale(locale);
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

function extractZhiyuanjiTitle(content: string, fileName: string) {
  const heading = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^#{1,3}\s+/.test(line));

  if (heading) {
    return heading.replace(/^#{1,3}\s+/, "").replace(/^\*(.+)\*$/, "$1").trim();
  }

  return fileName
    .replace(/\.md$/, "")
    .replace(/^\d+-/, "")
    .replace(/-/g, " ");
}
