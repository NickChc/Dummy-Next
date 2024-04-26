import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HomeCardProps {
  title: string;
  description: string;
  attachment?: string;
}

export function HomeCard({ title, description, attachment }: HomeCardProps) {
  return (
    <Card className="max-w-[60%] mt-9 text-left even:self-start odd:self-end ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
      {attachment && (
        <CardFooter className="flex justify-end gap-x-2">
          Visit -{" "}
          <a
            className="text-blue-500 underline"
            href={attachment}
            target="_blank"
          >
            {attachment}
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
