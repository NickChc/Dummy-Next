import { TPost, TUser } from "@/@types/general";
import { getUsers } from "@/app/[lang]/_api/getUsers";
import { PostCard } from "@/app/[lang]/_components/PostCard";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPosts } from "@/app/[lang]/_api/getPosts";
import { Locale } from "../../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface UserPageProps {
  params: {
    userId: number;
    lang: Locale;
  };
}

const dateFormatter = new Intl.DateTimeFormat("en");

export default async function UserPage({ params }: UserPageProps) {
  const user: TUser = await getUsers(params.userId);
  const { page } = await getDictionaries(params.lang);

  if (user == null) return notFound();

  const userPosts: TPost[] = await getPosts(user.id);

  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch gap-x-3 my-9 w-full md:justify-center">
        <div className="relative w-[50%] sm:w-auto sm:min-w-80 aspect-square z-0 overflow-hidden self-center">
          <Image
            src={user.image}
            alt={`Image of ${user.username}`}
            fill
            sizes="100"
          />
        </div>
        <div className="text-center sm:text-left">
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.fullName} -{" "}
              {`${user.firstName} ${user.maidenName} ${user.lastName}`}
            </h3>
          </div>
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.username} - {user.username}
            </h3>
          </div>
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.age} - {user.age}
            </h3>
          </div>
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.email} - {user.email}
            </h3>
          </div>
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.phone} - {user.phone}
            </h3>
          </div>
          <div className="border-solid border border-black border-x-0 border-t-0 first:border-t-0 last:border-b-0 p-1 px-2">
            <h3 className="font-semibold truncate text-md sm:text-xl md:text-2xl">
              {page.postId.livesIn} - {user.address.city}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/4 flex flex-col gap-y-4 pb-14">
        <hr className="w-3/4 self-center my-9" />
        {userPosts.length === 0 ? (
          <h1 className="self-center whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-semibold">
            {user.username} {page.postId.noPostsYet}.
          </h1>
        ) : (
          userPosts.map((post) => {
            return (
              <PostCard
                key={post.id}
                post={post}
                user={user}
                lang={params.lang}
              />
            );
          })
        )}
      </div>
    </>
  );
}
