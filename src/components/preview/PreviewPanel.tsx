import type { GeneratedSignature, SignatureData } from '../../types'
import { ActionButtons } from '../actions/ActionButtons'
import { CodeView } from './CodeView'
import { SignaturePreview } from './SignaturePreview'

interface PreviewPanelProps {
  data: SignatureData
  signature: GeneratedSignature
}

function slugify(value: string): string {
  return (
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'signature'
  )
}

export function PreviewPanel({ data, signature }: PreviewPanelProps) {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
      <SignaturePreview html={signature.html} recipientName={data.fullName} />
      <ActionButtons
        html={signature.html}
        plainText={signature.text}
        fileBaseName={slugify(data.fullName) || 'signature'}
      />
      <CodeView html={signature.html} />
    </div>
  )
}
