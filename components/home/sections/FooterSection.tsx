import Link from "next/link";

import type { HomeContent } from "@/types/portfolio";

type FooterSectionProps = {
  footer: HomeContent["footer"];
};

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="pt-8 pb-4 flex items-center justify-between text-sm text-[rgb(var(--foreground-rgb))]">
      <p>{footer.copyright}</p>
      <div className="flex gap-3 lg:gap-6">
        <Link
          href="https://github.com/ailinnakaganeku"
          className="social-link"
          aria-label={footer.githubAriaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.github}
        </Link>
        <Link
          href="https://www.linkedin.com/in/ailinn"
          className="social-link"
          aria-label={footer.linkedinAriaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.linkedin}
        </Link>
      </div>
    </footer>
  );
}

