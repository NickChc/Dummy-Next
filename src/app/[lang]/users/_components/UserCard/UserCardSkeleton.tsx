import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function UserCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="min-w-[90%] aspect-[10/8] bg-gray-500 animate-pulse rounded-lg"></div>
        <div
          className="mt-2 min-h-4 bg-gray-500 animate-pulse rounded-lg
        "
        ></div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-2">
          <div className="bg-gray-500 rounded-lg min-h-4 animate-pulse w-3/4"></div>
          <div className="bg-gray-500 rounded-lg min-h-4 animate-pulse w-1/2"></div>
          <div className="bg-gray-500 rounded-lg min-h-4 animate-pulse w-1/4"></div>
        </div>
      </CardContent>
    </Card>
  );
}
