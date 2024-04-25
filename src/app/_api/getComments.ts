export async function getComments(postId: number) {
  try {
    const response = await fetch(
      `${process.env.DUMMY_API_URL}/comments/post/${postId}`
    );
    const data = await response.json();
    return data.comments;
  } catch (error: any) {
    console.log(error.message);
  }
}
