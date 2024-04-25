export async function getPosts(userId?: number, tagName?: string) {
  try {
    let response;
    if (userId) {
      response = await fetch(
        `${process.env.DUMMY_API_URL}/posts/user/${userId}`
      );
    } else if (tagName) {
      response = await fetch(`${process.env.DUMMY_API_URL}/posts/search?q=${tagName}`);
    } else {
      response = await fetch(`${process.env.DUMMY_API_URL}/posts?limit=100`);
    }
    const data = await response.json();
    return data.posts;
  } catch (error: any) {
    console.log(error.message);
  }
}
