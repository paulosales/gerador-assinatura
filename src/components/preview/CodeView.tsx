import { useState } from 'react'

interface CodeViewProps {
  html: string
}

export function CodeView({ html }: CodeViewProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900"
      >
        Ver código HTML gerado
        <span aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <pre className="max-h-72 overflow-auto border-t border-slate-100 bg-slate-900 px-4 py-3 text-xs leading-relaxed text-slate-100">
          <code>{html}</code>
        </pre>
      )}
    </div>
  )
}
