import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nepal Digital Payment Company Ltd",
  description: "Corporate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Nepal Digital Payment Company Ltd</title>
      <link rel="icon" href="/ndpc_logo.jpg" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
