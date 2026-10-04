import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SeoContent } from './components/SeoContent'
import { SignatureForm } from './components/form/SignatureForm'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { PreviewPanel } from './components/preview/PreviewPanel'
import { DEFAULT_SIGNATURE } from './data/options'
import type { ContactLabels } from './lib/signatureGenerator'
import { generateSignature } from './lib/signatureGenerator'
import type { SignatureData, SocialLinks } from './types'

function App() {
  const { t } = useTranslation()
  const [data, setData] = useState<SignatureData>(DEFAULT_SIGNATURE)

  const handleFieldChange = useCallback(
    <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => {
      setData((current) => ({ ...current, [field]: value }))
    },
    [],
  )

  const handleSocialChange = useCallback(<K extends keyof SocialLinks>(field: K, value: string) => {
    setData((current) => ({ ...current, social: { ...current.social, [field]: value } }))
  }, [])

  // Short labels (E-mail/Tel/Mobile/Site/Address) embedded directly in the
  // generated signature HTML/plain-text, so the copied signature itself
  // matches the selected UI language.
  const signatureLabels = t('signatureLabels', { returnObjects: true }) as ContactLabels
  const signature = useMemo(() => generateSignature(data, signatureLabels), [data, signatureLabels])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SignatureForm data={data} onFieldChange={handleFieldChange} onSocialChange={handleSocialChange} />
          <PreviewPanel data={data} signature={signature} />
        </div>
      </main>
      <SeoContent />
      <Footer />
    </div>
  )
}

export default App
