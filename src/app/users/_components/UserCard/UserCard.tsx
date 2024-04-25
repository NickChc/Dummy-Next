import { TUser } from "@/@types/general";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  user: TUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`}>
      <Card className="hover:shadow-md hover:shadow-slate-300 hover:scale-105 duration-150 cursorpointer">
        <CardHeader>
          <Image
            src={user.image}
            alt={`Image of ${user.username}`}
            width={200}
            height={200}
          />
          <h2 className="text-center self-center font-semibold">
            Username - {user.username}
          </h2>
        </CardHeader>
        <CardContent>
          <h3>Name - {user.firstName}</h3>
          <h3>Surname - {user.lastName}</h3>
          <h3>Age - {user.age}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
