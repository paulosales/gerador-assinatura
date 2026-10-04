import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{t('header.badge')}</p>
          <LanguageSwitcher />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t('header.title')}</h1>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{t('header.subtitle')}</p>
        </div>
      </div>
    </header>
  )
}
