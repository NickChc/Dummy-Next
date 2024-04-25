export async function getPosts() {
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
