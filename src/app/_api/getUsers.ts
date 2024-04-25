export async function getUsers(userId?: number) {
  try {
    let response;
    if (userId) {
      response = await fetch(`${process.env.DUMMY_API_URL}/users/${userId}`);
    } else {
      response = await fetch(`${process.env.DUMMY_API_URL}/users?limit=100`);
    }
    const data = await response.json();
    return userId ? data : data.users;
  } catch (error: any) {
    console.log(error.message);
  }
}
