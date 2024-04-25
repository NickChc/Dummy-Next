import { PageHeader } from "@/app/_components/PageHeader";
import { TPost, TUser } from "@/@types/general";
import { PostCard, PostCardSkeleton } from "@/app/_components/PostCard";
import { getUsers } from "@/app/_api/getUsers";
import { getPosts } from "@/app/_api/getPosts";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <PageHeader>HOME</PageHeader>
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
          <PostsSuspense />
        </Suspense>
      </div>
    </>
  );
}

async function PostsSuspense() {
  const posts: TPost[] = await getPosts();
  const users: TUser[] = await getUsers();

  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId)!;
    return <PostCard key={post.id} post={post} user={user} />;
  });
}
