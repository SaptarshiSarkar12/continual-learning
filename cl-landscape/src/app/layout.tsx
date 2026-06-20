import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Continual Learning Landscape",
  description:
    "An interactive guide to continual learning strategies — explore methods that help neural networks learn continuously without catastrophic forgetting. Inspired by the CNCF Landscape.",
  keywords: [
    "continual learning",
    "lifelong learning",
    "catastrophic forgetting",
    "machine learning",
    "deep learning",
    "neural networks",
  ],
  openGraph: {
    title: "Continual Learning Landscape",
    description:
      "An interactive guide to continual learning strategies for neural networks.",
    url: "https://cl-landscape.vercel.app",
    siteName: "CL Landscape",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
