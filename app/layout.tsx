import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/layout/LenisProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quild.in"),
  title: {
    default: "Quild | The Builder Community",
    template: "%s | Quild",
  },
  description:
    "Quild is a selective community for students, founders, and engineers building with AI.",
  openGraph: {
    title: "Quild | The Builder Community",
    description:
      "Quild is a selective community for students, founders, and engineers building with AI.",
    url: "https://quild.in",
    siteName: "Quild",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Quild Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quild | The Builder Community",
    description:
      "Quild is a selective community for students, founders, and engineers building with AI.",
    images: ["/hero.png"],
    creator: "@QuildGlobal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link id="favicon" rel="icon" href="/quild.svg" type="image/svg+xml" />
        <Script id="dynamic-favicon" strategy="afterInteractive">{`
(() => {
  const ICON_URL = '/quild.svg';
  const LINK_ID = 'favicon';
  let lastObjectUrl = null;

  const getInk = () => {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
      return v || '#000000';
    } catch {
      return '#000000';
    }
  };

  const isDarkTheme = () => {
    const hasClassDark = document.documentElement.classList.contains('dark');
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDark = mq ? mq.matches : false;
    return hasClassDark || prefersDark;
  };

  const setFaviconHref = (href) => {
    let link = document.getElementById(LINK_ID);
    if (!(link instanceof HTMLLinkElement)) {
      link = document.createElement('link');
      link.id = LINK_ID;
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      document.head.appendChild(link);
    }
    link.href = href;
  };

  const update = async () => {
    const fill = isDarkTheme() ? '#FFFFFF' : getInk();
    try {
      const res = await fetch(ICON_URL, { cache: 'no-store' });
      if (!res.ok) return;
      let svg = await res.text();

      // Recolor common white fills in the source SVG.
      svg = svg.replace(/fill=\"(white|#fff|#ffffff)\"/gi, 'fill="' + fill + '"');

      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const objectUrl = URL.createObjectURL(blob);
      setFaviconHref(objectUrl);

      if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl);
      lastObjectUrl = objectUrl;
    } catch {
      // Fall back to the static icon.
      setFaviconHref(ICON_URL);
    }
  };

  // Initial paint.
  update();

  // React to OS theme changes.
  const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if (mq) {
    const onChange = () => update();
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
  }

  // React to app-driven class changes (e.g. toggling 'dark' on <html>).
  const obs = new MutationObserver(() => update());
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
})();
        `}</Script>
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
