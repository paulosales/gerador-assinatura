/** Shape every locale resource file must satisfy — enforced at compile time. */
export interface FaqItem {
  question: string
  answer: string
}

export interface AppTranslations {
  header: {
    badge: string
    title: string
    subtitle: string
  }
  languageSwitcher: {
    label: string
  }
  form: {
    ariaLabel: string
    sections: {
      general: { title: string; description: string }
      contact: { title: string; description: string }
      media: { title: string; description: string }
      design: { title: string; description: string }
    }
    fields: {
      fullName: { label: string; placeholder: string }
      jobTitle: { label: string; placeholder: string }
      company: { label: string; placeholder: string }
      department: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
      mobile: { label: string; placeholder: string }
      website: { label: string; placeholder: string; hint: string }
      address: { label: string; placeholder: string }
      city: { label: string; placeholder: string }
      state: { label: string; placeholder: string }
      photoUrl: { label: string; placeholder: string; hint: string }
      linkedin: { label: string; placeholder: string }
      github: { label: string; placeholder: string }
      twitter: { label: string; placeholder: string }
      instagram: { label: string; placeholder: string }
      primaryColor: { label: string }
      secondaryColor: { label: string }
      fontFamily: { label: string }
    }
    templateLabel: string
    colorField: {
      pickerAriaLabel: string
      hexAriaLabel: string
    }
  }
  templates: {
    classic: { label: string; description: string }
    minimal: { label: string; description: string }
    corporate: { label: string; description: string }
  }
  preview: {
    newMessage: string
    to: string
    toPlaceholder: string
    subject: string
    subjectValue: string
    regards: string
  }
  actions: {
    copySignature: string
    copying: string
    copyCode: string
    download: string
    toastCopySignatureSuccess: string
    toastCopySignatureError: string
    toastCopyCodeSuccess: string
    toastCopyCodeError: string
    toastDownload: string
  }
  codeView: {
    toggle: string
  }
  /**
   * Short labels embedded directly in the *generated signature HTML/plain-text*
   * (not just the app UI), so the signature content matches the selected language.
   */
  signatureLabels: {
    email: string
    phone: string
    mobile: string
    website: string
    address: string
  }
  faq: {
    heading: string
    items: FaqItem[]
  }
  footer: {
    tip: string
  }
}
