import type { AppTranslations } from '../types'

const ta: AppTranslations = {
  header: {
    badge: 'இலவசம் & பதிவு தேவையில்லை',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Gmail, Outlook, Apple Mail மற்றும் Thunderbird உடன் 100% இணக்கமான தொழில்முறை மின்னஞ்சல் கையொப்பங்களை உருவாக்குங்கள். படிவத்தை நிரப்பி, முடிவை நேரடியாகப் பார்த்து, உங்கள் மின்னஞ்சல் கிளையண்டில் நேரடியாக நகலெடுக்கவும்.',
  },
  languageSwitcher: {
    label: 'மொழி',
  },
  form: {
    ariaLabel: 'கையொப்பத் தரவு படிவம்',
    sections: {
      general: { title: '1. பொதுவான தகவல்', description: 'பெயர், பதவி மற்றும் நிறுவனம்' },
      contact: { title: '2. தொடர்பு', description: 'மின்னஞ்சல், தொலைபேசி, இணையதளம் மற்றும் முகவரி' },
      media: {
        title: '3. ஊடகம் & சமூக வலைத்தளங்கள்',
        description: 'புகைப்படம், லோகோ மற்றும் சமூக சுயவிவரங்கள்',
      },
      design: {
        title: '4. வடிவமைப்பு & தனிப்பயனாக்கம்',
        description: 'வண்ணங்கள், எழுத்துரு மற்றும் தளவமைப்பு வார்ப்புரு',
      },
    },
    fields: {
      fullName: { label: 'முழுப் பெயர்', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'பதவி', placeholder: 'Senior Software Engineer' },
      company: { label: 'நிறுவனம் / அமைப்பு', placeholder: 'Acme Corp' },
      department: { label: 'துறை (விருப்பத்தேர்வு)', placeholder: 'தயாரிப்பு பொறியியல்' },
      email: { label: 'மின்னஞ்சல்', placeholder: 'you@company.com' },
      phone: { label: 'அலுவலக தொலைபேசி', placeholder: '+91 44 1234 5678' },
      mobile: { label: 'கைபேசி', placeholder: '+91 98765 43210' },
      website: {
        label: 'இணையதளம்',
        placeholder: 'https://www.company.com',
        hint: 'https:// முன்னொட்டு தானாக சேர்க்கப்படும்.',
      },
      address: { label: 'முகவரி', placeholder: 'முதன்மை சாலை, எண் 1' },
      city: { label: 'நகரம்', placeholder: 'சென்னை' },
      state: { label: 'மாநிலம்', placeholder: 'தமிழ்நாடு' },
      photoUrl: {
        label: 'சுயவிவரப் புகைப்படம் அல்லது நிறுவன லோகோவின் URL',
        placeholder: 'https://...',
        hint: 'ஒரு முழுமையான URL ஐப் பயன்படுத்தவும் (https://). Base64 மற்றும் உறவுமுறை பாதைகள் மின்னஞ்சல்களில் வேலை செய்யாது.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'முதன்மை வண்ணம் (பெயர் & பிரிப்பான்கள்)' },
      secondaryColor: { label: 'இரண்டாம் நிலை வண்ணம் (இணைப்புகள் & சின்னங்கள்)' },
      fontFamily: { label: 'எழுத்துரு குடும்பம்' },
    },
    templateLabel: 'தளவமைப்பு வார்ப்புரு',
    colorField: {
      pickerAriaLabel: '{{label}} (வண்ணத் தேர்வி)',
      hexAriaLabel: '{{label}} (ஹெக்ஸ் மதிப்பு)',
    },
  },
  templates: {
    classic: {
      label: 'கிளாசிக் கிடைமட்டம்',
      description: 'இடதுபுறம் புகைப்படம், செங்குத்து பிரிப்பான் மற்றும் வலதுபுறம் விவரங்கள்.',
    },
    minimal: {
      label: 'மினிமலிஸ்ட் செங்குத்து',
      description: 'புகைப்படம் இல்லாமல், பிரிப்பான்களுடன் ஒரு சுருக்கமான வரியில் தரவு.',
    },
    corporate: {
      label: 'நேர்த்தியான கார்ப்பரேட்',
      description: 'மேலே லோகோ, பெயர் முக்கியத்துவம் மற்றும் சமூக வலைத்தள பேட்ஜ்கள்.',
    },
  },
  preview: {
    newMessage: 'புதிய செய்தி',
    to: 'பெறுநர்:',
    toPlaceholder: 'recipient@email.com',
    subject: 'பொருள்:',
    subjectValue: 'வணக்கம்!',
    regards: 'அன்புடன்,',
  },
  actions: {
    copySignature: 'கையொப்பத்தை கிளிப்போர்டுக்கு நகலெடுக்கவும்',
    copying: 'நகலெடுக்கப்படுகிறது…',
    copyCode: 'மூல HTML குறியீட்டை நகலெடுக்கவும்',
    download: '.html கோப்பைப் பதிவிறக்கவும்',
    toastCopySignatureSuccess:
      'கையொப்பம் நகலெடுக்கப்பட்டது! உங்கள் மின்னஞ்சல் அமைப்புகளில் (Ctrl/Cmd+V) ஒட்டவும்.',
    toastCopySignatureError:
      'தானாக நகலெடுக்க முடியவில்லை. "மூல HTML குறியீட்டை நகலெடுக்கவும்" பொத்தானை முயற்சிக்கவும்.',
    toastCopyCodeSuccess: 'HTML குறியீடு கிளிப்போர்டுக்கு நகலெடுக்கப்பட்டது!',
    toastCopyCodeError:
      'குறியீட்டை நகலெடுக்க முடியவில்லை. கீழே உள்ள பலகத்திலிருந்து கைமுறையாக நகலெடுக்கவும்.',
    toastDownload: '{{file}} பதிவிறக்கப்படுகிறது…',
  },
  codeView: {
    toggle: 'உருவாக்கப்பட்ட HTML குறியீட்டைப் பார்க்கவும்',
  },
  signatureLabels: {
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி',
    mobile: 'கைபேசி',
    website: 'தளம்',
    address: 'முகவரி',
  },
  faq: {
    heading: 'HTML மின்னஞ்சல் கையொப்பங்கள் பற்றிய அடிக்கடி கேட்கப்படும் கேள்விகள்',
    items: [
      {
        question: 'கையொப்பம் Gmail, Outlook, Apple Mail மற்றும் Thunderbird இல் வேலை செய்யுமா?',
        answer:
          'ஆம். உருவாக்கப்பட்ட HTML முழுவதும் இன்லைன் பாணிகளுடன் அட்டவணைகளை அடிப்படையாகக் கொண்டது, CSS வகுப்புகள், <style> தொகுதிகள், Flexbox அல்லது Grid இல்லாமல் — இவை Gmail நீக்கும் மற்றும் Outlook (Word) இன் ரெண்டரிங் இன்ஜின் ஆதரிக்காத தொழில்நுட்பங்கள்.',
      },
      {
        question: 'நான் ஏன் Base64 புகைப்படத்தைப் பயன்படுத்த முடியாது?',
        answer:
          'Gmail போன்ற கிளையண்டுகள் பாதுகாப்பு காரணங்களுக்காக உட்பொதிக்கப்பட்ட Base64 படங்களைத் தடுக்கின்றன, மேலும் பெரும்பாலான வெப்மெயில் சேவைகள் ஒட்டும்போது இந்த வகையான தரவைப் பாதுகாக்காது. அதனால்தான் படங்கள் மற்றும் லோகோக்களுக்கு எப்போதும் ஒரு முழுமையான URL (https://) தேவை.',
      },
      {
        question: 'எனது மின்னஞ்சல் கிளையண்டில் கையொப்பத்தை எவ்வாறு ஒட்டுவது?',
        answer:
          '"கையொப்பத்தை கிளிப்போர்டுக்கு நகலெடுக்கவும்" என்பதைக் கிளிக் செய்து, உங்கள் மின்னஞ்சல் வழங்குநரின் கையொப்ப அமைப்புகளைத் திறந்து, Ctrl+V (அல்லது Mac இல் Cmd+V) மூலம் ஒட்டவும். வண்ணங்கள், அட்டவணை மற்றும் இணைப்புகள் பாதுகாக்கப்படும்.',
      },
      {
        question: 'பின்னர் பயன்படுத்த குறியீட்டைப் பதிவிறக்கலாமா?',
        answer:
          'ஆம், ஒரு உள்ளூர் நகலைச் சேமிக்க ".html கோப்பைப் பதிவிறக்கவும்" பொத்தானை, அல்லது மூலக் குறியீட்டை எந்த எடிட்டரிலும் ஒட்ட "மூல HTML குறியீட்டை நகலெடுக்கவும்" பயன்படுத்தவும்.',
      },
    ],
  },
  footer: {
    tip: 'குறிப்பு: நகலெடுக்கப்பட்ட கையொப்பத்தை நேரடியாக Gmail, Outlook, Apple Mail அல்லது Thunderbird இன் கையொப்ப எடிட்டரில் ஒட்டவும் — வண்ணங்கள், அட்டவணை மற்றும் இணைப்புகள் பாதுகாக்கப்படும்.',
  },
}

export default ta
