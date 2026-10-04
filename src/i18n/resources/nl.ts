import type { AppTranslations } from '../types'

const nl: AppTranslations = {
  header: {
    badge: 'Gratis & zonder registratie',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Maak professionele e-mailhandtekeningen, 100% compatibel met Gmail, Outlook, Apple Mail en Thunderbird. Vul het formulier in, bekijk het resultaat in realtime en kopieer het rechtstreeks naar je e-mailprogramma.',
  },
  languageSwitcher: {
    label: 'Taal',
  },
  form: {
    ariaLabel: 'Formulier voor handtekeninggegevens',
    sections: {
      general: { title: '1. Algemene informatie', description: 'Naam, functie en bedrijf' },
      contact: { title: '2. Contact', description: 'E-mail, telefoon, website en adres' },
      media: { title: '3. Media & sociale netwerken', description: 'Foto, logo en sociale profielen' },
      design: { title: '4. Ontwerp & aanpassing', description: 'Kleuren, lettertype en lay-outsjabloon' },
    },
    fields: {
      fullName: { label: 'Volledige naam', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Functie / Titel', placeholder: 'Senior Software Engineer' },
      company: { label: 'Bedrijf / Organisatie', placeholder: 'Acme Corp' },
      department: { label: 'Afdeling (optioneel)', placeholder: 'Productontwikkeling' },
      email: { label: 'E-mail', placeholder: 'jij@bedrijf.com' },
      phone: { label: 'Zakelijke telefoon', placeholder: '+31 20 123 4567' },
      mobile: { label: 'Mobiel', placeholder: '+31 6 1234 5678' },
      website: {
        label: 'Website',
        placeholder: 'https://www.bedrijf.com',
        hint: 'Het voorvoegsel https:// wordt automatisch toegevoegd.',
      },
      address: { label: 'Adres', placeholder: 'Hoofdstraat 1' },
      city: { label: 'Stad', placeholder: 'Amsterdam' },
      state: { label: 'Provincie', placeholder: 'NH' },
      photoUrl: {
        label: 'URL van profielfoto of bedrijfslogo',
        placeholder: 'https://...',
        hint: 'Gebruik een absolute URL (https://). Base64 en relatieve paden werken niet in e-mails.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Primaire kleur (naam & scheidingslijnen)' },
      secondaryColor: { label: 'Secundaire kleur (links & iconen)' },
      fontFamily: { label: 'Lettertypefamilie' },
    },
    templateLabel: 'Lay-outsjabloon',
    colorField: {
      pickerAriaLabel: '{{label}} (kleurkiezer)',
      hexAriaLabel: '{{label}} (hexwaarde)',
    },
  },
  templates: {
    classic: {
      label: 'Klassiek Horizontaal',
      description: 'Foto links met verticale scheidingslijn en gegevens rechts.',
    },
    minimal: {
      label: 'Minimalistisch Verticaal',
      description: 'Geen foto, gegevens op één compacte regel met scheidingstekens.',
    },
    corporate: {
      label: 'Elegant Zakelijk',
      description: 'Logo bovenaan, naam in de focus en badges voor sociale netwerken.',
    },
  },
  preview: {
    newMessage: 'Nieuw bericht',
    to: 'Aan:',
    toPlaceholder: 'ontvanger@email.com',
    subject: 'Onderwerp:',
    subjectValue: 'Hallo!',
    regards: 'Met vriendelijke groet,',
  },
  actions: {
    copySignature: 'Handtekening naar klembord kopiëren',
    copying: 'Bezig met kopiëren…',
    copyCode: 'Ruwe HTML-code kopiëren',
    download: '.html-bestand downloaden',
    toastCopySignatureSuccess:
      'Handtekening gekopieerd! Plak hem (Ctrl/Cmd+V) in de instellingen van je e-mailprogramma.',
    toastCopySignatureError: 'Automatisch kopiëren is mislukt. Probeer de knop "Ruwe HTML-code kopiëren".',
    toastCopyCodeSuccess: 'HTML-code naar klembord gekopieerd!',
    toastCopyCodeError: 'Kon de code niet kopiëren. Kopieer deze handmatig vanuit het onderstaande paneel.',
    toastDownload: '{{file}} wordt gedownload…',
  },
  codeView: {
    toggle: 'Gegenereerde HTML-code bekijken',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'Mobiel',
    website: 'Site',
    address: 'Adres',
  },
  faq: {
    heading: 'Veelgestelde vragen over HTML e-mailhandtekeningen',
    items: [
      {
        question: 'Werkt de handtekening in Gmail, Outlook, Apple Mail en Thunderbird?',
        answer:
          'Ja. De gegenereerde HTML is 100% gebaseerd op tabellen met inline stijlen, zonder CSS-klassen, <style>-blokken, Flexbox of Grid — de technologieën die Gmail verwijdert en die de rendering-engine van Outlook (Word) niet ondersteunt.',
      },
      {
        question: 'Waarom kan ik geen Base64-foto gebruiken?',
        answer:
          'Clients zoals Gmail blokkeren ingesloten Base64-afbeeldingen om veiligheidsredenen, en de meeste webmaildiensten bewaren dit soort gegevens niet bij het plakken. Daarom vereisen we altijd een absolute URL (https://) voor foto\u2019s en logo\u2019s.',
      },
      {
        question: 'Hoe plak ik de handtekening in mijn e-mailprogramma?',
        answer:
          'Klik op "Handtekening naar klembord kopiëren", open de handtekeninginstellingen van je e-mailprovider en plak met Ctrl+V (of Cmd+V op Mac). Kleuren, tabel en links blijven behouden.',
      },
      {
        question: 'Kan ik de code downloaden om later te gebruiken?',
        answer:
          'Ja, gebruik de knop ".html-bestand downloaden" om een lokale kopie op te slaan, of "Ruwe HTML-code kopiëren" om de broncode in een willekeurige editor te plakken.',
      },
    ],
  },
  footer: {
    tip: 'Tip: plak de gekopieerde handtekening rechtstreeks in de handtekeningeditor van Gmail, Outlook, Apple Mail of Thunderbird — kleuren, tabel en links blijven behouden.',
  },
}

export default nl
