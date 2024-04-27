import { TPost, TUser } from "@/@types/general";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LikeButton } from "@/app/[lang]/_components/PostCard/LikeButton";
import Link from "next/link";
import Image from "next/image";
import { ViewMoreLink } from "@/app/[lang]/_components/PostCard/ViewMoreLink";
import { Locale } from "../../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface PostCardProps {
  lang: Locale;
  post: TPost;
  user: TUser;
}

export async function PostCard({ lang, post, user }: PostCardProps) {
  const { components } = await getDictionaries(lang);
  return (
    <Card className="relative my-1">
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
              href={`/${lang}/users/${user.id}`}
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
        <div className="w-full flex items-center justify-start gap-x-3 mt-9 mb-2">
          {post.tags.map((tag) => {
            return (
              <Link
                key={tag}
                href={`/${lang}/posts/${tag}`}
                className="underline m-1"
              >
                {tag}
              </Link>
            );
          })}
        </div>
      </CardFooter>
      <div className="w-full flex px-6 justify-between absolute bottom-2 right-1">
        <LikeButton
          reactions={post.reactions}
          postId={post.id}
          text={components.likes}
        />

        <ViewMoreLink postId={post.id} lang={lang} text={components.viewMore} />
      </div>
    </Card>
  );
}
