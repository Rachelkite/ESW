import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eleveskinwellness.com"),
  title: {
    default: "Élevé Skin & Wellness — Your Health. Elevated.",
    template: "%s — Élevé Skin & Wellness",
  },
  description:
    "A private concierge for advanced wellness — aesthetics, longevity, and executive performance, curated through a select network of physicians and experiences.",
  openGraph: {
    title: "Élevé Skin & Wellness",
    description: "Your Health. Elevated.",
    siteName: "Élevé Skin & Wellness",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
