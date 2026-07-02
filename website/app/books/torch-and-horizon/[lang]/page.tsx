import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import TableOfContents from '@/components/TableOfContents';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getAllChapters, getAvailableLanguages, bookExists } from '@/lib/chapters';

interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function BookLangPage({ params }: LangPageProps) {
  const { lang } = await params;
  
  const bookSlug = 'torch-and-horizon';
  const bookExistsFlag = bookExists(bookSlug);
  const availableLangs = getAvailableLanguages(bookSlug);
  const chapters = getAllChapters(bookSlug, lang);
  
  const langLabel = lang === 'zh' ? '中文' : lang === 'en' ? 'English' : lang;

  // Check if language exists
  if (!availableLangs.includes(lang)) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Language Not Available
          </h1>
          <p className="text-gray-600 mb-8">
            The {langLabel} version of this book is not yet available.
          </p>
          <Link
            href="/books/torch-and-horizon"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Back to Book Home
          </Link>
        </div>
      </Layout>
    );
  }

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
              bookSlug={bookSlug}
              lang={lang}
            />
          </div>
        </div>
      }
    >
      {/* Book Title */}
      <div className="mb-8">
        <Link
          href="/books/torch-and-horizon"
          className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center mb-4"
        >
          <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Book Info
        </Link>
        
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          {lang === 'zh' ? '远方与火炬' : 'Torch and Horizon'}
        </h1>
        <p className="text-gray-600">
          {langLabel} Version
        </p>
      </div>

      {/* Welcome Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the {langLabel} version of <em>Torch and Horizon</em>. 
          Select a chapter from the table of contents to begin reading.
        </p>
        
        {chapters.length > 0 && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-3">
              Start Reading
            </h2>
            <p className="text-gray-700 mb-4">
              This book has {chapters.length} chapters. 
              {lang === 'zh' ? ' 建议从序言开始。' : ' We recommend starting with the preface.'}
            </p>
            <Link
              href={`/books/${bookSlug}/${lang}/${chapters[0].slug}`}
              className="inline-flex items-center px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              {lang === 'zh' ? '开始阅读' : 'Start Reading'}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  const bookSlug = 'torch-and-horizon';
  const availableLangs = getAvailableLanguages(bookSlug);
  
  return availableLangs.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }: LangPageProps) {
  const { lang } = await params;
  const langLabel = lang === 'zh' ? '中文' : lang === 'en' ? 'English' : lang;
  
  return {
    title: `${lang === 'zh' ? '远方与火炬' : 'Torch and Horizon'} | ${langLabel} | ClimateOS Living Books`,
    description: `Read Torch and Horizon in ${langLabel} - a ClimateOS Living Book`,
  };
}
