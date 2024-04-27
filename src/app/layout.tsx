import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Navigation } from "@/app/_components/Navigation";
import "./globals.css";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "Dummy Next",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={fontSans.variable} lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "w-full min-h-dvh flex flex-col items-center bg-blue-400 dark:bg-blue-900 text-foreground font-sans antialiased relative"
        )}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
