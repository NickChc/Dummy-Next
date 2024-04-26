import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HomeCardProps {
  title: string;
  description: string;
}

export function HomeCard({ title, description }: HomeCardProps) {
  return (
    <Card className="max-w-[60%] mt-9 text-left even:self-start odd:self-end ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
