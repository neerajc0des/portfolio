import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['200', '300', '400', '600', '700', '800'],
  subsets: ['latin'],
  variable: "--font-poppins",
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neeraj",
  description: "neerajc0des portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <div className="aura-container">
          <div className="aura-content"></div>
        </div>
        <header className="navContainer hidden md:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
          <Navbar />
        </header>
        <MobileNav />
        {children}
        <div className="footer text-center text-sm lg:text-base text-[#A1A1AA] pt-5 pb-8">
              Copyright © {new Date().getFullYear()} Neeraj <br />
              All rights reserved.
            </div>
      </body>
    </html>
  );
}
