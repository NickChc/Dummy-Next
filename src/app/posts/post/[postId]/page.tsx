import { TComment, TPost, TUser } from "@/@types/general";
import { getPosts } from "@/app/_api/getPosts";
import { PostCard } from "@/app/_components/PostCard";
import { getUsers } from "@/app/_api/getUsers";
import { getComments } from "@/app/_api/getComments";
import { CommentCard } from "@/app/_components/CommentCard";

interface PostPageProps {
  params: {
    postId: number;
  };
}

export default async function PostPage({ params: { postId } }: PostPageProps) {
  const post: TPost = await getPosts(undefined, undefined, postId);
  const user: TUser = await getUsers(post.userId);
  const comments: TComment[] = await getComments(postId);

  return (
    <div className="w-[80%] flex flex-col bg-white">
      <PostCard post={post} user={user} />
      <hr className="w-full" />
      {comments.length === 0 ? (
        <h1>No Comments</h1>
      ) : (
        <>
          {comments.map((comm) => {
            return <CommentCard key={comm.id} comment={comm} />;
          })}
        </>
      )}
    </div>
  );
}