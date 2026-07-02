import React from 'react';
import Link from 'next/link';
import { ChapterMetadata } from '@/lib/chapters';

interface TableOfContentsProps {
  chapters: ChapterMetadata[];
  currentSlug?: string;
  bookSlug: string;
  lang: string;
}

export default function TableOfContents({ 
  chapters, 
  currentSlug, 
  bookSlug, 
  lang 
}: TableOfContentsProps) {
  return (
    <nav className="table-of-contents">
      <h2 className="text-lg font-serif font-semibold text-gray-900 mb-4">
        Table of Contents
      </h2>
      <ol className="space-y-2">
        {chapters.map((chapter) => {
          const isActive = chapter.slug === currentSlug;
          return (
            <li key={chapter.slug}>
              <Link
                href={`/books/${bookSlug}/${lang}/${chapter.slug}`}
                className={`block py-1 text-sm ${
                  isActive
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {chapter.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
