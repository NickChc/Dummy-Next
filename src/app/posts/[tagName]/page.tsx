import { TPost, TUser } from "@/@types/general";
import { getPosts } from "@/app/_api/getPosts";
import { getUsers } from "@/app/_api/getUsers";
import { PageHeader } from "@/app/_components/PageHeader";
import { PostCard, PostCardSkeleton } from "@/app/_components/PostCard";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PostTagPageProps {
  params: {
    tagName: string;
  };
}

export default function TagNamePosts({
  params: { tagName },
}: PostTagPageProps) {
  return (
    <>
      <PageHeader>POSTS ABOUT {tagName}</PageHeader>
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
          <TagNamePostsSuspense tagName={tagName} />
        </Suspense>
      </div>
    </>
  );
}

interface TagNamePostsSuspenseProps {
  tagName: string;
}

async function TagNamePostsSuspense({ tagName }: TagNamePostsSuspenseProps) {
  const posts: TPost[] = await getPosts(undefined);
  const users: TUser[] = await getUsers();

  const filteredPosts = posts.filter((post) => post.tags.includes(tagName));

  if (filteredPosts.length < 1) return notFound();

  return filteredPosts.map((post) => {
    const user = users.find((user) => user.id === post.userId)!;
    return <PostCard key={post.id} post={post} user={user} />;
  });
}
