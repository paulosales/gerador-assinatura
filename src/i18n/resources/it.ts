import type { AppTranslations } from '../types'

const it: AppTranslations = {
  header: {
    badge: 'Gratis e senza registrazione',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Crea firme e-mail professionali, compatibili al 100% con Gmail, Outlook, Apple Mail e Thunderbird. Compila il modulo, guarda il risultato in tempo reale e copialo direttamente nel tuo client di posta.',
  },
  languageSwitcher: {
    label: 'Lingua',
  },
  form: {
    ariaLabel: 'Modulo dei dati della firma',
    sections: {
      general: { title: '1. Informazioni generali', description: 'Nome, ruolo e azienda' },
      contact: { title: '2. Contatti', description: 'E-mail, telefono, sito web e indirizzo' },
      media: { title: '3. Media e social network', description: 'Foto, logo e profili social' },
      design: { title: '4. Design e personalizzazione', description: 'Colori, font e modello di layout' },
    },
    fields: {
      fullName: { label: 'Nome completo', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Ruolo / Titolo', placeholder: 'Senior Software Engineer' },
      company: { label: 'Azienda / Organizzazione', placeholder: 'Acme Corp' },
      department: { label: 'Reparto (opzionale)', placeholder: 'Ingegneria di Prodotto' },
      email: { label: 'E-mail', placeholder: 'tu@azienda.com' },
      phone: { label: 'Telefono aziendale', placeholder: '+39 02 1234 5678' },
      mobile: { label: 'Cellulare', placeholder: '+39 333 123 4567' },
      website: {
        label: 'Sito web',
        placeholder: 'https://www.azienda.com',
        hint: 'Il prefisso https:// viene aggiunto automaticamente.',
      },
      address: { label: 'Indirizzo', placeholder: 'Via Roma, 1' },
      city: { label: 'Città', placeholder: 'Milano' },
      state: { label: 'Provincia', placeholder: 'MI' },
      photoUrl: {
        label: 'URL della foto profilo o del logo',
        placeholder: 'https://...',
        hint: 'Usa un URL assoluto (https://). Base64 e percorsi relativi non funzionano nelle e-mail.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Colore primario (nome e divisori)' },
      secondaryColor: { label: 'Colore secondario (link e icone)' },
      fontFamily: { label: 'Famiglia tipografica' },
    },
    templateLabel: 'Modello di layout',
    colorField: {
      pickerAriaLabel: '{{label}} (selettore colore)',
      hexAriaLabel: '{{label}} (valore esadecimale)',
    },
  },
  templates: {
    classic: {
      label: 'Classico Orizzontale',
      description: 'Foto a sinistra con divisore verticale e dati a destra.',
    },
    minimal: {
      label: 'Minimalista Verticale',
      description: 'Senza foto, dati su un\u2019unica riga compatta con separatori.',
    },
    corporate: {
      label: 'Corporate Elegante',
      description: 'Logo in alto, nome in evidenza e badge per i social network.',
    },
  },
  preview: {
    newMessage: 'Nuovo messaggio',
    to: 'A:',
    toPlaceholder: 'destinatario@email.com',
    subject: 'Oggetto:',
    subjectValue: 'Ciao!',
    regards: 'Cordiali saluti,',
  },
  actions: {
    copySignature: 'Copia la firma negli appunti',
    copying: 'Copia in corso…',
    copyCode: 'Copia il codice HTML grezzo',
    download: 'Scarica il file .html',
    toastCopySignatureSuccess: 'Firma copiata! Incollala (Ctrl/Cmd+V) nelle impostazioni della tua e-mail.',
    toastCopySignatureError:
      'Impossibile copiare automaticamente. Prova il pulsante "Copia il codice HTML grezzo".',
    toastCopyCodeSuccess: 'Codice HTML copiato negli appunti!',
    toastCopyCodeError: 'Impossibile copiare il codice. Copialo manualmente dal pannello sottostante.',
    toastDownload: 'Download di {{file}} in corso…',
  },
  codeView: {
    toggle: 'Visualizza il codice HTML generato',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'Cellulare',
    website: 'Sito',
    address: 'Indirizzo',
  },
  faq: {
    heading: 'Domande frequenti sulle firme e-mail in HTML',
    items: [
      {
        question: 'La firma funziona in Gmail, Outlook, Apple Mail e Thunderbird?',
        answer:
          'Sì. L\u2019HTML generato si basa al 100% su tabelle con stili inline, senza classi CSS, blocchi <style>, Flexbox o Grid — le tecnologie che Gmail rimuove e che il motore di rendering di Outlook (Word) non supporta.',
      },
      {
        question: 'Perché non posso usare una foto in Base64?',
        answer:
          'Client come Gmail bloccano le immagini incorporate in Base64 per motivi di sicurezza e la maggior parte dei servizi webmail non conserva questo tipo di dati durante l\u2019incollaggio. Per questo richiediamo sempre un URL assoluto (https://) per foto e loghi.',
      },
      {
        question: 'Come incollo la firma nel mio client di posta?',
        answer:
          'Fai clic su "Copia la firma negli appunti", apri le impostazioni della firma del tuo provider di posta e incolla con Ctrl+V (o Cmd+V su Mac). Colori, tabella e link vengono mantenuti.',
      },
      {
        question: 'Posso scaricare il codice per usarlo in seguito?',
        answer:
          'Sì, usa il pulsante "Scarica il file .html" per salvare una copia locale, oppure "Copia il codice HTML grezzo" per incollare il codice sorgente in qualsiasi editor.',
      },
    ],
  },
  footer: {
    tip: 'Suggerimento: incolla la firma copiata direttamente nell\u2019editor di firme di Gmail, Outlook, Apple Mail o Thunderbird — colori, tabella e link vengono mantenuti.',
  },
}

export default it
