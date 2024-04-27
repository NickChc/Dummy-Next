import { TComment } from "@/@types/general";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommentCardProps {
  comment: TComment;
}

export function CommentCard({ comment }: CommentCardProps) {
  return (
    <Card className="dark:rounded-none">
      <CardHeader>
        <CardTitle>{comment.user.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{comment.body}</p>
      </CardContent>
    </Card>
  );
}
