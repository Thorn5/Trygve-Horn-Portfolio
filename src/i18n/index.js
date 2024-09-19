// index.js - translation

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInGerman from '../locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  de: {
    translation: translationsInGerman
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources, // resources are important to load translations for the languages.
  lng: localStorage.getItem("lang"), // Grab language from LocalStorage
  debug: true,
  fallbackLng: "en", // use de if selected language is not available
  interpolation: {
    escapeValue: false
  },
  ns: "translation", // namespaces help to divide huge translations into multiple small files.
  defaultNS: "translation", 
  // initImmediate: false, // Don't initialize immediately
});

export default i18n;