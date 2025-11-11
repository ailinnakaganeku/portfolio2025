import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type AboutSectionProps = {
  about: HomeContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" title={about.title}>
      <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
        {about.description}
      </p>
    </Section>
  );
}

