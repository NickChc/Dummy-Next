import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Navigation } from "@/app/_components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dummy Next",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "w-full min-h-dvh flex flex-col items-center bg-muted-foreground text-foreground font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
