import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { CursorSpotlight } from "@/components/effects/CursorSpotlight";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | Web Developer & AI Engineer`,
  description: personalInfo.subheadline,
  keywords: [
    "Christian Suguitan",
    "Web Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "AI Agent Developer",
    "Technical Support",
    "Philippines",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.name} | Web Developer & AI Engineer`,
    description: personalInfo.subheadline,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Web Developer & AI Engineer`,
    description: personalInfo.subheadline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-space-void font-sans text-brand-white antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <CursorSpotlight />
          <NoiseOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
