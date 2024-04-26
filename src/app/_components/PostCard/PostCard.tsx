import { TPost, TUser } from "@/@types/general";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LikeButton } from "@/app/_components/PostCard/LikeButton";
import Link from "next/link";
import Image from "next/image";
import { ViewMoreLink } from "@/app/_components/PostCard/ViewMoreLink";

interface PostCardProps {
  post: TPost;
  user: TUser;
}

export function PostCard({ post, user }: PostCardProps) {
  return (
    <Card className="relative">
      <div className="flex-grow min-h-80 h-[75%]">
        <CardHeader>
          <div>
            <Image
              src={user.image}
              alt={`Image of ${user.username}`}
              width={50}
              height={50}
            />
            <Link
              replace
              className="underline font-semibold text-lg"
              href={`/users/${user.id}`}
            >
              {user.username}
            </Link>
          </div>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-10">{post.body}</p>
        </CardContent>
      </div>
      <CardFooter>
        <div className="w-full flex items-center justify-between mt-9">
          {post.tags.map((tag) => {
            return (
              <Link key={tag} href={`/posts/${tag}`} className="underline m-1">
                {tag}
              </Link>
            );
          })}
        </div>
      </CardFooter>
      <div className="w-full flex px-6 justify-between absolute bottom-2 right-1">
        <LikeButton reactions={post.reactions} postId={post.id} />

        <ViewMoreLink postId={post.id} />
      </div>
    </Card>
  );
}
