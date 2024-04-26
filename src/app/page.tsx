import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "./_components/PageHeader";

export default function HomePage() {
  return (
    <>
      <PageHeader>HOME</PageHeader>
      <Card className="max-w-[80%] mt-14">
        <CardHeader>
          <CardTitle>Welcome to Dummy Next</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            This app is my introduction to next.js It showcases general features
            of Next like SSR and routing. This is me just getting started with
            next. So, there will be more :D
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
