import type { AppTranslations } from '../types'

const de: AppTranslations = {
  header: {
    badge: 'Kostenlos & ohne Anmeldung',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Erstellen Sie professionelle E-Mail-Signaturen, die zu 100% mit Gmail, Outlook, Apple Mail und Thunderbird kompatibel sind. Füllen Sie das Formular aus, sehen Sie das Ergebnis in Echtzeit und kopieren Sie es direkt in Ihr E-Mail-Programm.',
  },
  languageSwitcher: {
    label: 'Sprache',
  },
  form: {
    ariaLabel: 'Formular für die Signaturdaten',
    sections: {
      general: { title: '1. Allgemeine Informationen', description: 'Name, Position und Unternehmen' },
      contact: { title: '2. Kontakt', description: 'E-Mail, Telefon, Website und Adresse' },
      media: { title: '3. Medien & soziale Netzwerke', description: 'Foto, Logo und soziale Profile' },
      design: { title: '4. Design & Anpassung', description: 'Farben, Schriftart und Layout-Vorlage' },
    },
    fields: {
      fullName: { label: 'Vollständiger Name', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Position / Titel', placeholder: 'Senior Software Engineer' },
      company: { label: 'Unternehmen / Organisation', placeholder: 'Acme Corp' },
      department: { label: 'Abteilung (optional)', placeholder: 'Produktentwicklung' },
      email: { label: 'E-Mail', placeholder: 'sie@unternehmen.com' },
      phone: { label: 'Geschäftliches Telefon', placeholder: '+49 30 1234567' },
      mobile: { label: 'Mobiltelefon', placeholder: '+49 171 1234567' },
      website: {
        label: 'Website',
        placeholder: 'https://www.unternehmen.com',
        hint: 'Das Präfix https:// wird automatisch hinzugefügt.',
      },
      address: { label: 'Adresse', placeholder: 'Musterstraße 1' },
      city: { label: 'Stadt', placeholder: 'Berlin' },
      state: { label: 'Bundesland', placeholder: 'BE' },
      photoUrl: {
        label: 'URL des Profilfotos oder Firmenlogos',
        placeholder: 'https://...',
        hint: 'Verwenden Sie eine absolute URL (https://). Base64 und relative Pfade funktionieren in E-Mails nicht.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Primärfarbe (Name & Trennlinien)' },
      secondaryColor: { label: 'Sekundärfarbe (Links & Symbole)' },
      fontFamily: { label: 'Schriftfamilie' },
    },
    templateLabel: 'Layout-Vorlage',
    colorField: {
      pickerAriaLabel: '{{label}} (Farbwähler)',
      hexAriaLabel: '{{label}} (Hex-Wert)',
    },
  },
  templates: {
    classic: {
      label: 'Klassisch Horizontal',
      description: 'Foto links mit vertikaler Trennlinie und Angaben rechts.',
    },
    minimal: {
      label: 'Minimalistisch Vertikal',
      description: 'Kein Foto, Daten in einer kompakten Zeile mit Trennzeichen.',
    },
    corporate: {
      label: 'Elegant Corporate',
      description: 'Logo oben, Name im Fokus und Badges für soziale Netzwerke.',
    },
  },
  preview: {
    newMessage: 'Neue Nachricht',
    to: 'An:',
    toPlaceholder: 'empfaenger@email.com',
    subject: 'Betreff:',
    subjectValue: 'Hallo!',
    regards: 'Mit freundlichen Grüßen,',
  },
  actions: {
    copySignature: 'Signatur in die Zwischenablage kopieren',
    copying: 'Wird kopiert…',
    copyCode: 'Rohen HTML-Code kopieren',
    download: '.html-Datei herunterladen',
    toastCopySignatureSuccess:
      'Signatur kopiert! Fügen Sie sie einfach (Strg/Cmd+V) in Ihre E-Mail-Einstellungen ein.',
    toastCopySignatureError:
      'Automatisches Kopieren nicht möglich. Versuchen Sie die Schaltfläche „Rohen HTML-Code kopieren“.',
    toastCopyCodeSuccess: 'HTML-Code in die Zwischenablage kopiert!',
    toastCopyCodeError:
      'Der Code konnte nicht kopiert werden. Kopieren Sie ihn manuell aus dem Bereich unten.',
    toastDownload: '{{file}} wird heruntergeladen…',
  },
  codeView: {
    toggle: 'Generierten HTML-Code anzeigen',
  },
  signatureLabels: {
    email: 'E-Mail',
    phone: 'Tel',
    mobile: 'Mobil',
    website: 'Web',
    address: 'Adresse',
  },
  faq: {
    heading: 'Häufig gestellte Fragen zu HTML-E-Mail-Signaturen',
    items: [
      {
        question: 'Funktioniert die Signatur in Gmail, Outlook, Apple Mail und Thunderbird?',
        answer:
          'Ja. Der generierte HTML-Code basiert zu 100% auf Tabellen mit Inline-Stilen, ohne CSS-Klassen, <style>-Blöcke, Flexbox oder Grid — die Technologien, die Gmail entfernt und die die Rendering-Engine von Outlook (Word) nicht unterstützt.',
      },
      {
        question: 'Warum kann ich kein Base64-Foto verwenden?',
        answer:
          'Clients wie Gmail blockieren eingebettete Base64-Bilder aus Sicherheitsgründen, und die meisten Webmail-Anbieter behalten diese Art von Daten beim Einfügen nicht bei. Deshalb benötigen wir für Fotos und Logos immer eine absolute URL (https://).',
      },
      {
        question: 'Wie füge ich die Signatur in mein E-Mail-Programm ein?',
        answer:
          'Klicken Sie auf „Signatur in die Zwischenablage kopieren“, öffnen Sie die Signatureinstellungen Ihres E-Mail-Anbieters und fügen Sie sie mit Strg+V (oder Cmd+V auf dem Mac) ein. Farben, Tabelle und Links bleiben erhalten.',
      },
      {
        question: 'Kann ich den Code herunterladen, um ihn später zu verwenden?',
        answer:
          'Ja, verwenden Sie die Schaltfläche „.html-Datei herunterladen“, um eine lokale Kopie zu speichern, oder „Rohen HTML-Code kopieren“, um den Quellcode in einen beliebigen Editor einzufügen.',
      },
    ],
  },
  footer: {
    tip: 'Tipp: Fügen Sie die kopierte Signatur direkt in den Signatureditor von Gmail, Outlook, Apple Mail oder Thunderbird ein — Farben, Tabelle und Links bleiben erhalten.',
  },
}

export default de
