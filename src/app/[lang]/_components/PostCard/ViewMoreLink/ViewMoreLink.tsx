"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "../../../../../../i18n.config";

interface ViewMoreLinkProps {
  postId: number;
  lang: Locale;
  text: string;
}

export function ViewMoreLink({ postId, lang, text }: ViewMoreLinkProps) {
  const pathname = usePathname();

  if (pathname.endsWith(postId.toString())) return null;

  return (
    <Link
      href={`/${lang}/posts/post/${postId}`}
      className="whitespace-nowrap underline"
    >
      {text}
    </Link>
  );
}
