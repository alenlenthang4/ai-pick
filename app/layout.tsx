import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Pick | Find the right AI tool for the job",
  description: "Discover, compare, and choose AI tools for creators, freelancers, and small businesses.",
  metadataBase: new URL("https://ai-pick-alen317.vercel.app"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}