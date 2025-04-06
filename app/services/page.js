"use client";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import imgServices from "@/public/images/banner1.jpg";

export default function Services() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col items-center justify-start mt-10 md:mt-40 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{t.services}</h1>
        <p className="text-lg md:text-xl mt-4">{t.servicesDescription}</p>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 gap-6">
        <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-4 h-[350]  md:h-[350px] lg:h-[400px] md:flex flex-row items-start gap-4 ">
          <div className="w-full md:w-[40%] h-[200px] md:h-full ">
            <Image
              src="/images/services/service1.png"
              alt="Service 1"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-xl  font-bold mt-4">{t.service1Title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              {t.service1Description}
            </p>
          </div>
        </div>

        <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-4 h-[350]  md:h-[350px] lg:h-[400px] md:flex flex-row items-start gap-4 ">
          <div className="w-full md:w-[40%] h-[200px] md:h-full ">
            <Image
              src="/images/services/service2.webp"
              alt="Service 1"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-xl  font-bold mt-4">{t.service2Title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              {t.service2Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
