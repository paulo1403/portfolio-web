import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paulo Llanos - Full Stack Developer",
  description:
    "Portfolio de Paulo Llanos - Desarrollador Full Stack con 5 años de experiencia",
  keywords: [
    "developer",
    "fullstack",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
    "paulo llanos",
  ],
  authors: [{ name: "Paulo Llanos" }],
  creator: "Paulo Llanos",
  metadataBase: new URL("https://paulo-llanos.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://paulo-llanos.dev",
    title: "Paulo Llanos - Full Stack Developer",
    description:
      "Portfolio de Paulo Llanos - Desarrollador Full Stack con 5 años de experiencia",
    siteName: "Paulo Llanos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Llanos - Full Stack Developer",
    description:
      "Portfolio de Paulo Llanos - Desarrollador Full Stack con 5 años de experiencia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
