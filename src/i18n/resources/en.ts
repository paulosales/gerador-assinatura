import type { AppTranslations } from '../types'

const en: AppTranslations = {
  header: {
    badge: 'Free & no sign-up',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Create professional e-mail signatures, 100% compatible with Gmail, Outlook, Apple Mail and Thunderbird. Fill in the form, see the result in real time and copy it straight into your e-mail client.',
  },
  languageSwitcher: {
    label: 'Language',
  },
  form: {
    ariaLabel: 'Signature data form',
    sections: {
      general: { title: '1. General information', description: 'Name, job title and company' },
      contact: { title: '2. Contact', description: 'E-mail, phone, website and address' },
      media: { title: '3. Media & social networks', description: 'Photo, logo and social profiles' },
      design: { title: '4. Design & customization', description: 'Colors, font and layout template' },
    },
    fields: {
      fullName: { label: 'Full name', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Job title', placeholder: 'Senior Software Engineer' },
      company: { label: 'Company / Organization', placeholder: 'Acme Corp' },
      department: { label: 'Department (optional)', placeholder: 'Product Engineering' },
      email: { label: 'E-mail', placeholder: 'you@company.com' },
      phone: { label: 'Business phone', placeholder: '+1 415 555 0100' },
      mobile: { label: 'Mobile', placeholder: '+1 415 555 0101' },
      website: {
        label: 'Website',
        placeholder: 'https://www.company.com',
        hint: 'The https:// prefix is added automatically.',
      },
      address: { label: 'Address', placeholder: '1 Market Street' },
      city: { label: 'City', placeholder: 'San Francisco' },
      state: { label: 'State', placeholder: 'CA' },
      photoUrl: {
        label: 'Profile photo or company logo URL',
        placeholder: 'https://...',
        hint: 'Use an absolute URL (https://). Base64 and relative paths do not work in e-mails.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Primary color (name & dividers)' },
      secondaryColor: { label: 'Secondary color (links & icons)' },
      fontFamily: { label: 'Font family' },
    },
    templateLabel: 'Layout template',
    colorField: {
      pickerAriaLabel: '{{label}} (color picker)',
      hexAriaLabel: '{{label}} (hex value)',
    },
  },
  templates: {
    classic: {
      label: 'Classic Horizontal',
      description: 'Photo on the left with a vertical divider and details on the right.',
    },
    minimal: {
      label: 'Minimalist Vertical',
      description: 'No photo, data in a compact single line with separators.',
    },
    corporate: {
      label: 'Corporate Elegant',
      description: 'Logo on top, name in focus and badges for social networks.',
    },
  },
  preview: {
    newMessage: 'New message',
    to: 'To:',
    toPlaceholder: 'recipient@email.com',
    subject: 'Subject:',
    subjectValue: 'Hello!',
    regards: 'Best regards,',
  },
  actions: {
    copySignature: 'Copy signature to clipboard',
    copying: 'Copying…',
    copyCode: 'Copy raw HTML code',
    download: 'Download .html file',
    toastCopySignatureSuccess: 'Signature copied! Just paste it (Ctrl/Cmd+V) into your e-mail settings.',
    toastCopySignatureError: 'Could not copy automatically. Try the "Copy raw HTML code" button.',
    toastCopyCodeSuccess: 'HTML code copied to the clipboard!',
    toastCopyCodeError: 'Could not copy the code. Copy it manually from the panel below.',
    toastDownload: 'Downloading {{file}}…',
  },
  codeView: {
    toggle: 'View generated HTML code',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'Mobile',
    website: 'Site',
    address: 'Address',
  },
  faq: {
    heading: 'Frequently asked questions about HTML e-mail signatures',
    items: [
      {
        question: 'Does the signature work in Gmail, Outlook, Apple Mail and Thunderbird?',
        answer:
          'Yes. The generated HTML is 100% table-based with inline styles, no CSS classes, <style> blocks, Flexbox or Grid — the technologies that Gmail strips out and that the Outlook (Word) rendering engine does not support.',
      },
      {
        question: 'Why can\u2019t I use a Base64 photo?',
        answer:
          'Clients like Gmail block embedded Base64 images for security reasons, and most webmail providers do not preserve that kind of data when pasting. That\u2019s why we always require an absolute URL (https://) for photos and logos.',
      },
      {
        question: 'How do I paste the signature into my e-mail client?',
        answer:
          'Click "Copy signature to clipboard", open your e-mail provider\u2019s signature settings and paste with Ctrl+V (or Cmd+V on Mac). The colors, table and links are preserved.',
      },
      {
        question: 'Can I download the code to use later?',
        answer:
          'Yes, use the "Download .html file" button to save a local copy, or "Copy raw HTML code" to paste the source code into any editor.',
      },
    ],
  },
  footer: {
    tip: 'Tip: paste the copied signature directly into the signature editor of Gmail, Outlook, Apple Mail or Thunderbird — colors, the table and links are preserved.',
  },
}

export default en
