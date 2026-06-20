import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paulo Llanos | Full Stack, Mobile & AI Developer",
    template: "%s | Paulo Llanos",
  },
  description:
    "Software Developer y Tech Lead con +5 años de experiencia. React, Next.js, Kotlin, Android, AI Agents. Líder en Belcorp.",
  keywords: [
    "Paulo Llanos", "Full Stack Developer", "Mobile Developer", "Kotlin",
    "Android", "React", "Next.js", "Node.js", "Python", "AI Agents",
    "Tech Lead", "Software Engineer", "Portfolio", "Lima", "Perú", "Belcorp",
  ],
  authors: [{ name: "Paulo Llanos", url: "https://paulollanos.dev" }],
  creator: "Paulo Llanos",
  metadataBase: new URL("https://paulo-llanos.vercel.app"),
  alternates: { canonical: "https://paulo-llanos.vercel.app" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-tux-64.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-tux-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://paulo-llanos.vercel.app",
    title: "Paulo Llanos | Full Stack, Mobile & AI Developer",
    description: "Software Developer y Tech Lead con +5 años. React, Kotlin, Android, AI Agents. Líder en Belcorp.",
    siteName: "Portfolio Paulo Llanos",
    images: [
      { url: "https://paulo-llanos.vercel.app/og-image.png", width: 1200, height: 630, alt: "Paulo Llanos — Developer" },
      { url: "https://paulo-llanos.vercel.app/avatar.jpeg", width: 400, height: 400, alt: "Paulo Llanos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Llanos | Full Stack, Mobile & AI Developer",
    description: "Software Developer y Tech Lead con +5 años. React, Kotlin, Android, AI Agents.",
    creator: "@paulo1403",
    images: ["https://paulo-llanos.vercel.app/og-image.png"],
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
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-tux-180.png" />
      </head>
      <body className={`${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
