"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

enum TThemeMode_Enum {
  DARK = "dark",
  LIGHT = "light",
}

export function ThemeModeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [instChange, setInstChange] = useState<TThemeMode_Enum>(
    resolvedTheme as TThemeMode_Enum
  );

  function toggleTheme() {
    if (resolvedTheme === TThemeMode_Enum.DARK) {
      setTheme(TThemeMode_Enum.LIGHT);
    } else {
      setTheme(TThemeMode_Enum.DARK);
    }
  }

  const memoizedThemeToggle = useMemo(() => {
    function toggleTheme() {
      if (resolvedTheme === TThemeMode_Enum.DARK) {
        setTheme(TThemeMode_Enum.LIGHT);
      } else {
        setTheme(TThemeMode_Enum.DARK);
      }
    }
    return toggleTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setInstChange(resolvedTheme as TThemeMode_Enum);
  }, [resolvedTheme]);

  if (!mounted) {
    return (
      <div
        suppressHydrationWarning
        className={`rounded-xl absolute top-1/2 -translate-y-1/2 right-3 sm:right-12 flex items-center w-10 cursor-pointer bg-blue-200`}
        onClick={memoizedThemeToggle}
      >
        <Sun className="absolute -left-9 whitespace-nowrap hidden sm:block cursor-default" />

        <span
          className={`border border-solid border-black rounded-full size-4 bg-muted-foreground p-1 cursor-pointer m-[2px] duration-150 ml-3 `}
        ></span>
        <Moon className="absolute left-14 whitespace-nowrap hidden sm:block cursor-default" />
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className={`rounded-xl absolute top-1/2 -translate-y-1/2 right-3 sm:right-12 flex items-center w-10 cursor-pointer ${
        resolvedTheme === TThemeMode_Enum.DARK ||
        instChange === TThemeMode_Enum.DARK
          ? "bg-blue-900"
          : "bg-white"
      }`}
      onClick={memoizedThemeToggle}
    >
      <Sun
        className="absolute -left-9 whitespace-nowrap hidden sm:block cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
      <span
        suppressHydrationWarning
        className={`border border-solid border-black rounded-full size-4 p-1 cursor-pointer m-[2px] duration-150 ${
          resolvedTheme === TThemeMode_Enum.DARK ||
          instChange === TThemeMode_Enum.DARK
            ? "ml-5 bg-white"
            : "bg-muted-foreground"
        } `}
      ></span>
      <Moon
        className="absolute left-14 whitespace-nowrap hidden sm:block cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
