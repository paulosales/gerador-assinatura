import type { GeneratedSignature, SignatureData } from '../../types'
import { generateClassicHorizontal } from './classicHorizontal'
import { generateCorporateElegant } from './corporateElegant'
import { generateMinimalVertical } from './minimalVertical'

export function generateSignature(data: SignatureData): GeneratedSignature {
  switch (data.template) {
    case 'minimal':
      return generateMinimalVertical(data)
    case 'corporate':
      return generateCorporateElegant(data)
    case 'classic':
    default:
      return generateClassicHorizontal(data)
  }
}

/** Wraps the signature fragment into a standalone HTML document for the `.html` download. */
export function wrapAsHtmlDocument(fragment: string, title: string): string {
  return `<!doctype html>
<html lang="pt-BR">
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
