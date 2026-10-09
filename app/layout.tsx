import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-pick-alen317.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "AI Pick | Find the right AI tool for the job",
    template: "%s",
  },
  description: "Discover, compare, and choose AI tools for creators, freelancers, and small businesses.",
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "AI Pick",
    title: "AI Pick | Find the right AI tool for the job",
    description: "Discover, compare, and choose AI tools for creators, freelancers, and small businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "AI Pick | Find the right AI tool for the job",
    description: "Discover, compare, and choose AI tools for creators, freelancers, and small businesses.",
  },
  verification: {
    google: "PjjS53B6TMiRv7Vpqr8Jy_o6lNp42wq3hASRoaKJIdU",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteUrl + "/#organization",
      name: "AI Pick",
      url: siteUrl,
      description: "Independent AI tool discovery and comparison for creators, freelancers, and small businesses.",
    },
    {
      "@type": "WebSite",
      "@id": siteUrl + "/#website",
      name: "AI Pick",
      url: siteUrl,
      description: "Find the right AI tool for the job.",
      publisher: { "@id": siteUrl + "/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
