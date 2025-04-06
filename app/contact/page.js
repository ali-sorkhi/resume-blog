"use client";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslations();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-start mt-10 md:mt-40 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{t.contact}</h1>
        <p className="text-lg md:text-xl mt-4">{t.contactDescription}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
        <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-4 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold mt-10">{t.contactInfo.phone}</h2>
          <p className="text-lg">
            <span dir="ltr">{t.contactInfo.phoneNumber}</span>
          </p>
          <h2 className="text-2xl font-bold mt-4">{t.contactInfo.email}</h2>
          <p className="text-lg">{t.contactInfo.emailAddress}</p>
          <h2 className="text-2xl font-bold mt-4">{t.contactInfo.address}</h2>
          <p className="text-lg">{t.contactInfo.addressDetails}</p>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{t.contactUs}</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder={t.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder={t.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
