import { PageHeader } from "@/app/_components/PageHeader";
import { TPost } from "@/@types/general";

export default async function Home() {
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

  const posts: TPost[] = await getPosts();

  const topPosts = posts
    .sort((a, b) => b.reactions - a.reactions)
    .slice(10, 20);

  return (
    <>
      <PageHeader>HOME</PageHeader>
      {topPosts.map((post) => {
        return (
          <h3 key={post.id}>
            {post.reactions} {"   "} <p>{post.id}</p>
          </h3>
        );
      })}
    </>
  );
}
