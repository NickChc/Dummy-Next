export async function getUsers() {
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
