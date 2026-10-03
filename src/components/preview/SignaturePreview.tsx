interface SignaturePreviewProps {
  html: string
  recipientName?: string
}

/** Simulates an e-mail compose window so the user can judge the signature in context. */
export function SignaturePreview({ html, recipientName }: SignaturePreviewProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 font-medium">Nova mensagem</span>
      </div>
      <div className="space-y-2 px-4 py-3 text-xs text-slate-500">
        <div className="flex gap-2 border-b border-slate-100 pb-2">
          <span className="font-medium text-slate-400">Para:</span>
          <span>
            {recipientName
              ? `${recipientName.split(' ')[0].toLowerCase()}@destinatario.com`
              : 'destinatario@email.com'}
          </span>
        </div>
        <div className="flex gap-2 border-b border-slate-100 pb-2">
          <span className="font-medium text-slate-400">Assunto:</span>
          <span>Olá!</span>
        </div>
      </div>
      <div className="min-h-[220px] px-4 py-4">
        <p className="mb-4 text-sm text-slate-600">Atenciosamente,</p>
        <div
          data-testid="signature-render"
          // The generated markup is fully static/inline (tables + text), produced by
          // our own template functions — not arbitrary user HTML — so rendering it
          // here mirrors exactly what will be pasted into the recipient's mail client.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
