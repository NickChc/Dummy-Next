import { TUser } from "@/@types/general";
import { PageHeader } from "@/app/[lang]/_components/PageHeader";
import { UserCard } from "@/app/[lang]/users/_components/UserCard";
import { Suspense } from "react";
import { UserCardSkeleton } from "./_components/UserCard/UserCardSkeleton";
import { getUsers } from "@/app/[lang]/_api/getUsers";
import { Locale } from "../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface UsersPageProps {
  params: {
    lang: Locale;
  };
}

export default async function UsersPage({ params }: UsersPageProps) {
  const { page, components } = await getDictionaries(params.lang);

  return (
    <>
      <PageHeader>{page.users.users}</PageHeader>
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
          <UsersSuspense
            translations={components.userCard}
            lang={params.lang}
          />
        </Suspense>
      </div>
    </>
  );
}

interface UsersSuspenseProsp {
  translations: any;
  lang: Locale;
}

async function UsersSuspense({ translations, lang }: UsersSuspenseProsp) {
  const users: TUser[] = await getUsers();

  return users.map((user) => {
    return (
      <UserCard
        key={user.id}
        user={user}
        translations={translations}
        lang={lang}
      />
    );
  });
}
