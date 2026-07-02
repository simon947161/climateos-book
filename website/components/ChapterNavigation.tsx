import React from 'react';
import Link from 'next/link';
import { ChapterMetadata } from '@/lib/chapters';

interface ChapterNavigationProps {
  prev: ChapterMetadata | null;
  next: ChapterMetadata | null;
  bookSlug: string;
  lang: string;
}

export default function ChapterNavigation({ 
  prev, 
  next, 
  bookSlug, 
  lang 
}: ChapterNavigationProps) {
  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="chapter-navigation flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
      <div className="flex-1">
        {prev && (
          <Link
            href={`/books/${bookSlug}/${lang}/${prev.slug}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 group"
          >
            <svg 
              className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            <div>
              <div className="text-xs text-gray-500">Previous</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </Link>
        )}
      </div>

      <div className="flex-1 text-right">
        {next && (
          <Link
            href={`/books/${bookSlug}/${lang}/${next.slug}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 group"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
}
