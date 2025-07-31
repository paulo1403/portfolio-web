import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "../globals.css";
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
  title: {
    default: "Paulo Llanos | Full Stack Developer & Automation Expert",
    template: "%s | Paulo Llanos",
  },
  description:
    "Desarrollador Full Stack con +4 años de experiencia en React, Next.js, Node.js, Python y AWS. Especialista en automatizaciones, GraphQL y .NET para soluciones web escalables e innovadoras.",
  keywords: [
    "Paulo Llanos",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Automatizaciones",
    "GraphQL",
    ".NET",
    "UnifyApps",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Lima",
    "Perú",
    "Belcorp",
  ],
  authors: [{ name: "Paulo Llanos", url: "https://paulollanos.dev" }],
  creator: "Paulo Llanos",
  publisher: "Paulo Llanos",
  metadataBase: new URL("https://paulollanos.dev"),
  alternates: {
    canonical: "https://paulollanos.dev",
  },
  icons: {
    icon: [
      { url: "/icon-terminal.png", type: "image/png" },
      { url: "/icon-terminal-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-terminal-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        url: "/icon-terminal-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://paulollanos.dev",
    title: "Paulo Llanos | Full Stack Developer & Automation Expert",
    description:
      "Desarrollador Full Stack con +4 años de experiencia en React, Next.js, Node.js, Python y AWS. Especialista en automatizaciones, GraphQL y .NET para soluciones web escalables e innovadoras.",
    siteName: "Portfolio Paulo Llanos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paulo Llanos - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Llanos | Full Stack Developer & Automation Expert",
    description:
      "Desarrollador Full Stack con +4 años de experiencia en React, Next.js, Node.js, Python y AWS. Especialista en automatizaciones, GraphQL y .NET para soluciones web escalables e innovadoras.",
    creator: "@your_twitter_handle",
    images: ["/og-image.png"],
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
