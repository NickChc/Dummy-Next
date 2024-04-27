import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Navigation } from "@/app/[lang]/_components/Navigation";
import "./globals.css";
import { Providers } from "@/providers";
import { Locale, i18n } from "../../../i18n.config";

export const metadata: Metadata = {
  title: "Dummy Next",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({ lang: loc }));
}

interface RootLayoutProps {
  params: { lang: Locale };
}

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutProps>) {
  return (
    <html
      className={fontSans.variable}
      lang={params.lang}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "w-full min-h-dvh flex flex-col items-center bg-blue-400 dark:bg-blue-900 text-foreground font-sans antialiased relative"
        )}
      >
        <Providers>
          <Navigation lang={params.lang} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
