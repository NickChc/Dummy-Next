"use client";

import { ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

interface LikeButtonProps {
  postId: number;
  reactions: number;
}

export function LikeButton({ postId, reactions }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  function toggleLike() {
    const likedString = localStorage.getItem("liked_posts");
    if (likedString == null) {
      localStorage.setItem("liked_posts", JSON.stringify([postId]));
      setIsLiked(true);
      return;
    }

    const liked: number[] = JSON.parse(likedString);

    let newLiked = [];
    if (liked.includes(postId)) {
      setIsLiked(false);
      newLiked = liked.filter((id) => id != postId);
    } else {
      setIsLiked(true);
      newLiked = [...liked, postId];
    }
    localStorage.setItem("liked_posts", JSON.stringify(newLiked));
  }

  useEffect(() => {
    const liked = localStorage.getItem("liked_posts");
    setIsLiked(liked ? JSON.parse(liked).includes(postId) : false);
  }, []);

  return (
    <>
      <div className="flex items-center gap-x-3 select-none whitespace-nowrap">
        Likes -{" "}
        <span className="min-w-[1.4rem] font-semibold text-lg">
          {isLiked ? reactions + 1 : reactions}
        </span>{" "}
        <ThumbsUp
          className={`size-6 cursor-pointer ${isLiked ? "text-blue-500" : ""}`}
          onClick={toggleLike}
        />
      </div>
    </>
  );
}
