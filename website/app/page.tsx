import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center py-16 md:py-24">
        {/* Logo/Title Area */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            ClimateOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Living Books
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
          Open-source climate knowledge for designers, planners, and thinkers. 
          Thoughtful books that evolve with our understanding of climate systems 
          and climate-responsive design.
        </p>

        {/* Featured Book */}
        <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              Featured Book
            </span>
          </div>
          
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
            远方与火炬
          </h2>
          <p className="text-gray-600 mb-1">Torch and Horizon</p>
          <p className="text-sm text-gray-500 mb-6">Version 1.0</p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A foundational exploration of climate-responsive design thinking. 
            Bridging traditional wisdom and modern systems, this book offers 
            a framework for understanding and designing with climate.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/books/torch-and-horizon"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Read Online
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="/books/torch-and-horizon#download"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Download PDF
            </Link>
          </div>
        </div>

        {/* Future Books Placeholder */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-gray-600 mb-4">More Living Books Coming Soon</p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            ClimateOS Living Books is a growing library. 
            Each book is open-source, iteratively improved, and freely accessible.
          </p>
        </div>
      </div>
    </Layout>
  );
}
