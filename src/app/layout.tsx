import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";



const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, adjust as needed
});


export const metadata: Metadata = {
  title: "LinkTel",
  description: "Bridging the connectivity divided using innovation and scalable technology.",
};

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
        className={`${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
