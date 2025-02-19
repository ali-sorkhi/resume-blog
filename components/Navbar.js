"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";
import { HiMenu, HiX } from "react-icons/hi"; // React Icons

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800 relative z-50">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        {t.myName}
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6">
        <Link
          href="/projects"
          className={`hover:text-blue-500 ${
            pathname === "/projects" ? "font-bold" : ""
          }`}
        >
          {t.projects}
        </Link>
        <Link
          href="/services"
          className={`hover:text-blue-500 ${
            pathname === "/services" ? "font-bold" : ""
          }`}
        >
          {t.services}
        </Link>
        <Link
          href="/contact"
          className={`hover:text-blue-500 ${
            pathname === "/contact" ? "font-bold" : ""
          }`}
        >
          {t.contact}
        </Link>
      </div>

      {/* Theme & Language Toggle (Desktop) */}
      <div className="hidden md:flex gap-4">
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
        <button onClick={() => switchLanguage(language === "en" ? "fa" : "en")}>
          {t.toggleLanguage}
        </button>
      </div>

      {/* Mobile Menu (Now Appears on Top) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800 p-6 flex flex-col items-center space-y-6 shadow-md z-50">
          <Link
            href="/projects"
            className={`w-full text-center text-xl ${
              pathname === "/projects" ? "font-bold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {t.projects}
          </Link>
          <Link
            href="/services"
            className={`w-full text-center text-xl ${
              pathname === "/services" ? "font-bold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {t.services}
          </Link>
          <Link
            href="/contact"
            className={`w-full text-center text-xl ${
              pathname === "/contact" ? "font-bold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {t.contact}
          </Link>
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => switchLanguage(language === "en" ? "fa" : "en")}
            className="text-xl"
          >
            {t.toggleLanguage}
          </button>
        </div>
      )}
    </nav>
  );
}
