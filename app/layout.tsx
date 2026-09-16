import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://arthursirjacobs.com";
const title = "Arthur Sirjacobs — Houdini FX Artist";
const description =
  "Arthur Sirjacobs is a Houdini FX Artist based in Vancouver, BC, Canada. Find his reviews, portfolio, and tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Arthur Sirjacobs", url: siteUrl }],
  creator: "Arthur Sirjacobs",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    firstName: "Arthur",
    lastName: "Sirjacobs",
    title,
    description,
    url: siteUrl,
    siteName: "Arthur Sirjacobs",
    images: [{ url: "/avatar3.webp", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/avatar3.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
