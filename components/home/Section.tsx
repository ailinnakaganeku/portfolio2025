import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  ariaLabel?: string;
  className?: string;
  headerClassName?: string;
  lineClassName?: string;
}> &
  Omit<HTMLAttributes<HTMLElement>, "title" | "children" | "className">;

export function Section({
  id,
  title,
  children,
  ariaLabel,
  className,
  headerClassName,
  lineClassName,
  ...sectionProps
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("animate-on-scroll", className)}
      {...sectionProps}
    >
      <h2
        className={cn(
          "text-[rgb(var(--foreground-rgb))] text-lg font-bold tracking-widest mb-2",
          headerClassName,
        )}
      >
        {title}
      </h2>
      <div
        className={cn("jp-line", lineClassName)}
        aria-hidden="true"
        role="presentation"
      />
      {children}
    </section>
  );
}

