import Link from "next/link";
import { getLocaleStatusLabel, locales, type LocaleCode } from "@/lib/locales";

type LanguageSwitcherProps = {
  currentLocale?: LocaleCode;
  slug?: string;
};

export function LanguageSwitcher({ currentLocale, slug }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label="Language switcher">
      {locales.map((locale) => {
        const href = slug
          ? `/books/torch-and-horizon/${locale.code}/${slug}`
          : `/books/torch-and-horizon/${locale.code}`;

        return (
          <Link
            aria-current={locale.code === currentLocale ? "page" : undefined}
            className={locale.code === currentLocale ? "active" : ""}
            href={href}
            key={locale.code}
          >
            <span>{locale.nativeLabel}</span>
            <small>
              {locale.status === "original" ? "Original" : getLocaleStatusLabel(locale.status)}
            </small>
          </Link>
        );
      })}
    </nav>
  );
}
