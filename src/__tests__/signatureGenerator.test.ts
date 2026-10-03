import { describe, expect, it } from 'vitest'
import { DEFAULT_SIGNATURE } from '../data/options'
import { generateSignature } from '../lib/signatureGenerator'
import type { SignatureData } from '../types'

/**
 * These tests encode the "CRITICAL" email-compatibility rules from the spec:
 * table-based layout, inline styles only, no flex/grid, no <style> blocks,
 * no base64/relative images, fixed image dimensions, and `color:inherit`
 * links. They apply to every available template.
 */
describe('generateSignature — email client compatibility rules', () => {
  const templates: SignatureData['template'][] = ['classic', 'minimal', 'corporate']

  it.each(templates)('template "%s" is table-based with no forbidden constructs', (template) => {
    const { html } = generateSignature({ ...DEFAULT_SIGNATURE, template })

    expect(html).toMatch(/<table/)
    expect(html).not.toMatch(/<style[\s>]/i)
    expect(html).not.toMatch(/class=/i)
    expect(html).not.toMatch(/display:\s*flex/i)
    expect(html).not.toMatch(/display:\s*grid/i)
    expect(html).not.toMatch(/data:image\/[a-z]+;base64/i)
  })

  const templatesWithPhoto: SignatureData['template'][] = ['classic', 'corporate']

  it.each(templatesWithPhoto)('template "%s" only references absolute https image URLs', (template) => {
    const { html } = generateSignature({ ...DEFAULT_SIGNATURE, template })
    const srcMatches = [...html.matchAll(/<img[^>]*src="([^"]*)"/g)].map((match) => match[1])
    expect(srcMatches.length).toBeGreaterThan(0)
    for (const src of srcMatches) {
      expect(src).toMatch(/^https:\/\//)
    }
  })

  it.each(templatesWithPhoto)(
    'template "%s" sets fixed width/height attributes and inline styles on <img>',
    (template) => {
      const { html } = generateSignature({ ...DEFAULT_SIGNATURE, template })
      const imgTags = [...html.matchAll(/<img[^>]*>/g)].map((match) => match[0])
      expect(imgTags.length).toBeGreaterThan(0)
      for (const tag of imgTags) {
        expect(tag).toMatch(/width="\d+"/)
        expect(tag).toMatch(/height="\d+"/)
        expect(tag).toMatch(/style="[^"]*width:\s*\d+px/)
        expect(tag).toMatch(/style="[^"]*height:\s*\d+px/)
      }
    },
  )

  it.each(templates)('template "%s" renders links with color:inherit and no default blue', (template) => {
    const { html } = generateSignature({ ...DEFAULT_SIGNATURE, template })
    const anchorTags = [...html.matchAll(/<a[^>]*>/g)].map((match) => match[0])
    expect(anchorTags.length).toBeGreaterThan(0)
    for (const tag of anchorTags) {
      expect(tag).toMatch(/color:\s*(inherit|#ffffff)/)
      expect(tag).toMatch(/text-decoration:\s*none/)
    }
  })

  it('omits the photo and its divider entirely when photoUrl is empty (classic template)', () => {
    const { html } = generateSignature({ ...DEFAULT_SIGNATURE, template: 'classic', photoUrl: '' })
    expect(html).not.toMatch(/<img/)
  })

  it('normalizes a bare website domain into an absolute https:// link', () => {
    const { html } = generateSignature({
      ...DEFAULT_SIGNATURE,
      template: 'classic',
      website: 'www.acmecorp.com',
    })
    expect(html).toContain('href="https://www.acmecorp.com"')
  })

  it('escapes HTML-sensitive characters in user-provided text', () => {
    const { html } = generateSignature({
      ...DEFAULT_SIGNATURE,
      template: 'classic',
      fullName: '<b>Hacker</b> & "Friends"',
    })
    expect(html).not.toContain('<b>Hacker</b>')
    expect(html).toContain('&lt;b&gt;Hacker&lt;/b&gt;')
  })

  it('only renders social badges for profiles that were actually filled in (corporate template)', () => {
    const { html } = generateSignature({
      ...DEFAULT_SIGNATURE,
      template: 'corporate',
      social: { linkedin: 'https://linkedin.com/in/test', github: '', twitter: '', instagram: '' },
    })
    expect(html).toContain('>in<')
    expect(html).not.toContain('>GH<')
    expect(html).not.toContain('>X<')
    expect(html).not.toContain('>IG<')
  })

  it('produces a non-empty plain-text fallback alongside the HTML', () => {
    const { text } = generateSignature(DEFAULT_SIGNATURE)
    expect(text).toContain(DEFAULT_SIGNATURE.fullName)
    expect(text.length).toBeGreaterThan(0)
  })
})
