import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Boxerhof | Premium Hundepension in Bad Oeynhausen",
  description:
    "Kein Käfig. Kein Zwinger. Nur Zuhause. Liebevolle Hundepension auf 4.000 qm in Bad Oeynhausen. Seit 2009.",
  keywords: [
    "Hundepension",
    "Bad Oeynhausen",
    "Hundebetreuung",
    "Boxerhof",
    "Premium Hundepension",
  ],
  authors: [{ name: "Manuela Büscher" }],
  openGraph: {
    title: "Boxerhof | Premium Hundepension",
    description: "Kein Käfig. Kein Zwinger. Nur Zuhause.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5ecd6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
