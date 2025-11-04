"use client";

import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import messages from "./locales/en.json";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const t = messages.home;
  const tAria = messages.ariaLabels;

  return (
    <main
      ref={mainRef}
      id="main-content"
      className="min-h-screen flex flex-col lg:flex-row"
      role="main"
    >
      <section
        className="order-2 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--background-rgb))] p-8 lg:p-16 lg:pt-20"
        aria-label={tAria.portfolioDetails}
      >
        <div className="max-w-xl mx-auto space-y-16">
          <section id="about" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.about.title}
            </h2>
            <div className="jp-line" role="presentation"></div>
            <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
              {t.about.description}
            </p>
          </section>

          <section id="experience" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.experience.title}
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-8">
              <div className="hover-fade">
                <h3 className="font-medium">{t.experience.crombie1.company}</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  <strong>{t.experience.crombie1.role.title}</strong>
                  {" | "}
                  <span>{t.experience.crombie1.role.period}</span>
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  {t.experience.crombie1.description}
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">{t.experience.crombie2.company}</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  <strong>{t.experience.crombie2.role.title}</strong>
                  {" | "}
                  <span>{t.experience.crombie2.role.period}</span>
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  {t.experience.crombie2.description}
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">{t.experience.zenvia.company}</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  <strong>{t.experience.zenvia.role.title}</strong>
                  {" | "}
                  <span>{t.experience.zenvia.role.period}</span>
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  {t.experience.zenvia.description}
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">{t.experience.tagLatam.company}</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  <strong>{t.experience.tagLatam.role.title}</strong>
                  {" | "}
                  <span>{t.experience.tagLatam.role.period}</span>
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  {t.experience.tagLatam.description}
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.technicalSkills.title}
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="hover-fade">
                <h3 className="font-medium">
                  {t.technicalSkills.frontend.title}
                </h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.frontend.skills}
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">
                  {t.technicalSkills.backend.title}
                </h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.backend.skills}
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">{t.technicalSkills.cms.title}</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.cms.skills}
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">
                  {t.technicalSkills.testing.title}
                </h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.testing.skills}
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">{t.technicalSkills.db.title}</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.db.skills}
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">{t.technicalSkills.tools.title}</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  {t.technicalSkills.tools.skills}
                </p>
              </div>
            </div>
          </section>

          <section id="education" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.education.title}
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="hover-fade">
                <h3 className="font-medium">{t.education.bootcamp.degree}</h3>
                <p className="text-[rgb(var(--accent-color))]">
                  {t.education.bootcamp.institution}
                </p>
              </div>
            </div>
          </section>

          <section id="awards" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.certifications.title}
            </h2>
            <div className="jp-line"></div>
            <ul className="space-y-2">
              {t.certifications.items.map((item, index) => (
                <li key={index} className="hover-fade">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.contact.title}
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 hover-fade">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="hover:text-[rgb(var(--accent-color))] transition-colors font-bold"
                >
                  {t.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 hover-fade">
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-[rgb(var(--accent-color))] transition-colors font-bold"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>
          </section>

          <section className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2">
              {t.location.title}
            </h2>
            <div className="jp-line"></div>
            <p className="font-bold">{t.location.city}</p>
          </section>

          <div className="flex justify-start">
            <a
              href="/ailin-nakaganeku-resume.pdf"
              download="ailin-nakaganeku-resume.pdf"
              className="btn-primary flex items-center justify-center gap-2 no-underline"
              aria-label={t.resumeAriaLabel}
            >
              <Download size={20} aria-hidden="true" />
              <span>{t.resumeButton}</span>
            </a>
          </div>

          <footer className="pt-8 pb-4 flex items-center justify-between text-sm text-[rgb(var(--foreground-rgb))]">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/ailinnakaganeku"
                className="social-link"
                aria-label={t.footer.githubAriaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.github}
              </Link>
              <Link
                href="https://www.linkedin.com/in/ailinn"
                className="social-link"
                aria-label={t.footer.linkedinAriaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.linkedin}
              </Link>
            </div>
          </footer>
        </div>
      </section>

      <section
        className="order-1 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--foreground-rgb))] p-4 sm:p-6 lg:p-16 flex items-center justify-center text-[rgb(var(--background-rgb))] min-h-[60vh] lg:min-h-screen lg:fixed lg:right-0"
        aria-label={t.profileSection.ariaLabel}
      >
        <div className="max-w-xl text-center">
          <h1 className="text-4xl lg:text-6xl font-medium mb-6 tracking-wider">
            {t.profileSection.name}
          </h1>
          <div className="relative w-full max-w-[294px] mx-auto mb-6">
            <Image
              src="/profile.webp"
              alt={t.profileSection.imageAlt}
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
          <p className="text-base sm:text-xl md:text-2xl lg:text-[36px] tracking-[0em] font-medium">
            <span className="block leading-[1.2]">
              {t.profileSection.titleLine1}
            </span>
            <span className="block leading-[1.52]">
              {t.profileSection.titleLine2}
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
