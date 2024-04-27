import { TPost, TUser } from "@/@types/general";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LikeButton } from "@/app/[lang]/_components/PostCard/LikeButton";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-3 overflow-hidden">
      <div>
        <div className="bg-gray-500 size-24 animate-pulse m-2"></div>
      </div>
      <div className="min-w-full min-h-[20vh] flex flex-col gap-y-2 my-14">
        <div className="min-h-4 bg-gray-500 animate-pulse w-full rounded-lg"></div>
        <div className="min-h-4 bg-gray-500 animate-pulse w-full rounded-lg"></div>
        <div className="min-h-4 bg-gray-500 animate-pulse w-full rounded-lg"></div>
        <div className="min-h-4 bg-gray-500 animate-pulse w-3/4 rounded-lg"></div>
      </div>
      <div className="flex items-center w-full gap-x-4">
        <div className="min-h-4 bg-gray-500 animate-pulse rounded-lg min-w-12"></div>
        <div className="min-h-4 bg-gray-500 animate-pulse rounded-lg min-w-20"></div>
      </div>
    </div>
  );
}
