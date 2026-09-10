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

const siteUrl = "https://dental-demo-weld.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zubná ambulancia — demo web | Samuel Zelíska",
    template: "%s | Demo web Samuela Zelísku",
  },
  description:
    "Samostatne vytvorený ukážkový koncept webovej stránky pre zubnú ambulanciu. Nejde o skutočnú ambulanciu ani ponuku zdravotnej starostlivosti.",
  applicationName: "Demo web zubnej ambulancie",
  category: "Portfolio demo",
  authors: [{ name: "Samuel Zelíska", url: "https://www.samuelzeliska.sk" }],
  openGraph: {
    title: "Zubná ambulancia — ukážkový webový koncept",
    description:
      "Demo projekt vytvorený na prezentáciu webového dizajnu a vývoja. Nejde o skutočnú ambulanciu.",
    url: siteUrl,
    siteName: "Portfolio demo Samuela Zelísku",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ukážkový koncept webu zubnej ambulancie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubná ambulancia — ukážkový webový koncept",
    description: "Demo projekt Samuela Zelísku. Nejde o skutočnú ambulanciu.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface-dark text-white">
        {children}
      </body>
    </html>
  );
}
