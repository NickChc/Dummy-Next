import { TPost, TUser } from "@/@types/general";
import { getPosts } from "@/app/[lang]/_api/getPosts";
import { getUsers } from "@/app/[lang]/_api/getUsers";
import { PageHeader } from "@/app/[lang]/_components/PageHeader";
import { PostCard, PostCardSkeleton } from "@/app/[lang]/_components/PostCard";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Locale } from "../../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface PostTagPageProps {
  params: {
    tagName: string;
    lang: Locale;
  };
}

export default async function TagNamePosts({ params }: PostTagPageProps) {
  const { page } = await getDictionaries(params.lang);

  return (
    <>
      <PageHeader>
        {page.tagNamePosts.postsAbout} - {params.tagName}
      </PageHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4 py-9 min-w-full">
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
          <TagNamePostsSuspense tagName={params.tagName} lang={params.lang} />
        </Suspense>
      </div>
    </>
  );
}

interface TagNamePostsSuspenseProps {
  tagName: string;
  lang: Locale;
}

async function TagNamePostsSuspense({
  tagName,
  lang,
}: TagNamePostsSuspenseProps) {
  const posts: TPost[] = await getPosts(undefined);
  const users: TUser[] = await getUsers();

  const filteredPosts = posts.filter((post) => post.tags.includes(tagName));

  if (filteredPosts.length < 1) return notFound();

  return filteredPosts.map((post) => {
    const user = users.find((user) => user.id === post.userId)!;
    return <PostCard key={post.id} post={post} user={user} lang={lang} />;
  });
}
