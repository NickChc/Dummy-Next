import { TComment, TPost, TUser } from "@/@types/general";
import { getPosts } from "@/app/[lang]/_api/getPosts";
import { PostCard } from "@/app/[lang]/_components/PostCard";
import { getUsers } from "@/app/[lang]/_api/getUsers";
import { getComments } from "@/app/[lang]/_api/getComments";
import { CommentCard } from "@/app/[lang]/_components/CommentCard";
import { Locale } from "../../../../../../i18n.config";

interface PostPageProps {
  params: {
    lang: Locale;
    postId: number;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post: TPost = await getPosts(undefined, undefined, params.postId);
  const user: TUser = await getUsers(post.userId);
  const comments: TComment[] = await getComments(params.postId);

  return (
    <div className="w-[80%] flex flex-col bg-white dark:bg-blue-900 rounded-b-lg overflow-hidden mb-6">
      <PostCard post={post} user={user} lang={params.lang} />
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
