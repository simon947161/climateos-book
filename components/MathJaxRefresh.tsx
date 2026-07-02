"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: (elements?: Element[]) => Promise<void>;
    };
  }
}

export function MathJaxRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    function typesetMath() {
      if (cancelled) return;

      const mathElements = Array.from(document.querySelectorAll(".math-block"));
      if (window.MathJax?.typesetPromise && mathElements.length > 0) {
        window.MathJax.typesetPromise(mathElements).catch(() => undefined);
        return;
      }

      attempts += 1;
      if (attempts < 20) {
        window.setTimeout(typesetMath, 150);
      }
    }

    typesetMath();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
