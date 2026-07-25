import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: {
      default: "API Reference",
      template: "%s | API Reference",
    },
    description: "A clear, searchable reference for building with the API.",
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: "API Reference",
      description: "React · Vite · TypeScript · Markdoc",
      images: [{ url: new URL("/og.png", base), width: 1728, height: 908 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "API Reference",
      description: "React · Vite · TypeScript · Markdoc",
      images: [new URL("/og.png", base)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
