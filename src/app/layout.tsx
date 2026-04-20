import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetunji Adeniran | AI Product Builder & Financial Intelligence Specialist — kingadetunji.dev",
  description:
    "Adetunji Adeniran is an AI Product Builder and Financial Intelligence Specialist based in Ontario, Canada. Founder of CentWiseAI — helping GTA residents and organizations find smarter financial outcomes through AI-powered systems.",
  keywords: [
    "AI product builder Ontario",
    "financial intelligence specialist Toronto",
    "CentWiseAI GTA savings app",
    "AI consulting Toronto",
    "fintech MVP developer Ontario",
    "AI-powered financial assistant Canada",
  ],
  authors: [{ name: "Adetunji Adeniran" }],
  creator: "Adetunji Adeniran",
  openGraph: {
    type: "website",
    title: "Adetunji Adeniran · Building AI That Saves Money",
    description:
      "Founder of CentWiseAI. I build AI products and financial intelligence systems for startups and community organizations in Ontario. Let's build something impactful.",
    siteName: "kingadetunji.dev",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adetunji Adeniran · Building AI That Saves Money",
    description:
      "Founder of CentWiseAI. AI Product Builder & Financial Intelligence Specialist in Ontario, Canada.",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
