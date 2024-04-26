export async function getPosts(
  userId?: number,
  keyWord?: string,
  postId?: number
) {
  try {
    let response;
    if (userId) {
      response = await fetch(
        `${process.env.DUMMY_API_URL}/posts/user/${userId}`
      );
    } else if (keyWord) {
      response = await fetch(
        `${process.env.DUMMY_API_URL}/posts/search?q=${keyWord}`
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
