import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eleveskinwellness.com"),
  title: {
    default: "Élevé Skin & Wellness (ESW) — Your Health. Elevated.",
    template: "%s — Élevé Skin & Wellness (ESW)",
  },
  description:
    "Mobile aesthetics delivered to you — Botox, filler, B-12, and lipo shots — plus physician-directed peptide protocols and membership access to partner longevity practices. Based in Plano, TX.",
  openGraph: {
    title: "Élevé Skin & Wellness (ESW)",
    description: "Your Health. Elevated.",
    siteName: "Élevé Skin & Wellness (ESW)",
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
