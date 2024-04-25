import { NavLink } from "@/app/_components/NavLink";

export function Navigation() {
  return (
    <nav className="bg-slate-400 gap-6 p-4 w-full flex items-center justify-center">
      <NavLink path="/" title="Home" />
      <NavLink path="/posts" title="Posts" />
      <NavLink path="/users" title="Users" />
    </nav>
  );
}
