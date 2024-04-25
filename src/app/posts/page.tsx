import { PageHeader } from "@/app/_components/PageHeader";
import { TPost, TUser } from "@/@types/general";
import { PostCard } from "@/app/_components/PostCard";

async function getPosts() {
  try {
    const response = await fetch(
      `${process.env.DUMMY_API_URL}/posts?limit=100`
    );
    const data = await response.json();
    console.log(data.posts[0]);
    return data.posts;
  } catch (error: any) {
    console.log(error.message);
  }
}

async function getUsers() {
  try {
    const response = await fetch(
      `${process.env.DUMMY_API_URL}/users?limit=100`
    );
    const data = await response.json();
    return data.users;
  } catch (error: any) {
    console.log(error.message);
  }
}

export default async function Home() {
  const posts: TPost[] = await getPosts();
  const users: TUser[] = await getUsers();

  const topPosts = posts
    .sort((a, b) => b.reactions - a.reactions)
    .slice(10, 20);

  return (
    <>
      <PageHeader>HOME</PageHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4 py-9">
        {topPosts.map((post) => {
          const user = users.find((user) => user.id === post.userId)!;
          return <PostCard key={post.id} post={post} user={user} />;
        })}
      </div>
    </>
  );
}
