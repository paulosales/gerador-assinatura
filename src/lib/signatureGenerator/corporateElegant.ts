import type { GeneratedSignature, SignatureData } from '../../types'
import {
  buildBadgesRow,
  buildContactLines,
  buildPlainTextSignature,
  buildSocialEntries,
  DEFAULT_CONTACT_LABELS,
  escapeAttribute,
  escapeHtml,
  fontStack,
  link,
  type ContactLabels,
} from './shared'

const SEPARATOR = '<span style="color:#c4c7cc;padding:0 6px;">&bull;</span>'

/**
 * Template 3 — Corporativo Elegante.
 * Logo/photo centered on top, name in large bold type, a thin divider, social
 * badges, then a compact contact line. Centered, table-based, inline styles.
 */
export function generateCorporateElegant(
  data: SignatureData,
  labels: ContactLabels = DEFAULT_CONTACT_LABELS,
): GeneratedSignature {
  const font = fontStack(data)
  const contactLines = buildContactLines(data, labels)
  const socialEntries = buildSocialEntries(data)
  const roleParts = [data.jobTitle, data.company, data.department].filter(Boolean)

  const photoRow = data.photoUrl
    ? `
        <tr>
          <td align="center" style="padding:0 0 10px;">
            <img src="${escapeAttribute(data.photoUrl)}" width="88" height="88" alt="${escapeAttribute(data.fullName)}" style="display:block;width:88px;height:88px;border-radius:50%;max-width:88px;" />
          </td>
        </tr>`
    : ''

  const dividerRow = `
        <tr>
          <td align="center" style="padding:10px 0;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
              <tr>
                <td width="60" height="2" bgcolor="${data.primaryColor}" style="width:60px;height:2px;font-size:1px;line-height:1px;background-color:${data.primaryColor};">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>`

  const badgesHtml = buildBadgesRow(socialEntries, data)
  const badgesRow = badgesHtml
    ? `
        <tr>
          <td align="center" style="padding:0 0 10px;">${badgesHtml}</td>
        </tr>`
    : ''

  const contactRow =
    contactLines.length > 0
      ? `
        <tr>
          <td align="center" style="padding:0;font-size:12px;color:#555555;">
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

  const html = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" width="320" style="border-collapse:collapse;width:320px;font-family:${font};font-size:13px;line-height:1.4;color:#333333;">${photoRow}
        <tr>
          <td align="center" style="padding:0;font-size:18px;font-weight:bold;color:${data.primaryColor};">${escapeHtml(data.fullName)}</td>
        </tr>
        <tr>
          <td align="center" style="padding:2px 0 0;font-size:13px;color:#555555;">${escapeHtml(roleParts.join(' · '))}</td>
        </tr>${dividerRow}${badgesRow}${contactRow}
</table>`

  return { html, text: buildPlainTextSignature(data, labels) }
}
