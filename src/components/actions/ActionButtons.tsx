import { useCallback, useState } from 'react'
import { copyFormattedSignature, copyPlainText } from '../../lib/clipboard'
import { downloadTextFile } from '../../lib/download'
import { useToast } from '../../hooks/useToast'

interface ActionButtonsProps {
  html: string
  plainText: string
  fileBaseName: string
}

export function ActionButtons({ html, plainText, fileBaseName }: ActionButtonsProps) {
  const { showToast } = useToast()
  const [copyingSignature, setCopyingSignature] = useState(false)
  const [copyingCode, setCopyingCode] = useState(false)

  const handleCopySignature = useCallback(async () => {
    setCopyingSignature(true)
    const result = await copyFormattedSignature(html, plainText)
    setCopyingSignature(false)
    if (result.success) {
      showToast('Assinatura copiada! Basta colar (Ctrl/Cmd+V) nas configurações do seu e-mail.', 'success')
    } else {
      showToast('Não foi possível copiar automaticamente. Tente o botão "Copiar código HTML".', 'error')
    }
  }, [html, plainText, showToast])

  const handleCopyCode = useCallback(async () => {
    setCopyingCode(true)
    const result = await copyPlainText(html)
    setCopyingCode(false)
    if (result.success) {
      showToast('Código HTML copiado para a área de transferência!', 'success')
    } else {
      showToast('Não foi possível copiar o código. Copie manualmente no painel abaixo.', 'error')
    }
  }, [html, showToast])

  const handleDownload = useCallback(() => {
    downloadTextFile(`${fileBaseName}.html`, html)
    showToast('Download de signature.html iniciado.', 'info')
  }, [fileBaseName, html, showToast])

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleCopySignature}
        disabled={copyingSignature}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {copyingSignature ? 'Copiando…' : 'Copiar assinatura para a área de transferência'}
      </button>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleCopyCode}
          disabled={copyingCode}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {copyingCode ? 'Copiando…' : 'Copiar código HTML puro'}
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
        >
          Baixar arquivo .html
        </button>
      </div>
    </div>
  )
}
