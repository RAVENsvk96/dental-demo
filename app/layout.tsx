import { company } from "@/content/company";
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

export const metadata: Metadata = {
  metadataBase: new URL(company.website),

  title: {
    default: `${company.name} | Moderná zubná ambulancia v Nitre`,
    template: `%s | ${company.name}`,
  },

  description: company.description,

  keywords: [
    "zubná ambulancia",
    "zubár Nitra",
    "stomatológ Nitra",
    "dentálna hygiena",
    "estetická stomatológia",
    "implantológia",
    "ošetrenie zubného kazu",
    "detská stomatológia",
    "preventívna prehliadka",
  ],

  applicationName: company.name,

  category: "Healthcare",

  authors: [
    {
      name: company.name,
    },
  ],

  openGraph: {
    title: `${company.name} | Moderná zubná ambulancia v Nitre`,
    description: company.description,
    url: company.website,
    siteName: company.name,
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: company.ogImage,
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Moderná zubná ambulancia v Nitre`,
    description: company.description,
    images: [company.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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