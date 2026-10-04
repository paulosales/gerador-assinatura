import type { AppTranslations } from '../types'
import ar from './ar'
import bn from './bn'
import de from './de'
import en from './en'
import es from './es'
import fa from './fa'
import fr from './fr'
import hi from './hi'
import id from './id'
import it from './it'
import ja from './ja'
import ko from './ko'
import nl from './nl'
import pl from './pl'
import pt from './pt'
import ru from './ru'
import sw from './sw'
import ta from './ta'
import th from './th'
import tr from './tr'
import uk from './uk'
import ur from './ur'
import vi from './vi'
import zh from './zh'

/** Maps every supported language code to its translation resource. */
export const RESOURCES: Record<string, AppTranslations> = {
  en,
  zh,
  hi,
  es,
  fr,
  ar,
  bn,
  pt,
  ru,
  ur,
  id,
  de,
  ja,
  sw,
  ta,
  tr,
  vi,
  ko,
  fa,
  it,
  nl,
  pl,
  th,
  uk,
}

export default RESOURCES
