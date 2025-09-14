import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translationEn from "./locale/en.json"
import translationAr from "./locale/ar.json"

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en", // ✅ لو مفتاح مش موجود بالعربي هياخد من الإنجليزي
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // ✅ يخزن ويجيب اللغة من localStorage
      caches: ["localStorage"],
    },
  })

// ✅ غير الاتجاه حسب اللغة
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"
  document.documentElement.lang = lng
})

export default i18n
