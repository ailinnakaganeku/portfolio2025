import { useEffect, useRef } from "react";

const LINE_ANIMATION_DELAY = 200;
const SELECTOR = ".animate-on-scroll";

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver API.
 * Animates sections and their decorative lines when they enter the viewport.
 */
export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRefsRef = useRef<Set<NodeJS.Timeout>>(new Set());

  useEffect(() => {
    if (globalThis.window === undefined) return;
    if (globalThis.IntersectionObserver === undefined) return;

    const sections = document.querySelectorAll<HTMLElement>(SELECTOR);
    if (sections.length === 0) return;

    // Cleanup existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const section = entry.target as HTMLElement;
        if (section.classList.contains("fade-in")) continue;

        section.classList.add("fade-in");

        const line = section.querySelector<HTMLElement>(".jp-line");
        if (line && !line.classList.contains("animate-line")) {
          const timeoutId = setTimeout(() => {
            line.classList.add("animate-line");
            timeoutRefsRef.current.delete(timeoutId);
          }, LINE_ANIMATION_DELAY);
          timeoutRefsRef.current.add(timeoutId);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    for (const section of sections) {
      observerRef.current.observe(section);
    }

    const timeouts = timeoutRefsRef.current;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      for (const timeoutId of timeouts) {
        clearTimeout(timeoutId);
      }
      timeouts.clear();
    };
  }, []);
}
