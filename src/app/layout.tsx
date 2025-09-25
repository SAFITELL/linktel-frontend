"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import defaultSEOConfig from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Nunito supports these weights
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/logo.ico" />
        <title>LinkTel</title>
      </head>
      <body
        className={`${nunito.variable} antialiased`}
      >
        <DefaultSeo {...defaultSEOConfig} />
        {children}
      </body>
    </html>
  );
}
