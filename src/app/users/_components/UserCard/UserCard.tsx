import { TUser } from "@/@types/general";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface UserCardProps {
  user: TUser;
}

export function UserCard({ user }: UserCardProps) {
    

  return (
    <Card>
      <CardHeader>
        <Image src={user.image} alt={`Image of ${user.username}`} fill />
      </CardHeader>
      <CardContent>
        <CardDescription>
          <h3>Name - {user.first_name}</h3>
          <h3>Surname - {user.last_name}</h3>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
