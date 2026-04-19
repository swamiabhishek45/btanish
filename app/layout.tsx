import type { Metadata } from "next";

import { SiteShell } from "@/components/site-chrome";
import { brand } from "@/lib/brand";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.shortName} | Beauty Salon in Wakad & Pimple Gurav`,
    template: `%s | ${brand.shortName}`,
  },
  description:
    "B Tanish Salon offers hair, skincare, nail care, and beauty services in Wakad and Pimple Gurav with hygienic service, personalised consultation, and real transformations.",
  openGraph: {
    title: brand.name,
    description:
      "Explore the B Tanish Salon experience, real gallery work, transformations, services, and branch details for Wakad and Pimple Gurav.",
    siteName: brand.name,
    type: "website",
    images: [{ url: brand.backgroundImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
