import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic
  title: {
    default: "LinCie",
    template: "%s | LinCie",
  },
  description:
    "LinCie is a marketing undergrad and self-taught developer from Indonesia. With nearly 2 years of experience, they've built websites, a Discord bot, a mobile app, and several APIs. Specialized in TypeScript, with experience in C, Python, PHP, SQL, and Dart.",

  keywords: [
    "LinCie",
    "Full-stack Developer",
    "Marketing Undergraduate",
    "TypeScript",
    "Discord Bot",
    "Mobile App",
    "APIs",
    "Indonesia",
    "Self-taught Developer",
  ],

  authors: [{ name: "LinCie", url: "https://lincie.me" }],
  creator: "LinCie",
  publisher: "LinCie",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "LinCie | Home",
    description:
      "A marketing undergrad and self-taught developer from Indonesia. Nearly 2 years building websites, a Discord bot, a mobile app, and APIs—TypeScript specialist.",
    url: "https://lincie.me/",
    siteName: "LinCie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lincie.me/og-image.png",
        width: 512,
        height: 512,
        alt: "LinCie",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@Ke_Lin_Cie",
    creator: "@Ke_Lin_Cie",
    title: "LinCie | Home",
    description:
      "Marketing undergrad & self-taught dev from Indonesia. Built websites, a Discord bot, mobile app & APIs. TypeScript specialist.",
    images: ["https://lincie.me/twitter-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merienda.className} text-foreground bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
