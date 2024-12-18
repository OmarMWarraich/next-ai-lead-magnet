import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "@/context/Theme";

import LandingPageFooter from "./(landing)/components/LandingPageFooter";
import LandingPageNavbar from "./(landing)/components/LandingPageNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Lead Magnet",
  description:
    "A powerful AI Lead Magnet with Next 15, TypeScript, React, Stripe, ChatGPT, Tailwind, and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LandingPageNavbar />
            {children}
            <LandingPageFooter />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
