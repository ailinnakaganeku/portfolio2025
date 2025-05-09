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
              A Frontend Software Developer dedicated to driving transformative
              impact by building bridges between innovative technology and
              tangible business growth. My mission is to architect
              high-performance, accessible, and intuitive digital experiences
              that not only empower users but also unlock measurable ROI and
              strategic advantage. By translating complex user data into
              actionable product innovations and fostering efficient development
              cycles, I create lasting value and help businesses connect with
              their customers to thrive in a dynamic digital world, firmly
              believing in technology&#39;s power to create opportunity and
              positive impact.
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
                  Investigated, debugged, and optimized code to enhance
                  application performance and ensure application stability and
                  performance. <br />
                  Resolved end-to-end testing challenges using Cypress Cloud,
                  reducing test flakiness by 8% and increasing deployment
                  confidence. <br />
                  Collaborated on migrating and upgrading applications to React
                  18, successfully resolving hydration issues and improving
                  performance metrics. Advanced web accessibility by
                  implementing Cypress Accessibility Testing, proactively
                  identifying and resolving compliance gaps to improve user
                  experience according to WCAG guidelines. <br />
                  Optimized Continuous Integration/Continuous Deployment
                  pipeline (GitHub Actions), reducing total duration by 17% to
                  reduce costs and accelerate developer feedback. <br />
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Crombie</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  Digital Experience Frontend Developer | Jul 2023 – Sep 2024
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Developed and launched highly responsive, performance-driven
                  web applications using React.js and Next.js, delivering
                  exceptional cross-platform user experiences (desktop &
                  mobile). <br />
                  Partnered with the engineering team to design and implement
                  customized digital solutions, seamlessly integrating CMS and
                  e-commerce functionalities. <br />
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Zenvia</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  Frontend Engineer | Oct 2021 – Jul 2023
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Contributed to a company-wide redesign and rebranding
                  initiative, utilizing internal design system libraries to
                  significantly improve UI consistency and brand alignment.
                  <br />
                  Collaborated in addressing customer-centric NPS challenges,
                  directly enhancing user satisfaction and engagement metrics.
                </p>
              </div>

              <div className="hover-fade">
                <h3 className="font-medium">Tag Latam - TA Group Holdings</h3>
                <p className="text-[rgb(var(--accent-color))] mb-2">
                  React Developer | Apr 2021 – Sept 2021
                </p>
                <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
                  Developed and delivered a complete mobile application solution
                  using React Native for deployment on iPads at CVS Pharmacy,
                  improving customer experience and operational efficiency.
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
              className="object-cover will-change-transform"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 40vw, 500px"
              quality={95}
              priority
              loading="eager"
              style={{ borderRadius: "2px" }}
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
