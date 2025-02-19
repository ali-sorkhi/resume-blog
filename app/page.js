"use client";
import { useTranslations } from "../hooks/useTranslations";

export default function Home() {
  const t = useTranslations();

  return (
    <section className="text-center py-10">
      <h1 className="text-3xl font-bold text-def">{t.welcome}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-tra">
        {t.description}
      </p>
      <a
        href="/blog"
        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        {t.viewBlog}
      </a>
    </section>
  );
}
