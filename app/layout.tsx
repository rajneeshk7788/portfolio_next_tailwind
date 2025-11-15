import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajneesh Kushwaha - Front End Developer",
  description: "Portfolio of Rajneesh Kushwaha - Experienced Front End Developer specializing in React, Next.js, and modern web technologies",
};

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

