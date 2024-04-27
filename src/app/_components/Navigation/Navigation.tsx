import { NavLink } from "@/app/_components/NavLink";
import { ThemeModeToggle } from "@/app/_components/ThemeModeToggle";

export function Navigation() {
  return (
    <nav className="bg-blue-400 dark:bg-[#0e122c] gap-6 p-4 w-full flex items-center justify-center sticky top-0 border sborder-solid border-black dark:border-white border-x-0 border-t-0 z-50 ">
      <NavLink path="/" title="Home" />
      <NavLink path="/posts" title="Posts" />
      <NavLink path="/users" title="Users" />
      <ThemeModeToggle />
    </nav>
  );
}
