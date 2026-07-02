import React from 'react';
import Link from 'next/link';

interface LanguageSwitcherProps {
  bookSlug: string;
  currentLang: string;
  availableLangs: string[];
}

export default function LanguageSwitcher({ 
  bookSlug, 
  currentLang, 
  availableLangs 
}: LanguageSwitcherProps) {
  if (availableLangs.length <= 1) {
    return null;
  }

  return (
    <div className="language-switcher flex items-center space-x-2 text-sm">
      <span className="text-gray-600">Language:</span>
      {availableLangs.map((lang) => {
        const isActive = lang === currentLang;
        const langLabel = lang === 'zh' ? '中文' : lang === 'en' ? 'English' : lang;
        
        return (
          <Link
            key={lang}
            href={`/books/${bookSlug}/${lang}`}
            className={`px-3 py-1 rounded ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {langLabel}
          </Link>
        );
      })}
    </div>
  );
}
