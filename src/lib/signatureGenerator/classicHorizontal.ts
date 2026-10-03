import type { GeneratedSignature, SignatureData } from '../../types'
import {
  buildContactLines,
  buildPlainTextSignature,
  buildSocialEntries,
  escapeAttribute,
  escapeHtml,
  fontStack,
  link,
} from './shared'

/**
 * Template 1 — Clássico Horizontal.
 * Photo on the left with a vertical divider, contact details on the right.
 * 100% table-based markup with inline styles only (no CSS classes/blocks,
 * no flex/grid, no base64/relative images) so it survives Gmail/Outlook/Apple
 * Mail/Thunderbird sanitization.
 */
export function generateClassicHorizontal(data: SignatureData): GeneratedSignature {
  const font = fontStack(data)
  const contactLines = buildContactLines(data)
  const socialEntries = buildSocialEntries(data)
  const hasPhoto = Boolean(data.photoUrl)

  const contactRows = contactLines
    .map(
      (item) => `
            <tr>
              <td style="padding:0 0 3px;font-size:12px;">
                <span style="color:#8a8f98;">${escapeHtml(item.label)}:</span>
                ${
                  item.href
                    ? link({ href: item.href, label: item.value, color: data.secondaryColor, fontSize: 12 })
                    : `<span style="color:#333333;">${escapeHtml(item.value)}</span>`
                }
              </td>
            </tr>`,
    )
    .join('')

  const socialRow =
    socialEntries.length > 0
      ? `
            <tr>
              <td style="padding:6px 0 0;font-size:12px;">
                ${socialEntries
                  .map((entry) =>
                    link({ href: entry.url, label: entry.label, color: data.secondaryColor, fontSize: 12 }),
                  )
                  .join('<span style="color:#c4c7cc;padding:0 6px;">&bull;</span>')}
              </td>
            </tr>`
      : ''

  const photoCell = hasPhoto
    ? `
        <td style="padding:0 16px 0 0;" valign="top">
          <img src="${escapeAttribute(data.photoUrl)}" width="80" height="80" alt="${escapeAttribute(data.fullName)}" style="display:block;width:80px;height:80px;border-radius:50%;max-width:80px;" />
        </td>
        <td style="padding:0 16px 0 0;border-left:2px solid ${data.primaryColor};font-size:1px;line-height:1px;">&nbsp;</td>`
    : ''

  const html = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;font-family:${font};font-size:13px;line-height:1.4;color:#333333;">
  <tr>${photoCell}
    <td valign="top">
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
        <tr>
          <td style="padding:0 0 2px;font-size:16px;font-weight:bold;color:${data.primaryColor};">${escapeHtml(data.fullName)}</td>
        </tr>
        <tr>
          <td style="padding:0 0 8px;font-size:13px;color:#555555;">${escapeHtml([data.jobTitle, data.company].filter(Boolean).join(' · '))}${
            data.department ? `<br />${escapeHtml(data.department)}` : ''
          }</td>
        </tr>${contactRows}${socialRow}
      </table>
    </td>
  </tr>
</table>`

  return { html, text: buildPlainTextSignature(data) }
}
