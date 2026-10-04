import type { FontFamily, FontOption, SignatureData, TemplateId } from '../types'

export const FONT_OPTIONS: FontOption[] = [
  { id: 'Arial', label: 'Arial', stack: 'Arial, Helvetica, sans-serif' },
  { id: 'Helvetica', label: 'Helvetica', stack: 'Helvetica, Arial, sans-serif' },
  { id: 'Georgia', label: 'Georgia', stack: "Georgia, 'Times New Roman', serif" },
  { id: 'Verdana', label: 'Verdana', stack: 'Verdana, Geneva, sans-serif' },
  { id: 'Tahoma', label: 'Tahoma', stack: 'Tahoma, Geneva, sans-serif' },
]

export const FONT_STACKS: Record<FontFamily, string> = FONT_OPTIONS.reduce(
  (acc, option) => {
    acc[option.id] = option.stack
    return acc
  },
  {} as Record<FontFamily, string>,
)

/** Template labels/descriptions live in the i18n resources (see `templates.*`). */
export const TEMPLATE_IDS: TemplateId[] = ['classic', 'minimal', 'corporate']

export const DEFAULT_SIGNATURE: SignatureData = {
  fullName: 'Alexandre Silva',
  jobTitle: 'Senior Software Engineer',
  company: 'Acme Corp',
  department: 'Engenharia de Produto',
  email: 'alexandre.silva@acmecorp.com',
  phone: '+55 11 4002-8922',
  mobile: '+55 11 99876-5432',
  website: 'https://www.acmecorp.com',
  address: 'Av. Paulista, 1000',
  city: 'São Paulo',
  state: 'SP',
  photoUrl: 'https://i.pravatar.cc/160?img=12',
  social: {
    linkedin: 'https://linkedin.com/in/alexandresilva',
    github: 'https://github.com/alexandresilva',
    twitter: 'https://x.com/alexandresilva',
    instagram: 'https://instagram.com/alexandresilva',
  },
  primaryColor: '#1d4ed8',
  secondaryColor: '#334155',
  fontFamily: 'Arial',
  template: 'classic',
}
