import { NavLink } from "@/app/_components/NavLink";

export function Navigation() {
  return (
    <nav className="bg-slate-400 gap-6 p-4 w-full flex items-center justify-center sticky top-0 border sborder-solid border-black border-x-0 border-t-0 z-50 ">
      <NavLink path="/" title="Home" />
      <NavLink path="/posts" title="Posts" />
      <NavLink path="/users" title="Users" />
    </nav>
  );
}
