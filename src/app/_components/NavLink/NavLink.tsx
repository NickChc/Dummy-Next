"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  path: string;
}

export function NavLink({ title, path }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`font-bold text-lg sm:text-3xl ${
        pathname.endsWith(path) && "opacity-50 cursor-default"
      }`}
      href={path}
    >
      {title}
    </Link>
  );
}
