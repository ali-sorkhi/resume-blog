"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const { language, switchLanguage } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
      <Link href="/" className="text-xl font-bold">
        {t.myName}
      </Link>
      <div className="flex gap-6">
        <Link
          href="/projects"
          className={pathname === "/projects" ? "font-bold" : ""}
        >
          {t.projects}
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? "font-bold" : ""}
        >
          {t.services}
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "font-bold" : ""}
        >
          {t.contact}
        </Link>
      </div>
      <div className="flex gap-4">
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
        <button onClick={() => switchLanguage(language === "en" ? "fa" : "en")}>
          {t.toggleLanguage}
        </button>
      </div>
    </nav>
  );
}
