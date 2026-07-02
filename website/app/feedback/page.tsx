import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function FeedbackPage() {
  const githubIssuesUrl = 'https://github.com/simon947161/climateos-book/issues';

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Feedback
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Your feedback helps improve ClimateOS Living Books. 
          Whether you've found an error, have a suggestion, or want to contribute, 
          we'd love to hear from you.
        </p>

        {/* GitHub Issues - Primary */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex items-start mb-4">
            <svg className="w-8 h-8 mr-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div>
              <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                GitHub Issues
              </h2>
              <p className="text-gray-600">
                Preferred method for bugs, suggestions, and discussions
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            Use GitHub Issues to report errors, suggest improvements, or start discussions 
            about the book content. This keeps feedback transparent and allows community 
            participation.
          </p>
          
          <a
            href={githubIssuesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Open GitHub Issues
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Feedback Guidelines */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
            Feedback Guidelines
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">🐛 Report Errors</h3>
              <p className="text-gray-700 text-sm">
                Found a typo, broken link, or factual error? Please open an issue 
                with details including the chapter and location.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">💡 Suggest Improvements</h3>
              <p className="text-gray-700 text-sm">
                Have ideas for clarifying explanations, adding examples, or improving 
                illustrations? We welcome suggestions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">🌍 Contribute Translations</h3>
              <p className="text-gray-700 text-sm">
                Help translate the book to make it accessible to more readers. 
                Contact us via GitHub Issues to discuss.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">📝 General Feedback</h3>
              <p className="text-gray-700 text-sm">
                Share your thoughts on the book's structure, clarity, or impact. 
                Constructive feedback helps us improve.
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center"
          >
            <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
