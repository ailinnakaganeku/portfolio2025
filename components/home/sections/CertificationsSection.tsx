import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type CertificationsSectionProps = {
  certifications: HomeContent["certifications"];
};

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <Section id="awards" title={certifications.title}>
      <ul className="space-y-2">
        {certifications.items.map((item) => (
          <li key={item} className="hover-fade">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

