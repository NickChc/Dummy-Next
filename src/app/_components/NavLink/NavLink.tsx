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
      className={`font-bold text-3xl ${
        pathname.includes(path) && "opacity-50"
      }`}
      href={path}
    >
      {title}
    </Link>
  );
}
