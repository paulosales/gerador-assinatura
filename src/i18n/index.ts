import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, getLanguageDirection, SUPPORTED_LANGUAGES } from './languages'
import RESOURCES from './resources'
import type { AppTranslations } from './types'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: AppTranslations
    }
  }
}

const resources = Object.fromEntries(
  Object.entries(RESOURCES).map(([code, translation]) => [code, { translation }]),
)

/** Keeps <html lang> / <html dir> in sync so RTL languages (Arabic, Persian, Urdu) render correctly. */
function syncHtmlAttributes(language: string) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = language
  document.documentElement.dir = getLanguageDirection(language)
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES.map((language) => language.code),
    nonExplicitSupportedLngs: true,
    defaultNS: 'translation',
    interpolation: {
      // React already escapes rendered values, so i18next doesn't need to.
      escapeValue: false,
    },
    detection: {
      // Prefer a language the user explicitly picked before, then fall back
      // to their browser/OS language, then the static <html lang> attribute.
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })
  .then(() => syncHtmlAttributes(i18n.language))

i18n.on('languageChanged', syncHtmlAttributes)

export default i18n
