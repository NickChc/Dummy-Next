export async function getPosts(
  userId?: number,
  tagName?: string,
  postId?: number
) {
  try {
    let response;
    if (userId) {
      response = await fetch(
        `${process.env.DUMMY_API_URL}/posts/user/${userId}`
      );
    } else if (tagName) {
      response = await fetch(
        `${process.env.DUMMY_API_URL}/posts/search?q=${tagName}`
      );
    } else if (postId) {
      response = await fetch(`${process.env.DUMMY_API_URL}/posts/${postId}`);
    } else {
      response = await fetch(`${process.env.DUMMY_API_URL}/posts?limit=100`);
    }
    const data = await response.json();
    return postId ? data : data.posts;
  } catch (error: any) {
    console.log(error.message);
  }
}
