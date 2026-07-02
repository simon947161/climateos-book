import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getAvailableLanguages, getAllChapters } from '@/lib/chapters';

export default function BookLandingPage() {
  const bookSlug = 'torch-and-horizon';
  const availableLangs = getAvailableLanguages(bookSlug);
  const chineseChapters = getAllChapters(bookSlug, 'zh');

  return (
    <Layout>
      {/* Book Header */}
      <div className="text-center py-12 md:py-16 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          远方与火炬
        </h1>
        <p className="text-xl text-gray-600 mb-2">Torch and Horizon</p>
        <p className="text-sm text-gray-500">Version 1.0</p>
      </div>

      {/* Language Selection */}
      <div className="py-12">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8 text-center">
          Choose Language / 选择语言
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Chinese - Available */}
          <Link
            href={`/books/${bookSlug}/zh`}
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">中文</h3>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                Available
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {chineseChapters.length} chapters
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Click to start reading
            </p>
          </Link>

          {/* English - Placeholder */}
          <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-500">English</h3>
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Translation in progress
            </p>
          </div>
        </div>
      </div>

      {/* PDF Download Section */}
      <div id="download" className="py-12 bg-gray-50 rounded-lg text-center">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
          Download Complete Book
        </h2>
        <p className="text-gray-600 mb-6">
          Get the PDF version for offline reading
        </p>
        <a
          href="/books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          download
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF (Chinese)
        </a>
        <p className="text-sm text-gray-500 mt-3">
          File size: ~10MB | Version 1.0
        </p>
      </div>

      {/* About This Book */}
      <div className="py-12">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
          About This Book
        </h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            <em>Torch and Horizon</em> explores the intersection of climate systems 
            and design thinking. It builds a framework for climate-responsive design 
            that honors both traditional wisdom and modern technical systems.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The book is structured as a journey—from understanding climate systems 
            (the horizon) to practical design strategies (the torch that lights the way).
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is a Living Book: open-source, iteratively improved, and freely accessible. 
            Contributions and feedback are welcome via{' '}
            <a 
              href="https://github.com/simon947161/climateos-book/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub Issues
            </a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
