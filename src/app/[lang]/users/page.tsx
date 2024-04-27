import { TUser } from "@/@types/general";
import { PageHeader } from "@/app/[lang]/_components/PageHeader";
import { UserCard } from "@/app/[lang]/users/_components/UserCard";
import { Suspense } from "react";
import { UserCardSkeleton } from "./_components/UserCard/UserCardSkeleton";
import { getUsers } from "@/app/[lang]/_api/getUsers";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <PageHeader>USERS</PageHeader>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-9 my-14 px-6">
        <Suspense
          fallback={
            <>
              <UserCardSkeleton />
              <UserCardSkeleton />
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
