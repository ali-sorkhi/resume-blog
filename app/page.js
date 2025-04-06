"use client";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import img from "@/public/images/banner1.jpg";

export default function Home() {
  const t = useTranslations();

  return (
    <section className="relative w-full h-[700px]">
      {/* Background Image */}
      <Image
        src={img}
        alt="banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-44 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{t.welcome}</h1>
        <p className="text-lg md:text-xl mt-4">{t.description}</p>
        <a
          href="/blog"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md"
        >
          {t.viewBlog}
        </a>
      </div>
    </section>
  );
}
