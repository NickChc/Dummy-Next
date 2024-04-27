import { NavLink } from "@/app/[lang]/_components/NavLink";
import { ThemeModeToggle } from "@/app/[lang]/_components/ThemeModeToggle";
import { Locale } from "../../../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";
import { LangSelect } from "@/app/[lang]/_components/LangSelect";

interface NavigationProps {
  lang: Locale;
}

export async function Navigation({ lang }: NavigationProps) {
  const { navigation } = await getDictionaries(lang);

  return (
    <nav className="bg-blue-400 dark:bg-[#0e122c] gap-6 p-4 w-full flex items-center justify-center sticky top-0 border sborder-solid border-black dark:border-white border-x-0 border-t-0 z-50 ">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <LangSelect lang={lang} />
      </div>
      <NavLink path={`/${lang}`} title={navigation.home} />
      <NavLink path={`/${lang}/posts`} title={navigation.posts} />
      <NavLink path={`/${lang}/users`} title={navigation.users} />
      <ThemeModeToggle />
    </nav>
  );
}
