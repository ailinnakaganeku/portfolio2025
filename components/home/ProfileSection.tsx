import Image from "next/image";

import type { HomeContent } from "@/types/portfolio";

type ProfileSectionProps = {
  profile: HomeContent["profileSection"];
};

export function ProfileSection({ profile }: ProfileSectionProps) {
  const [primaryTitle, secondaryTitle] = profile.titles;

  return (
    <section
      className="order-1 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--foreground-rgb))] p-4 sm:p-6 lg:p-16 flex items-center justify-center text-[rgb(var(--background-rgb))] lg:min-h-screen lg:fixed lg:right-0"
      aria-label={profile.ariaLabel}
    >
      <div className="max-w-xl text-center pt-8 lg:pt-0">
        <h1 className="text-[45px] lg:text-6xl font-medium mb-6 tracking-wider">
          {profile.name}
        </h1>
        <div className="relative w-full max-w-[294px] mx-auto mb-6">
          <Image
            src="/profile.webp"
            alt={profile.imageAlt}
            width={1877}
            height={2400}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 40vw, 294px"
            quality={75}
            priority
            style={{
              borderRadius: "inherit",
              objectPosition: "center center",
              display: "block",
              aspectRatio: "1877/2400",
            }}
            placeholder="blur"
            blurDataURL="/placeholder.webp"
          />
        </div>
        <p className="text-[24px] sm:text-xl md:text-2xl lg:text-[36px] tracking-[0em] font-medium mb-8 lg:mb-0">
          <span className="block leading-[1.2]">{primaryTitle}</span>
          <span className="block leading-[1.52]">{secondaryTitle}</span>
        </p>
      </div>
    </section>
  );
}

