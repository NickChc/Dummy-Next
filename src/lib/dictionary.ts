import "server-only";

import type { Locale } from "../../i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ka: () => import("@/dictionaries/ka.json").then((module) => module.default),
};

export const getDictionaries = async (locale: Locale) => dictionaries[locale]();
