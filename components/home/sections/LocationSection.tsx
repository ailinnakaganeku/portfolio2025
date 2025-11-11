import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type LocationSectionProps = {
  location: HomeContent["location"];
};

export function LocationSection({ location }: LocationSectionProps) {
  return (
    <Section id="location" title={location.title}>
      <p className="font-bold">{location.city}</p>
    </Section>
  );
}

