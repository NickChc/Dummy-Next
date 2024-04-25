import { TUser } from "@/@types/general";
import { PageHeader } from "@/app/_components/PageHeader";
import { UserCard } from "@/app/users/_components/UserCard";
import { Suspense } from "react";
import { UserCardSkeleton } from "./_components/UserCard/UserCardSkeleton";

async function getUsers() {
  try {
    await wait(3000);
    const response = await fetch(
      `${process.env.DUMMY_API_URL}/users?limit=100`
    );
    const data = await response.json();
    return data.users;
  } catch (error: any) {
    console.log(error.message);
  }
}

async function wait(dur: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, dur);
  });
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <PageHeader>USERS</PageHeader>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-9 my-14 px-6">
        <Suspense
          fallback={
            <>
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
            </>
          }
        >
          <UsersSuspense />
        </Suspense>
      </div>
    </>
  );
}

async function UsersSuspense() {
  const users: TUser[] = await getUsers();

  return users.map((user) => {
    return <UserCard key={user.id} user={user} />;
  });
}
