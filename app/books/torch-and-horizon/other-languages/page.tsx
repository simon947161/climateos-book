import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function OtherLanguagesPage() {
  return (
    <main className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Multilingual Reading</p>
        <h1>Other Languages</h1>
        <p className="lead">
          Official editions are currently available in Chinese and English.
        </p>
        <div className="pending-box">
          <p>
            For other languages, please use your browser&apos;s built-in translation feature.
          </p>
          <p>
            Modern browsers such as Chrome, Edge and Safari can translate the book automatically
            while preserving the page layout.
          </p>
        </div>
        <div className="button-row">
          <Link className="primary-link" href="/books/torch-and-horizon/zh">
            Read Chinese Original
          </Link>
          <Link className="secondary-link" href="/books/torch-and-horizon/en">
            Read English Publication Edition
          </Link>
        </div>
        <LanguageSwitcher />
      </section>
    </main>
  );
}
