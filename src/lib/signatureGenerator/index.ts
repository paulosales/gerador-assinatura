import type { GeneratedSignature, SignatureData } from '../../types'
import { generateClassicHorizontal } from './classicHorizontal'
import { generateCorporateElegant } from './corporateElegant'
import { generateMinimalVertical } from './minimalVertical'
import { DEFAULT_CONTACT_LABELS, type ContactLabels } from './shared'

export function generateSignature(
  data: SignatureData,
  labels: ContactLabels = DEFAULT_CONTACT_LABELS,
): GeneratedSignature {
  switch (data.template) {
    case 'minimal':
      return generateMinimalVertical(data, labels)
    case 'corporate':
      return generateCorporateElegant(data, labels)
    case 'classic':
    default:
      return generateClassicHorizontal(data, labels)
  }
}

/** Wraps the signature fragment into a standalone HTML document for the `.html` download. */
export function wrapAsHtmlDocument(fragment: string, title: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
  </head>
  <body>
    ${fragment}
  </body>
</html>
`
}

export * from './shared'
