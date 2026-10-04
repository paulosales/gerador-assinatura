import type { AppTranslations } from '../types'

const fr: AppTranslations = {
  header: {
    badge: 'Gratuit & sans inscription',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Créez des signatures e-mail professionnelles, 100% compatibles avec Gmail, Outlook, Apple Mail et Thunderbird. Remplissez le formulaire, visualisez le résultat en temps réel et copiez-le directement dans votre client de messagerie.',
  },
  languageSwitcher: {
    label: 'Langue',
  },
  form: {
    ariaLabel: 'Formulaire des données de la signature',
    sections: {
      general: { title: '1. Informations générales', description: 'Nom, poste et entreprise' },
      contact: { title: '2. Contact', description: 'E-mail, téléphone, site web et adresse' },
      media: { title: '3. Médias et réseaux sociaux', description: 'Photo, logo et profils sociaux' },
      design: {
        title: '4. Design et personnalisation',
        description: 'Couleurs, police et modèle de mise en page',
      },
    },
    fields: {
      fullName: { label: 'Nom complet', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Poste / Titre', placeholder: 'Senior Software Engineer' },
      company: { label: 'Entreprise / Organisation', placeholder: 'Acme Corp' },
      department: { label: 'Département (facultatif)', placeholder: 'Ingénierie Produit' },
      email: { label: 'E-mail', placeholder: 'vous@entreprise.com' },
      phone: { label: 'Téléphone professionnel', placeholder: '+33 1 23 45 67 89' },
      mobile: { label: 'Mobile', placeholder: '+33 6 12 34 56 78' },
      website: {
        label: 'Site web',
        placeholder: 'https://www.entreprise.com',
        hint: 'Le préfixe https:// est ajouté automatiquement.',
      },
      address: { label: 'Adresse', placeholder: '1 rue de la Paix' },
      city: { label: 'Ville', placeholder: 'Paris' },
      state: { label: 'Région', placeholder: 'IDF' },
      photoUrl: {
        label: 'URL de la photo de profil ou du logo',
        placeholder: 'https://...',
        hint: 'Utilisez une URL absolue (https://). Le Base64 et les chemins relatifs ne fonctionnent pas dans les e-mails.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Couleur principale (nom et séparateurs)' },
      secondaryColor: { label: 'Couleur secondaire (liens et icônes)' },
      fontFamily: { label: 'Police de caractères' },
    },
    templateLabel: 'Modèle de mise en page',
    colorField: {
      pickerAriaLabel: '{{label}} (sélecteur visuel)',
      hexAriaLabel: '{{label}} (valeur hexadécimale)',
    },
  },
  templates: {
    classic: {
      label: 'Classique Horizontal',
      description: 'Photo à gauche avec un séparateur vertical et les informations à droite.',
    },
    minimal: {
      label: 'Minimaliste Vertical',
      description: 'Sans photo, données sur une seule ligne compacte avec séparateurs.',
    },
    corporate: {
      label: 'Corporatif Élégant',
      description: 'Logo en haut, nom mis en avant et badges pour les réseaux sociaux.',
    },
  },
  preview: {
    newMessage: 'Nouveau message',
    to: 'À :',
    toPlaceholder: 'destinataire@email.com',
    subject: 'Objet :',
    subjectValue: 'Bonjour !',
    regards: 'Cordialement,',
  },
  actions: {
    copySignature: 'Copier la signature dans le presse-papiers',
    copying: 'Copie en cours…',
    copyCode: 'Copier le code HTML brut',
    download: 'Télécharger le fichier .html',
    toastCopySignatureSuccess:
      'Signature copiée ! Il ne vous reste qu\u2019à la coller (Ctrl/Cmd+V) dans les paramètres de votre e-mail.',
    toastCopySignatureError:
      'Impossible de copier automatiquement. Essayez le bouton "Copier le code HTML brut".',
    toastCopyCodeSuccess: 'Code HTML copié dans le presse-papiers !',
    toastCopyCodeError: 'Impossible de copier le code. Copiez-le manuellement depuis le panneau ci-dessous.',
    toastDownload: 'Téléchargement de {{file}}…',
  },
  codeView: {
    toggle: 'Voir le code HTML généré',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tél',
    mobile: 'Mobile',
    website: 'Site',
    address: 'Adresse',
  },
  faq: {
    heading: 'Questions fréquentes sur les signatures e-mail en HTML',
    items: [
      {
        question: 'La signature fonctionne-t-elle dans Gmail, Outlook, Apple Mail et Thunderbird ?',
        answer:
          'Oui. Le HTML généré est 100% basé sur des tableaux avec des styles en ligne, sans classes CSS, ni balises <style>, Flexbox ou Grid — les technologies que Gmail supprime et que le moteur de rendu d\u2019Outlook (Word) ne prend pas en charge.',
      },
      {
        question: 'Pourquoi ne puis-je pas utiliser une photo en Base64 ?',
        answer:
          'Des clients comme Gmail bloquent les images intégrées en Base64 pour des raisons de sécurité, et la plupart des webmails ne conservent pas ce type de données lors du collage. C\u2019est pourquoi nous exigeons toujours une URL absolue (https://) pour les photos et les logos.',
      },
      {
        question: 'Comment coller la signature dans mon client de messagerie ?',
        answer:
          'Cliquez sur "Copier la signature dans le presse-papiers", ouvrez les paramètres de signature de votre fournisseur de messagerie et collez avec Ctrl+V (ou Cmd+V sur Mac). Les couleurs, le tableau et les liens sont conservés.',
      },
      {
        question: 'Puis-je télécharger le code pour l\u2019utiliser plus tard ?',
        answer:
          'Oui, utilisez le bouton "Télécharger le fichier .html" pour enregistrer une copie locale, ou "Copier le code HTML brut" pour coller le code source dans n\u2019importe quel éditeur.',
      },
    ],
  },
  footer: {
    tip: 'Astuce : collez la signature copiée directement dans l\u2019éditeur de signature de Gmail, Outlook, Apple Mail ou Thunderbird — les couleurs, le tableau et les liens sont conservés.',
  },
}

export default fr
