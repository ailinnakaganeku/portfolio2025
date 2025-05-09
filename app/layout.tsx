import "./globals.css";
import type { Metadata } from "next";
import {
  Merriweather,
  Noto_Sans_JP,
} from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Ailin - Senior Art Director & Graphic Designer",
  description:
    "Portfolio of Ailin, an accomplished Art Director and Graphic Designer specializing in brand identity, digital design, and creative direction.",
  keywords:
    "Art Director, Graphic Designer, Brand Identity, Digital Design, Creative Direction, Portfolio",
  openGraph: {
    title: "Ailin - Senior Art Director & Graphic Designer",
    description:
      "Portfolio of Ailin, an accomplished Art Director and Graphic Designer specializing in brand identity, digital design, and creative direction.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
