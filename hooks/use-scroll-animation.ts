"use client";

import { useLayoutEffect, useRef } from "react";

const LINE_ANIMATION_DELAY = 200;
const SELECTOR = ".animate-on-scroll";
const LINE_SELECTOR = ".jp-line";

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver API.
 * Animates sections when they enter the viewport. Elements visible on initial load
 * are shown without animation.
 */
export function useScrollAnimation(): void {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRefsRef = useRef<Set<NodeJS.Timeout>>(new Set());
  const processedRef = useRef<Set<HTMLElement>>(new Set());

  useLayoutEffect(() => {
    if (globalThis.window === undefined || globalThis.IntersectionObserver === undefined) {
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>(SELECTOR);
    if (sections.length === 0) return;

    const animateSection = (section: HTMLElement, isInitiallyVisible: boolean): void => {
      if (processedRef.current.has(section)) return;
      processedRef.current.add(section);

      if (isInitiallyVisible) {
        section.classList.add("fade-in", "no-animation");
      } else {
        section.classList.add("fade-in");
      }

      const line = section.querySelector<HTMLElement>(LINE_SELECTOR);
      if (!line || line.classList.contains("animate-line")) return;

      if (isInitiallyVisible) {
        line.classList.add("animate-line");
      } else {
        const timeoutId = setTimeout(() => {
          line.classList.add("animate-line");
          timeoutRefsRef.current.delete(timeoutId);
        }, LINE_ANIMATION_DELAY);
        timeoutRefsRef.current.add(timeoutId);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observerRef.current?.unobserve(entry.target);
          animateSection(entry.target as HTMLElement, false);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0,
      rootMargin: "0px 0px 100px 0px",
    });

    // Use IntersectionObserver for initial visibility check (more reliable)
    const initialObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            initialObserver.unobserve(entry.target);
            animateSection(entry.target as HTMLElement, true);
          } else {
            observerRef.current?.observe(entry.target);
          }
        }
      },
      { threshold: 0 }
    );

    for (const section of sections) {
      initialObserver.observe(section);
    }

    const observer = observerRef.current;
    const timeouts = timeoutRefsRef.current;
    const processed = processedRef.current;

    return () => {
      observer?.disconnect();
      initialObserver.disconnect();
      for (const timeoutId of timeouts) {
        clearTimeout(timeoutId);
      }
      timeouts.clear();
      processed.clear();
    };
  }, []);
}
