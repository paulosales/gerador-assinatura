import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { copyFormattedSignature, copyPlainText } from '../../lib/clipboard'
import { downloadTextFile } from '../../lib/download'
import { useToast } from '../../hooks/useToast'

interface ActionButtonsProps {
  html: string
  plainText: string
  fileBaseName: string
}

export function ActionButtons({ html, plainText, fileBaseName }: ActionButtonsProps) {
  const { t } = useTranslation()
  const { showToast } = useToast()
  const [copyingSignature, setCopyingSignature] = useState(false)
  const [copyingCode, setCopyingCode] = useState(false)

  const handleCopySignature = useCallback(async () => {
    setCopyingSignature(true)
    const result = await copyFormattedSignature(html, plainText)
    setCopyingSignature(false)
    if (result.success) {
      showToast(t('actions.toastCopySignatureSuccess'), 'success')
    } else {
      showToast(t('actions.toastCopySignatureError'), 'error')
    }
  }, [html, plainText, showToast, t])

  const handleCopyCode = useCallback(async () => {
    setCopyingCode(true)
    const result = await copyPlainText(html)
    setCopyingCode(false)
    if (result.success) {
      showToast(t('actions.toastCopyCodeSuccess'), 'success')
    } else {
      showToast(t('actions.toastCopyCodeError'), 'error')
    }
  }, [html, showToast, t])

  const handleDownload = useCallback(() => {
    const file = `${fileBaseName}.html`
    downloadTextFile(file, html)
    showToast(t('actions.toastDownload', { file }), 'info')
  }, [fileBaseName, html, showToast, t])

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleCopySignature}
        disabled={copyingSignature}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {copyingSignature ? t('actions.copying') : t('actions.copySignature')}
      </button>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleCopyCode}
          disabled={copyingCode}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {copyingCode ? t('actions.copying') : t('actions.copyCode')}
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
        >
          {t('actions.download')}
        </button>
      </div>
    </div>
  )
}
