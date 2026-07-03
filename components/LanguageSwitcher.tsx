import Link from "next/link";
import { getChapterForLocale } from "@/lib/books";
import { type LocaleCode } from "@/lib/locales";

type LanguageSwitcherProps = {
  currentLocale?: LocaleCode;
  slug?: string;
};

const officialEditions: Array<{
  code: Extract<LocaleCode, "zh" | "en">;
  label: string;
  status: string;
}> = [
  { code: "zh", label: "Chinese", status: "Original" },
  { code: "en", label: "English", status: "Publication Edition" },
];

export function LanguageSwitcher({ currentLocale, slug }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label="Language switcher">
      {officialEditions.map((locale) => {
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
              {locale.label}
            </span>
            <small>{locale.status}</small>
          </Link>
        );
      })}
      <span className="language-divider" aria-hidden="true" />
      <Link className="language-other" href="/books/torch-and-horizon/other-languages">
        <span>Other Languages</span>
        <small>Browser translation</small>
      </Link>
    </nav>
  );
}
