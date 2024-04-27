"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Locale } from "../../../../../../i18n.config";

interface PostsSearchbarProps {
  lang: Locale;
  text: string;
}

export function PostsSearchbar({ lang, text }: PostsSearchbarProps) {
  const [keyWord, setKeyWord] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch() {
    if (keyWord.trim() === "") return;
    router.push(`/${lang}/posts?search=${encodeURIComponent(keyWord)}`);
  }

  useEffect(() => {
    if (searchParams.get("search") == null) {
      setKeyWord("");
    }
  }, [searchParams]);

  return (
    <div className="flex items-stretch my-6 overflow-hidden rounded-lg">
      <Input
        className="rounded-r-none focus:outline-none focus-visible:outline-none"
        placeholder="Search Posts"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <Button className="rounded-l-none" onClick={handleSearch}>
        {text}
      </Button>
    </div>
  );
}
