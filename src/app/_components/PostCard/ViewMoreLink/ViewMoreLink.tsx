"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ViewMoreLinkProps {
  postId: number;
}

export function ViewMoreLink({ postId }: ViewMoreLinkProps) {
  const pathname = usePathname();

  if (pathname.endsWith(postId.toString())) return null;

  return (
    <Link
      href={`/posts/post/${postId}`}
      className="whitespace-nowrap underline"
    >
      View More
    </Link>
  );
}
