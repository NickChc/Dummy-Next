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
    <Card>
      <div className="flex-grow min-h-80 h-[80%]">
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
        <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-4">
          <LikeButton reactions={post.reactions} postId={post.id} />
          <div className="flex gap-x-3 truncate">
            {post.tags.map((tag) => {
              return (
                <Link key={tag} href={`/posts/${tag}`} className="underline">
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </CardFooter>
      <div className="w-full flex px-6 justify-end">
        <ViewMoreLink postId={post.id} />
      </div>
    </Card>
  );
}
