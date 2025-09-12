import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/seo";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale as any,
    url: siteConfig.url,
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.creator,
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        {/* Plausible Analytics (optional) */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
                  src="https://plausible.io/js/script.js"></script>
        ) : null}
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
