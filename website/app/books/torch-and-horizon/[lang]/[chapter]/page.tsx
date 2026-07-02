import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import TableOfContents from '@/components/TableOfContents';
import ChapterNavigation from '@/components/ChapterNavigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { 
  getChapterBySlug, 
  getAllChapters, 
  getChapterNavigation,
  getAvailableLanguages,
  bookExists 
} from '@/lib/chapters';

interface ChapterPageProps {
  params: Promise<{
    lang: string;
    chapter: string;
  }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { lang, chapter: chapterSlug } = await params;
  
  const bookSlug = 'torch-and-horizon';

  // Check if book and language exist
  if (!bookExists(bookSlug)) {
    notFound();
  }

  const availableLangs = getAvailableLanguages(bookSlug);
  if (!availableLangs.includes(lang)) {
    notFound();
  }

  // Get chapter content
  const chapter = await getChapterBySlug(bookSlug, lang, chapterSlug);
  if (!chapter) {
    notFound();
  }

  // Get navigation
  const { prev, next } = getChapterNavigation(bookSlug, lang, chapterSlug);
  
  // Get all chapters for TOC
  const chapters = getAllChapters(bookSlug, lang);

  return (
    <Layout 
      showSidebar={true}
      sidebarContent={
        <div>
          <LanguageSwitcher 
            bookSlug={bookSlug} 
            currentLang={lang} 
            availableLangs={availableLangs} 
          />
          <div className="mt-8">
            <TableOfContents 
              chapters={chapters}
              currentSlug={chapterSlug}
              bookSlug={bookSlug}
              lang={lang}
            />
          </div>
        </div>
      }
    >
      {/* Chapter Header */}
      <div className="mb-8">
        <Link
          href={`/books/${bookSlug}/${lang}`}
          className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center mb-4"
        >
          <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Table of Contents
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
          {chapter.title}
        </h1>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>Chapter {chapter.order}</span>
        </div>
      </div>

      {/* Chapter Content */}
      <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-blue-600">
        <div dangerouslySetInnerHTML={{ __html: chapter.htmlContent }} />
      </article>

      {/* Chapter Navigation */}
      <ChapterNavigation 
        prev={prev}
        next={next}
        bookSlug={bookSlug}
        lang={lang}
      />

      {/* Back to TOC */}
      <div className="mt-8 text-center">
        <Link
          href={`/books/${bookSlug}/${lang}`}
          className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center"
        >
          <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Back to Table of Contents
        </Link>
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  const bookSlug = 'torch-and-horizon';
  const availableLangs = getAvailableLanguages(bookSlug);
  
  const params: { lang: string; chapter: string }[] = [];  
  
  for (const lang of availableLangs) {
    const chapters = getAllChapters(bookSlug, lang);
    for (const chapter of chapters) {
      params.push({
        lang,
        chapter: chapter.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { lang, chapter: chapterSlug } = await params;
  const bookSlug = 'torch-and-horizon';
  
  try {
    const chapter = await getChapterBySlug(bookSlug, lang, chapterSlug);
    
    if (!chapter) {
      return {
        title: 'Chapter Not Found | ClimateOS Living Books',
      };
    }

    return {
      title: `${chapter.title} | Torch and Horizon | ClimateOS Living Books`,
      description: `Read ${chapter.title} from Torch and Horizon - a ClimateOS Living Book`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Torch and Horizon | ClimateOS Living Books',
    };
  }
}
