"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
