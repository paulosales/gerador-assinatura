export type FontFamily = 'Arial' | 'Helvetica' | 'Georgia' | 'Verdana' | 'Tahoma'

export type TemplateId = 'classic' | 'minimal' | 'corporate'

export interface SocialLinks {
  linkedin: string
  github: string
  twitter: string
  instagram: string
}

export interface SignatureData {
  fullName: string
  jobTitle: string
  company: string
  department: string
  email: string
  phone: string
  mobile: string
  website: string
  address: string
  city: string
  state: string
  photoUrl: string
  social: SocialLinks
  primaryColor: string
  secondaryColor: string
  fontFamily: FontFamily
  template: TemplateId
}

export interface GeneratedSignature {
  /** Self-contained HTML fragment, safe to paste into email compose windows. */
  html: string
  /** Plain-text fallback used for the clipboard's text/plain representation. */
  text: string
}

export interface FontOption {
  id: FontFamily
  label: string
  stack: string
}
