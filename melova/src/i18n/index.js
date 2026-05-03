import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.json";
import fa from "./locales/fa/fa.json";

const setDirection = (lng) => {
  const dir = lng === "fa" ? "rtl" : "ltr";

  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  setDirection(lng);
});


i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  lng: localStorage.getItem("lang") || "en",

  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;