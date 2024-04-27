"use client";

import { i18n } from "../../../../../i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LangSelect() {
  const pathname = usePathname();

  function redirectPathname(locale: string) {
    if (pathname == null) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((loc) => {
        return (
          <li key={loc}>
            <Link
              href={redirectPathname(loc)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {loc}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
