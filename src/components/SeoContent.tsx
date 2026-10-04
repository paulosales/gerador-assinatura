import { useTranslation } from 'react-i18next'
import type { FaqItem } from '../i18n/types'

export function SeoContent() {
  const { t } = useTranslation()
  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[]

  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
      <h2 id="faq-heading" className="text-lg font-bold text-slate-900">
        {t('faq.heading')}
      </h2>
      <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {faqItems.map((item) => (
          <div key={item.question}>
            <dt className="text-sm font-semibold text-slate-800">{item.question}</dt>
            <dd className="mt-1 text-sm text-slate-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
