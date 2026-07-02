import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function AboutClimateOSPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          About ClimateOS
        </h1>
        
        <div className="prose prose-lg max-w-none">
          {/* What is ClimateOS */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              What is ClimateOS?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ClimateOS is an open-source initiative to build climate-responsive design 
              knowledge and tools. We believe that addressing climate challenges requires 
              bridging traditional wisdom, modern building systems, and emerging 
              technologies.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The name "ClimateOS" reflects our systems-thinking approach: Climate as 
              the core subject, OS (Operating System) as the interconnected framework 
              of knowledge, tools, and practices.
            </p>
          </section>

          {/* Living Books */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Living Books
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ClimateOS Living Books are open-source, iteratively improved books on 
              climate-responsive design. Unlike traditional publications, these books 
              evolve with community input, new research, and changing climate realities.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Key principles:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Open Access</strong> - All content is freely accessible online</li>
              <li><strong>Open Source</strong> - Content and code are open for contribution</li>
              <li><strong>Iterative</strong> - Books improve over time through feedback and updates</li>
              <li><strong>Multilingual</strong> - Knowledge should be accessible in multiple languages</li>
              <li><strong>Practical</strong> - Theory connects to actionable design strategies</li>
            </ul>
          </section>

          {/* Core Themes */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Core Themes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Traditional Wisdom
                </h3>
                <p className="text-gray-700 text-sm">
                  Distilling climate-responsive strategies from vernacular architecture 
                  and traditional planning worldwide.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Modern Building Systems
                </h3>
                <p className="text-gray-700 text-sm">
                  Integrating contemporary HVAC, building automation, and energy 
                  systems with passive design strategies.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  CAD and Revit Workflows
                </h3>
                <p className="text-gray-700 text-sm">
                  Practical guidance for implementing climate-responsive design 
                  in standard architectural workflows.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  AI-Supported Logic
                </h3>
                <p className="text-gray-700 text-sm">
                  Exploring how AI can support climate analysis, design optimization, 
                  and decision-making in the design process.
                </p>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Future Vision
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ClimateOS aims to grow into a comprehensive platform for climate-responsive 
              design, including:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Additional Living Books on specialized topics</li>
              <li>Interactive tools for climate analysis and design</li>
              <li>Community forum for practitioners and researchers</li>
              <li>Open datasets and climate profiles</li>
              <li>AI reading assistant for deeper exploration</li>
              <li>Multilingual publication workflow</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              This website (v0.1) is the first step—establishing a foundation for 
              publishing, reading, and evolving Living Books.
            </p>
          </section>

          {/* Get Involved */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Get Involved
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ClimateOS is a community effort. Here's how you can contribute:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="mr-3 text-gray-400">→</span>
                <div>
                  <strong className="text-gray-900">Read and Share</strong>
                  <span className="text-gray-700"> - Spread the word about Living Books</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 text-gray-400">→</span>
                <div>
                  <strong className="text-gray-900">Provide Feedback</strong>
                  <span className="text-gray-700"> - Report errors, suggest improvements via </span>
                  <Link href="/feedback" className="text-blue-600 hover:text-blue-800">
                    feedback
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 text-gray-400">→</span>
                <div>
                  <strong className="text-gray-900">Contribute Content</strong>
                  <span className="text-gray-700"> - Propose new chapters, case studies, or translations</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 text-gray-400">→</span>
                <div>
                  <strong className="text-gray-900">Develop Tools</strong>
                  <span className="text-gray-700"> - Help build interactive tools and platforms</span>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Links
            </h2>
            
            <div className="space-y-3">
              <div>
                <a
                  href="https://github.com/simon947161/climateos-book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  GitHub Repository
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div>
                <Link href="/feedback" className="text-blue-600 hover:text-blue-800">
                  Feedback & Contributions
                </Link>
              </div>
              
              <div>
                <a
                  href="mailto:hello@climateos.org"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
