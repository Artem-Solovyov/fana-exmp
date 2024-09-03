import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import Head from "next/head";

const grotesk = localFont({
  src: [
    {
      path: "/fonts/ClashGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/ClashGrotesk-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--second-family",
});
const sfpro = localFont({
  src: [
    {
      path: "/fonts/SFProText-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/SFProText-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/SFProText-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/SFProText-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/SFProText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/SFProText-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-family",
});
const TITLE = "FANA - AI Community Support for Web3, Fintech & Ecommerce";

const METADATA_DESCRIPTION =
  "Empower your Support Team with AI bots across all channels. FANA.AI integrates to your existing tools and learns from your knowledge base.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fana.ai/"),
  title: TITLE,
  description: METADATA_DESCRIPTION,
  applicationName: "FANA AI",
  keywords: ["FANA AI", "AI", "AI Community", "Web3", "Fintech", "Ecommerce"],
  openGraph: {
    title: TITLE,
    description: METADATA_DESCRIPTION,
    url: new URL("https://www.fana.ai/"),
    siteName: "FANA AI",
    type: "website",
    locale: "en_US",
    images: ["/og.jpg"],
  },
  twitter: {
    title: TITLE,
    description: METADATA_DESCRIPTION,
    site: "FANA AI",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${grotesk.variable} ${sfpro.variable}`} lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
