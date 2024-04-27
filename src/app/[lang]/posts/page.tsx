import { PageHeader } from "@/app/[lang]/_components/PageHeader";
import { TPost, TUser } from "@/@types/general";
import { PostCard, PostCardSkeleton } from "@/app/[lang]/_components/PostCard";
import { getUsers } from "@/app/[lang]/_api/getUsers";
import { getPosts } from "@/app/[lang]/_api/getPosts";
import { Suspense } from "react";
import { PostsSearchbar } from "@/app/[lang]/posts/_components/PostsSearchbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Locale } from "../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface HomeProps {
  searchParams: {
    search: string;
  };
  params: {
    lang: Locale;
  };
}

export default async function Home({
  searchParams,
  params: { lang },
}: HomeProps) {
  const { page } = await getDictionaries(lang);

  return (
    <>
      <PageHeader>{page.posts.posts}</PageHeader>
      <PostsSearchbar lang={lang} text={page.posts.search} />
      {searchParams.search && (
        <Link
          href={`/${lang}/posts`}
          className="font-bold text-2xl underline hover:opacity-50 duration-75 flex items-end whitespace-nowrap gap-x-3"
        >
          <span>
            <ArrowLeft />
          </span>
          {page.posts.backToAllPosts}
        </Link>
      )}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4 py-9 min-w-full">
        <Suspense
          fallback={
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
          }
        >
          <PostsSuspense keyWord={searchParams?.search} lang={lang} />
        </Suspense>
      </div>
    </>
  );
}

interface PostsSuspenseProps {
  keyWord?: string;
  lang: Locale;
}

async function PostsSuspense({ keyWord, lang }: PostsSuspenseProps) {
  const posts: TPost[] = await getPosts(undefined, keyWord);
  const users: TUser[] = await getUsers();

  if (keyWord && posts.length === 0) {
    return (
      <div className="absolute top-0 right-0 left-0 bottom-0">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl sm:whitespace-nowrap mx-auto text-center mt-14">
          {lang === "en"
            ? `No posts with keyWord ${keyWord} found!`
            : `პოსტი საკვანძო სიტყვა ${keyWord} - ით არ მოიძებნა`}
        </h1>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.userId)!;
        return <PostCard key={post.id} post={post} user={user} lang={lang} />;
      })}
    </>
  );
}
