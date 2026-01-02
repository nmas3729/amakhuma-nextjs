import type { Metadata } from "next";
import { Niramit } from "next/font/google";
import "./globals.css";

const niramit = Niramit({
  variable: "--font-niramit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amakhuma - Leading Mining Company",
  description:
    "Leading mining solutions across Africa and beyond — powered by innovation, integrity, and responsible growth.",
  keywords: [
    "mining",
    "Amakhuma",
    "mining solutions",
    "sustainable mining",
    "mining services",
    "Africa mining",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${niramit.variable} antialiased`}
        style={{ fontFamily: 'var(--font-niramit), "Niramit", Helvetica, Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
