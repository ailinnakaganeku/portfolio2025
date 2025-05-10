"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

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

  return (
    <main
      ref={mainRef}
      id="main-content"
      className="min-h-screen flex flex-col lg:flex-row"
      role="main"
    >
      <section
        className="order-2 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--background-rgb))] p-8 lg:p-16"
        aria-label="Portfolio Details"
      >
        <div className="max-w-2xl mx-auto space-y-16">
          <section id="about" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              ABOUT
            </h2>
            <div className="jp-line" role="presentation"></div>
            <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
              A Frontend Software Developer dedicated to crafting impactful,
              high-performance, accessible, and intuitive web experiences. I
              transform complex challenges into efficient, user-centric
              solutions built for lasting value. With an open, collaborative
              approach, I&#39;m driven to apply technology towards meaningful
              advancements that can enhance well-being and support critical
              innovations.
            </p>
          </section>

          <section id="experience" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              EXPERIENCE
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-8">
              <div className="hover-fade">
                <h3 className="font-medium">Crombie</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  Frontend Software Engineer | Sep 2024 – Present
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Driving frontend excellence on the global PUMA.com platform
                  (React, Next.js, TypeScript). Key impacts include enhancing
                  application performance via React 18 upgrades, championing
                  WCAG accessibility with Cypress testing, and boosting DevOps
                  efficiency by optimizing CI/CD pipelines (17% faster builds)
                  and E2E test stability (8% less flakiness) in a GCP/Terraform
                  environment. This work reflects my dedication to
                  high-performance, inclusive user experiences and robust,
                  sustainable development practices.
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Crombie</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  Digital Experience Frontend Developer | Jul 2023 – Sep 2024
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Developed responsive, performance-driven React.js and Next.js
                  web applications, delivering exceptional cross-platform user
                  experiences with seamless CMS/e-commerce integrations.
                  Successfully managed multiple concurrent projects, ensuring
                  high-quality standards and adaptability while creating lasting
                  value for users and the business.
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Zenvia</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  Frontend Engineer | Oct 2021 – Jul 2023
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Contributed to a major redesign by implementing a design
                  system for enhanced UI consistency, and improved codebase
                  quality through comprehensive documentation and best
                  practices. Leveraged analytics (Segment, FullStory) to drive
                  data-informed UX improvements, directly enhancing user
                  satisfaction.
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Tag Latam - TA Group Holdings</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  React Developer | Apr 2021 – Sept 2021
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Delivered a React Native iPad solution for CVS Pharmacy, a
                  major US healthcare provider, enhancing in-store customer
                  experience and operational efficiency. This foundational role
                  in the health-tech space reinforced my commitment to quality,
                  user-centric design, and developing with an understanding of
                  the data sensitivity inherent in healthcare applications
                  within an Agile Scrum methodology.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              TECHNICAL SKILLS
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="hover-fade">
                <h3 className="font-medium">Frontend Development</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  HTML5, CSS3, JavaScript, TypeScript, React, React Native,
                  Next.js
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">Backend Development</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  Node.js, GraphQL
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">CMS</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  WordPress
                </p>
              </div>
              <div className="hover-fade">
                <h3 className="font-medium">Testing</h3>
                <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
                  Cypress, Jest, React Testing Library
                </p>
              </div>
            </div>
          </section>

          <section id="education" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              EDUCATION
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="hover-fade">
                <h3 className="font-medium">Full Stack Javascript Developer</h3>
                <p className="text-[rgb(var(--accent-color))]">
                  Henry Bootcamp | Jan 2021
                </p>
              </div>
            </div>
          </section>

          <section id="awards" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              CERTIFICATIONS
            </h2>
            <div className="jp-line"></div>
            <ul className="space-y-2">
              <li className="hover-fade">
                Google Cloud Digital Leader (In Progress)
              </li>
              <li className="hover-fade">
                Kaggle: 5-Day Gen AI Intensive Course
              </li>
              <li className="hover-fade">
                IBM: Generative AI: Prompt Engineering
              </li>
              <li className="hover-fade">
                Mastercard: Dynamic Yield Technical Certification
              </li>
              <li className="hover-fade">
                EF Set: Official English Certificate C2 Proficient
              </li>
              <li className="hover-fade">Meta: Principles of UX/UI Design</li>
            </ul>
          </section>

          <section id="contact" className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              CONTACT
            </h2>
            <div className="jp-line"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 hover-fade">
                <a
                  href="mailto:ailinndev@proton.me"
                  className="hover:text-[rgb(var(--accent-color))] transition-colors"
                >
                  ailinndev@proton.me
                </a>
              </div>
              <div className="flex items-center gap-2 hover-fade">
                <a
                  href="tel:+34620466880"
                  className="hover:text-[rgb(var(--accent-color))] transition-colors"
                >
                  620 466 880
                </a>
              </div>
            </div>
          </section>

          <section className="animate-on-scroll">
            <h2 className="text-[rgb(var(--foreground-rgb))] text-lg font-medium tracking-wider mb-4">
              LOCATION
            </h2>
            <div className="jp-line"></div>
            <p>Madrid, Spain</p>
          </section>

          <div className="flex justify-start">
            <a
              href="/ailin-nakaganeku-resume.pdf"
              download="ailin-nakaganeku-resume.pdf"
              className="btn-primary flex items-center justify-center gap-2 no-underline"
              aria-label="Download Ailin PDF Resume"
            >
              <Download size={20} aria-hidden="true" />
              <span>Download PDF Resume</span>
            </a>
          </div>

          <footer className="pt-8 pb-4 flex items-center justify-between text-sm text-[rgb(var(--foreground-rgb))]">
            <p>© 2025 NAKAGANEKU</p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/ailinnakaganeku"
                className="social-link"
                aria-label="Visit GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/ailinn"
                className="social-link"
                aria-label="Visit LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
          </footer>
        </div>
      </section>

      <section
        className="order-1 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--foreground-rgb))] p-8 lg:p-16 flex items-center justify-center text-[rgb(var(--background-rgb))] min-h-[60vh] lg:min-h-screen lg:fixed lg:right-0"
        aria-label="Profile Introduction"
      >
        <div className="max-w-xl text-center">
          <h1 className="text-4xl lg:text-6xl font-medium mb-6 tracking-wider font-merriweather-sans">
            Nakaganeku
          </h1>
          <div className="relative w-full max-w-md mx-auto mb-6 aspect-[3/4] lg:h-[60vh]">
            <Image
              src="/profile.webp"
              alt="Ailin Nakaganeku - Frontend Software Developer"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 40vw, 500px"
              quality={75}
              priority
              style={{ borderRadius: "2px" }}
              placeholder="blur"
              blurDataURL="/placeholder.webp"
            />
          </div>
          <p className="text-xl lg:text-2xl tracking-wide font-merriweather-sans">
            Frontend Software
            <br />
            Developer
          </p>
        </div>
      </section>
    </main>
  );
}
