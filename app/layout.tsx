import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Ailin Nakaganeku - Frontend Software Developer | React, TypeScript",
  description:
    "Portfolio of Ailin Nakaganeku, a Semi Senior Frontend Software Developer specializing in building high-performance, accessible, and intuitive web applications with React, TypeScript, and modern frontend technologies.",
  keywords:
    "Frontend Developer, Software Developer, React Developer, TypeScript, JavaScript, Next.js, Web Development, Portfolio, Ailin Nakaganeku, UI/UX, Web Accessibility, Cypress",
  openGraph: {
    title: "Ailin Nakaganeku - Frontend Software Developer | React, TypeScript",
    description:
      "Explore the work of Ailin Nakaganeku, focusing on creating impactful digital experiences with React, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${notoSansJP.className} ${merriweather.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
