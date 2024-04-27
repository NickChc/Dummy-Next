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
    <Card className="w-full sm:max-w-[60%] mt-9 text-left sm:even:self-start sm:odd:self-end ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
      {attachment && (
        <CardFooter className="flex justify-end gap-x-2 truncate max-w-full">
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
