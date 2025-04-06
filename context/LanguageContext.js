"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      fetch("https://ipapi.co/json/") // Example API for geolocation
        .then((res) => res.json())
        .then((data) => {
          const countryToLang = {
            IR: "fa", // Iran → Farsi
          };
          const detectedLang = countryToLang[data.country_code] || "en";
          setLanguage(detectedLang);
          localStorage.setItem("language", detectedLang);
        })
        .catch(() => setLanguage("en")); // Fallback to English on error
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
