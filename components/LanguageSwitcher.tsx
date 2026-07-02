import Link from "next/link";
import { getChapterForLocale } from "@/lib/books";
import { getLocaleStatusLabel, locales, type LocaleCode } from "@/lib/locales";

type LanguageSwitcherProps = {
  currentLocale?: LocaleCode;
  slug?: string;
};

export function LanguageSwitcher({ currentLocale, slug }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label="Language switcher">
      {locales.map((locale) => {
        const hasMatchingChapter = slug ? getChapterForLocale(locale.code, slug) : null;
        const href =
          slug && hasMatchingChapter
            ? `/books/torch-and-horizon/${locale.code}/${slug}`
            : `/books/torch-and-horizon/${locale.code}`;

        return (
          <Link
            aria-current={locale.code === currentLocale ? "page" : undefined}
            className={locale.code === currentLocale ? "active" : ""}
            href={href}
            key={locale.code}
          >
            <span>
              {locale.code === currentLocale ? "✓ " : ""}
              {locale.nativeLabel}
              {locale.dir === "rtl" ? " · RTL" : ""}
            </span>
            <small>
              {locale.status === "original" ? "Original" : getLocaleStatusLabel(locale.status)}
            </small>
          </Link>
        );
      })}
    </nav>
  );
}
