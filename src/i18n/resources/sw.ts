import type { AppTranslations } from '../types'

const sw: AppTranslations = {
  header: {
    badge: 'Bure na bila usajili',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Tengeneza saini za barua pepe za kitaalamu, zinazoendana 100% na Gmail, Outlook, Apple Mail na Thunderbird. Jaza fomu, ona matokeo kwa wakati halisi kisha unakili moja kwa moja kwenye programu yako ya barua pepe.',
  },
  languageSwitcher: {
    label: 'Lugha',
  },
  form: {
    ariaLabel: 'Fomu ya data ya saini',
    sections: {
      general: { title: '1. Taarifa za jumla', description: 'Jina, cheo na kampuni' },
      contact: { title: '2. Mawasiliano', description: 'Barua pepe, simu, tovuti na anwani' },
      media: {
        title: '3. Vyombo vya habari na mitandao ya kijamii',
        description: 'Picha, nembo na wasifu wa mitandao',
      },
      design: { title: '4. Muundo na ubinafsishaji', description: 'Rangi, fonti na kiolezo cha mpangilio' },
    },
    fields: {
      fullName: { label: 'Jina kamili', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Cheo', placeholder: 'Senior Software Engineer' },
      company: { label: 'Kampuni / Shirika', placeholder: 'Acme Corp' },
      department: { label: 'Idara (si lazima)', placeholder: 'Uhandisi wa Bidhaa' },
      email: { label: 'Barua pepe', placeholder: 'wewe@kampuni.com' },
      phone: { label: 'Simu ya ofisini', placeholder: '+254 20 123 4567' },
      mobile: { label: 'Simu ya mkononi', placeholder: '+254 712 345 678' },
      website: {
        label: 'Tovuti',
        placeholder: 'https://www.kampuni.com',
        hint: 'Kiambishi https:// kinaongezwa kiotomatiki.',
      },
      address: { label: 'Anwani', placeholder: 'Barabara Kuu, Na. 1' },
      city: { label: 'Jiji', placeholder: 'Nairobi' },
      state: { label: 'Mkoa', placeholder: 'Nairobi' },
      photoUrl: {
        label: 'URL ya picha ya wasifu au nembo ya kampuni',
        placeholder: 'https://...',
        hint: 'Tumia URL kamili (https://). Base64 na njia za uhusiano hazifanyi kazi kwenye barua pepe.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Rangi kuu (jina na vitenganishi)' },
      secondaryColor: { label: 'Rangi ya pili (viungo na aikoni)' },
      fontFamily: { label: 'Aina ya fonti' },
    },
    templateLabel: 'Kiolezo cha mpangilio',
    colorField: {
      pickerAriaLabel: '{{label}} (kichagua rangi)',
      hexAriaLabel: '{{label}} (thamani ya hex)',
    },
  },
  templates: {
    classic: {
      label: 'Classic Mlalo',
      description: 'Picha upande wa kushoto na mgawanyo wima, maelezo upande wa kulia.',
    },
    minimal: {
      label: 'Minimalist Wima',
      description: 'Bila picha, data katika mstari mmoja mfupi wenye vitenganishi.',
    },
    corporate: {
      label: 'Kampuni Nadhifu',
      description: 'Nembo juu, jina likiwa wazi na beji za mitandao ya kijamii.',
    },
  },
  preview: {
    newMessage: 'Ujumbe mpya',
    to: 'Kwa:',
    toPlaceholder: 'mpokeaji@email.com',
    subject: 'Mada:',
    subjectValue: 'Habari!',
    regards: 'Wako,',
  },
  actions: {
    copySignature: 'Nakili saini kwenye ubao wa kunakili',
    copying: 'Inanakili…',
    copyCode: 'Nakili msimbo ghafi wa HTML',
    download: 'Pakua faili la .html',
    toastCopySignatureSuccess:
      'Saini imenakiliwa! Bandika tu (Ctrl/Cmd+V) kwenye mipangilio ya barua pepe yako.',
    toastCopySignatureError:
      'Imeshindwa kunakili kiotomatiki. Jaribu kitufe cha "Nakili msimbo ghafi wa HTML".',
    toastCopyCodeSuccess: 'Msimbo wa HTML umenakiliwa kwenye ubao wa kunakili!',
    toastCopyCodeError: 'Imeshindwa kunakili msimbo. Nakili mwenyewe kutoka kwenye kidirisha kilicho chini.',
    toastDownload: 'Inapakua {{file}}…',
  },
  codeView: {
    toggle: 'Ona msimbo wa HTML uliotengenezwa',
  },
  signatureLabels: {
    email: 'Barua pepe',
    phone: 'Simu',
    mobile: 'Mkononi',
    website: 'Tovuti',
    address: 'Anwani',
  },
  faq: {
    heading: 'Maswali yanayoulizwa mara kwa mara kuhusu saini za barua pepe za HTML',
    items: [
      {
        question: 'Je, saini inafanya kazi katika Gmail, Outlook, Apple Mail na Thunderbird?',
        answer:
          'Ndiyo. Msimbo wa HTML uliotengenezwa unategemea majedwali kwa asilimia 100 yenye mitindo ya ndani, bila madarasa ya CSS, vizuizi vya <style>, Flexbox au Grid — teknolojia ambazo Gmail huziondoa na injini ya uonyeshaji ya Outlook (Word) haziungi mkono.',
      },
      {
        question: 'Kwa nini siwezi kutumia picha ya Base64?',
        answer:
          'Programu kama Gmail huzuia picha za Base64 zilizopachikwa kwa sababu za usalama, na huduma nyingi za barua pepe mtandaoni hazihifadhi aina hii ya data wakati wa kubandika. Ndiyo maana tunahitaji daima URL kamili (https://) kwa picha na nembo.',
      },
      {
        question: 'Ninabandikaje saini kwenye programu yangu ya barua pepe?',
        answer:
          'Bofya "Nakili saini kwenye ubao wa kunakili", fungua mipangilio ya saini ya mtoa huduma wako wa barua pepe kisha bandika kwa Ctrl+V (au Cmd+V kwenye Mac). Rangi, jedwali na viungo vitahifadhiwa.',
      },
      {
        question: 'Je, ninaweza kupakua msimbo kutumia baadaye?',
        answer:
          'Ndiyo, tumia kitufe cha "Pakua faili la .html" kuhifadhi nakala ya ndani, au "Nakili msimbo ghafi wa HTML" kubandika msimbo chanzi kwenye kihariri chochote.',
      },
    ],
  },
  footer: {
    tip: 'Kidokezo: bandika saini iliyonakiliwa moja kwa moja kwenye kihariri cha saini cha Gmail, Outlook, Apple Mail au Thunderbird — rangi, jedwali na viungo vitahifadhiwa.',
  },
}

export default sw
