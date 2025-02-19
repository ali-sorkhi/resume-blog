import en from "../locales/en.json";
import fa from "../locales/fa.json";
import { useLanguage } from "../context/LanguageContext";

export function useTranslations() {
  const { language } = useLanguage();
  const translations = language === "fa" ? fa : en;
  return translations;
}
