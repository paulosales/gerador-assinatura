import type { GeneratedSignature, SignatureData } from '../../types'
import {
  buildContactLines,
  buildPlainTextSignature,
  buildSocialEntries,
  DEFAULT_CONTACT_LABELS,
  escapeHtml,
  fontStack,
  link,
  type ContactLabels,
} from './shared'

const SEPARATOR = '<span style="color:#c4c7cc;padding:0 6px;">&bull;</span>'

/**
 * Template 2 — Minimalista Vertical.
 * No photo; everything is reduced to a couple of compact, single-line rows
 * joined by bullet separators. Still table-based with fully inline styles.
 */
export function generateMinimalVertical(
  data: SignatureData,
  labels: ContactLabels = DEFAULT_CONTACT_LABELS,
): GeneratedSignature {
  const font = fontStack(data)
  const contactLines = buildContactLines(data, labels)
  const socialEntries = buildSocialEntries(data)

  const roleParts = [data.jobTitle, data.company, data.department].filter(Boolean)

  const contactRow =
    contactLines.length > 0
      ? `
        <tr>
          <td style="padding:4px 0 0;font-size:12px;color:#555555;">
            ${contactLines
              .map((item) =>
                item.href
                  ? link({ href: item.href, label: item.value, color: data.secondaryColor, fontSize: 12 })
                  : `<span>${escapeHtml(item.value)}</span>`,
              )
              .join(SEPARATOR)}
          </td>
        </tr>`
      : ''

  const socialRow =
    socialEntries.length > 0
      ? `
        <tr>
          <td style="padding:4px 0 0;font-size:12px;">
            ${socialEntries
              .map((entry) =>
                link({ href: entry.url, label: entry.label, color: data.secondaryColor, fontSize: 12 }),
              )
              .join(SEPARATOR)}
          </td>
        </tr>`
      : ''

  const html = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;font-family:${font};font-size:13px;line-height:1.4;color:#333333;">
  <tr>
    <td>
      <span style="font-size:14px;font-weight:bold;color:${data.primaryColor};">${escapeHtml(data.fullName)}</span>${
        roleParts.length > 0
          ? `<span style="color:#8a8f98;"> &nbsp;—&nbsp; </span><span style="font-size:13px;color:#555555;">${escapeHtml(roleParts.join(', '))}</span>`
          : ''
      }
    </td>
  </tr>${contactRow}${socialRow}
</table>`

  return { html, text: buildPlainTextSignature(data, labels) }
}
