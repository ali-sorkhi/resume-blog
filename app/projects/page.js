"use client";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function Projects() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center justify-start mt-10 md:mt-40 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{t.projects}</h1>
        <p className="text-lg md:text-xl mt-4">{t.projectsDescription}</p>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-4 h-[350] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex flex-col">
          <div className="w-full h-[200px] md:h-[220px] lg:h-[250px]">
            <Image
              src="/images/projects/project1.png"
              alt="Project 1"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{t.project1Title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-200">
            {t.project1Description}
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-4 h-[350] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex flex-col">
          <div className="w-full h-[200px] md:h-[220px] lg:h-[250px]">
            <Image
              src="/images/projects/project2.webp"
              alt="Project 2"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{t.project2Title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-200">
            {t.project2Description}
          </p>
        </div>
      </div>
    </div>
  );
}
