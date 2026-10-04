import { FONT_STACKS } from '../../data/options'
import type { SignatureData } from '../../types'
import type { AppTranslations } from '../../i18n/types'

export type ContactLabels = AppTranslations['signatureLabels']

/** English fallback used whenever the caller doesn't supply localized labels (e.g. tests). */
export const DEFAULT_CONTACT_LABELS: ContactLabels = {
  email: 'E-mail',
  phone: 'Tel',
  mobile: 'Mobile',
  website: 'Site',
  address: 'Address',
}

/** Escapes text that will be interpolated into HTML markup. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Escapes text that will be interpolated into an HTML attribute value. */
export function escapeAttribute(value: string): string {
  return escapeHtml(value)
}

/**
 * Ensures a website/profile URL is absolute (`https://`), as required by
 * email clients that strip or ignore relative/base64 resources.
 */
export function toAbsoluteUrl(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  if (/^mailto:|^tel:/i.test(trimmed)) return trimmed
  return `https://${trimmed.replace(/^\/+/, '')}`
}

/** Strips a URL down to a short, human readable label (no protocol/trailing slash). */
export function toDisplayUrl(value: string): string {
  return toAbsoluteUrl(value)
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
}

/** Normalizes a phone number into a `tel:` href (keeps a leading `+`, strips the rest). */
export function toTelHref(value: string): string {
  const digits = value.trim().replace(/[^\d+]/g, '')
  return `tel:${digits}`
}

export function toMailHref(value: string): string {
  return `mailto:${value.trim()}`
}

export function fontStack(data: SignatureData): string {
  return FONT_STACKS[data.fontFamily] ?? FONT_STACKS.Arial
}

/** Renders an inline-styled hyperlink whose color is inherited from its wrapping span. */
export function link(options: {
  href: string
  label: string
  color: string
  fontSize?: number
  bold?: boolean
}): string {
  const { href, label, color, fontSize, bold } = options
  const sizeStyle = fontSize ? `font-size:${fontSize}px;` : ''
  const weightStyle = bold ? 'font-weight:bold;' : ''
  return (
    `<span style="color:${color};${sizeStyle}${weightStyle}">` +
    `<a href="${escapeAttribute(href)}" style="color:inherit;text-decoration:none;" target="_blank" rel="noreferrer">` +
    `${escapeHtml(label)}</a></span>`
  )
}

export interface ContactLine {
  label: string
  value: string
  href: string
}

/** Builds the list of contact lines (email/phone/mobile/website/address) present in the form. */
export function buildContactLines(
  data: SignatureData,
  labels: ContactLabels = DEFAULT_CONTACT_LABELS,
): ContactLine[] {
  const lines: ContactLine[] = []
  if (data.email) {
    lines.push({ label: labels.email, value: data.email, href: toMailHref(data.email) })
  }
  if (data.phone) {
    lines.push({ label: labels.phone, value: data.phone, href: toTelHref(data.phone) })
  }
  if (data.mobile) {
    lines.push({ label: labels.mobile, value: data.mobile, href: toTelHref(data.mobile) })
  }
  if (data.website) {
    lines.push({
      label: labels.website,
      value: toDisplayUrl(data.website),
      href: toAbsoluteUrl(data.website),
    })
  }
  const addressParts = [data.address, data.city, data.state].filter(Boolean)
  if (addressParts.length > 0) {
    lines.push({ label: labels.address, value: addressParts.join(', '), href: '' })
  }
  return lines
}

export interface SocialEntry {
  key: string
  abbreviation: string
  label: string
  url: string
}

/** Returns only the social profiles the user actually filled in. */
export function buildSocialEntries(data: SignatureData): SocialEntry[] {
  const entries: SocialEntry[] = [
    { key: 'linkedin', abbreviation: 'in', label: 'LinkedIn', url: data.social.linkedin },
    { key: 'github', abbreviation: 'GH', label: 'GitHub', url: data.social.github },
    { key: 'twitter', abbreviation: 'X', label: 'X (Twitter)', url: data.social.twitter },
    { key: 'instagram', abbreviation: 'IG', label: 'Instagram', url: data.social.instagram },
  ]
  return entries.filter((entry) => entry.url.trim().length > 0)
}

/**
 * Renders social profiles as inline table "badges" (colored circles with a short
 * abbreviation). Degrades gracefully to solid squares in Outlook desktop, which
 * ignores `border-radius`, but keeps full table-based, inline-styled markup.
 */
export function buildBadgesRow(entries: SocialEntry[], data: SignatureData): string {
  if (entries.length === 0) return ''
  const cells = entries
    .map(
      (entry) => `
          <td style="padding:0 6px 0 0;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
              <tr>
                <td align="center" valign="middle" bgcolor="${data.secondaryColor}" width="28" height="28" style="width:28px;height:28px;background-color:${data.secondaryColor};border-radius:50%;font-family:${fontStack(data)};font-size:11px;font-weight:bold;color:#ffffff;line-height:28px;">
                  <a href="${escapeAttribute(toAbsoluteUrl(entry.url))}" style="color:#ffffff;text-decoration:none;display:block;" target="_blank" rel="noreferrer">${escapeHtml(entry.abbreviation)}</a>
                </td>
              </tr>
            </table>
          </td>`,
    )
    .join('')
  return `
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
        <tr>${cells}
        </tr>
      </table>`
}

export function buildPlainTextSignature(
  data: SignatureData,
  labels: ContactLabels = DEFAULT_CONTACT_LABELS,
): string {
  const lines: string[] = []
  lines.push(data.fullName)
  const roleLine = [data.jobTitle, data.company].filter(Boolean).join(' | ')
  if (roleLine) lines.push(roleLine)
  if (data.department) lines.push(data.department)

  const contact = buildContactLines(data, labels)
    .map((item) => `${item.label}: ${item.value}`)
    .join(' | ')
  if (contact) lines.push(contact)

  const socials = buildSocialEntries(data)
    .map((item) => `${item.label}: ${toAbsoluteUrl(item.url)}`)
    .join(' | ')
  if (socials) lines.push(socials)

  return lines.join('\n')
}
