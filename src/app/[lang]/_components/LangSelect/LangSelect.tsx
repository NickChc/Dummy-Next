"use client";

import { Locale, i18n } from "../../../../../i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LangSelectProps {
  lang: Locale;
}

export function LangSelect({ lang }: LangSelectProps) {
  const pathname = usePathname();

  function redirectPathname(locale: string) {
    if (pathname == null) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-semibold bg-black dark:bg-blue-900 text-white rounded-lg p-2">
        {lang.toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-1">
        {i18n.locales.map((loc) => {
          return (
            <DropdownMenuItem
              key={loc}
              asChild
              className={
                lang === loc
                  ? "opacity-50 cursor-default"
                  : "hover:opacity-70 cursor-pointer"
              }
            >
              <Link
                href={redirectPathname(loc)}
                className={`ml-3 font-semibold`}
              >
                {loc}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
