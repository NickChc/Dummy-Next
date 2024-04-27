import { TUser } from "@/@types/general";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../../../i18n.config";

interface UserCardProps {
  user: TUser;
  translations: any;
  lang: Locale;
}

export function UserCard({ user, translations, lang }: UserCardProps) {
  return (
    <Link href={`/${lang}/users/${user.id}`}>
      <Card className="hover:shadow-md hover:shadow-slate-300 hover:scale-105 duration-150 cursorpointer">
        <CardHeader>
          <Image
            src={user.image}
            alt={`Image of ${user.username}`}
            width={200}
            height={200}
          />
          <h2 className="text-center self-center font-semibold">
            {translations.username} - {user.username}
          </h2>
        </CardHeader>
        <CardContent>
          <h3>
            {translations.name} - {user.firstName}
          </h3>
          <h3>
            {translations.surname} - {user.lastName}
          </h3>
          <h3>
            {translations.age} - {user.age}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
