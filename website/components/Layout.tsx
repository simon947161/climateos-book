import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarContent?: React.ReactNode;
}

export default function Layout({ children, showSidebar = false, sidebarContent }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-serif font-bold text-gray-900">
                ClimateOS
              </span>
              <span className="text-sm text-gray-600 hidden sm:inline">
                Living Books
              </span>
            </Link>

            <nav className="flex items-center space-x-6 text-sm">
              <Link href="/books/torch-and-horizon" className="text-gray-700 hover:text-gray-900">
                远方与火炬
              </Link>
              <Link href="/about-climateos" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="/feedback" className="text-gray-700 hover:text-gray-900">
                Feedback
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {showSidebar && sidebarContent ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-24">
                  {sidebarContent}
                </div>
              </aside>
              
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">ClimateOS Living Books</h3>
              <p className="text-sm text-gray-600">
                Open-source climate knowledge for designers, planners, and thinkers.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/books/torch-and-horizon" className="text-gray-600 hover:text-gray-900">
                    Torch and Horizon
                  </Link>
                </li>
                <li>
                  <Link href="/about-climateos" className="text-gray-600 hover:text-gray-900">
                    About ClimateOS
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">GitHub</h3>
              <a 
                href="https://github.com/simon947161/climateos-book" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                simon947161/climateos-book
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} ClimateOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
