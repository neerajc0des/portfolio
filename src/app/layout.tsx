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
      </body>
    </html>
  );
}
