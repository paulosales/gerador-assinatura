export interface SupportedLanguage {
  /** BCP-47 language code used as the i18next language key. */
  code: string
  /** Name of the language written in the language itself. */
  nativeName: string
  /** Text direction required to render the language correctly. */
  dir: 'ltr' | 'rtl'
}

/**
 * Curated list of the world's most spoken languages (by total speakers),
 * spanning Europe, the Middle East, South/East/Southeast Asia and Africa.
 * `en` is kept first as the ultimate fallback language.
 */
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { code: 'en', nativeName: 'English', dir: 'ltr' },
  { code: 'zh', nativeName: '中文', dir: 'ltr' },
  { code: 'hi', nativeName: 'हिन्दी', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', dir: 'ltr' },
  { code: 'ar', nativeName: 'العربية', dir: 'rtl' },
  { code: 'bn', nativeName: 'বাংলা', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', dir: 'ltr' },
  { code: 'ru', nativeName: 'Русский', dir: 'ltr' },
  { code: 'ur', nativeName: 'اردو', dir: 'rtl' },
  { code: 'id', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', dir: 'ltr' },
  { code: 'sw', nativeName: 'Kiswahili', dir: 'ltr' },
  { code: 'ta', nativeName: 'தமிழ்', dir: 'ltr' },
  { code: 'tr', nativeName: 'Türkçe', dir: 'ltr' },
  { code: 'vi', nativeName: 'Tiếng Việt', dir: 'ltr' },
  { code: 'ko', nativeName: '한국어', dir: 'ltr' },
  { code: 'fa', nativeName: 'فارسی', dir: 'rtl' },
  { code: 'it', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'nl', nativeName: 'Nederlands', dir: 'ltr' },
  { code: 'pl', nativeName: 'Polski', dir: 'ltr' },
  { code: 'th', nativeName: 'ไทย', dir: 'ltr' },
  { code: 'uk', nativeName: 'Українська', dir: 'ltr' },
]

export const DEFAULT_LANGUAGE = 'en'

export const RTL_LANGUAGE_CODES = new Set(
  SUPPORTED_LANGUAGES.filter((language) => language.dir === 'rtl').map((language) => language.code),
)

export function getLanguageDirection(code: string): 'ltr' | 'rtl' {
  const baseCode = code.split('-')[0]
  return RTL_LANGUAGE_CODES.has(baseCode) ? 'rtl' : 'ltr'
}
