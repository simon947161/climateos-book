import fs from "node:fs";
import path from "node:path";
import type { LocaleCode } from "@/lib/locales";

export type Chapter = {
  slug: string;
  fileName: string;
  title: string;
  content: string;
};

const rootDirectory = process.cwd();
const torchAndHorizonDirectory = path.join(
  rootDirectory,
  "books",
  "torch-and-horizon",
);
const chineseDirectory = path.join(torchAndHorizonDirectory, "zh");
const pdfPath = path.join(
  torchAndHorizonDirectory,
  "pdf",
  "torch-and-horizon-v1.pdf",
);

export function getChineseChapterDirectory() {
  return chineseDirectory;
}

export function getBookLocaleDirectory(locale: LocaleCode) {
  return path.join(torchAndHorizonDirectory, locale);
}

export function hasTorchAndHorizonPdf() {
  return fs.existsSync(pdfPath);
}

export function getTorchAndHorizonPdfPath() {
  return pdfPath;
}

export function getChineseChapters(): Chapter[] {
  return getChaptersForLocale("zh");
}

export function getChaptersForLocale(locale: LocaleCode): Chapter[] {
  const localeDirectory = getBookLocaleDirectory(locale);

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
        title: extractTitle(content, fileName),
        content,
      };
    });
}

export function getChineseChapter(slug: string) {
  return getChapterForLocale("zh", slug);
}

export function getChapterForLocale(locale: LocaleCode, slug: string) {
  return getChaptersForLocale(locale).find((chapter) => chapter.slug === slug);
}

export function getAdjacentChineseChapters(slug: string) {
  return getAdjacentChaptersForLocale("zh", slug);
}

export function getAdjacentChaptersForLocale(locale: LocaleCode, slug: string) {
  const chapters = getChaptersForLocale(locale);
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

function extractTitle(content: string, fileName: string) {
  const heading = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.startsWith("# "));

  if (heading) {
    return heading.replace(/^#\s+/, "").trim();
  }

  return fileName
    .replace(/\.md$/, "")
    .replace(/^\d+-/, "")
    .replace(/-/g, " ");
}
