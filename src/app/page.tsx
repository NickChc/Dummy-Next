import { PageHeader } from "@/app/_components/PageHeader";
import { HomeCard } from "@/app/_components/HomeCard";

export default function HomePage() {
  return (
    <div className="w-[80%] text-center flex flex-col items-center pb-9">
      <PageHeader>HOME</PageHeader>
      <HomeCard
        title="Welcome to Dummy Next"
        description="This app is my introduction to next.js It showcases general features
            of Next like SSR and routing. This is me just getting started with
            next. So, there will be more :D"
      />
      <HomeCard
        attachment="https://dummyjson.com"
        title="Features"
        description="This app simply displays different data from dummyjson free mock API. To be precise, It uses posts, users and comments, connects them and offers dynamic routes for users and posts. Also you can search posts by their text, load posts by specific tag names by clicking on them, etc."
      />
      <HomeCard
        title="Why I made this"
        description="Well, I made this app simply to train myself in next.js practice. I used layouts, error pages, dynamic routes, params and searchParams, SSR and client components. I know it is just a begining of next.js I have just begun. 😊"
      />
    </div>
  );
}
