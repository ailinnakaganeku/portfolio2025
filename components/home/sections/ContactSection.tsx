import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type ContactSectionProps = {
  contact: HomeContent["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact" title={contact.title}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 hover-fade">
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[rgb(var(--accent-color))] transition-colors font-bold"
            aria-label={`Send email to ${contact.email}`}
          >
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2 hover-fade">
          <a
            href={`tel:${contact.phoneNumber}`}
            className="hover:text-[rgb(var(--accent-color))] transition-colors font-bold"
            aria-label={`Call ${contact.phone}`}
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}

