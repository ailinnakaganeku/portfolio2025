import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type EducationSectionProps = {
  education: HomeContent["education"];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section id="education" title={education.title}>
      <div className="space-y-4">
        {education.entries.map((entry) => (
          <article key={entry.id} className="hover-fade">
            <h3 className="font-medium">{entry.degree}</h3>
            <p className="text-[rgb(var(--accent-color))]">
              {entry.institution}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

