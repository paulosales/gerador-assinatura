import type { AppTranslations } from '../types'

const hi: AppTranslations = {
  header: {
    badge: 'मुफ़्त और बिना पंजीकरण के',
    title: 'HTML Email Signature Generator',
    subtitle:
      'पेशेवर ई-मेल हस्ताक्षर बनाएं, जो Gmail, Outlook, Apple Mail और Thunderbird के साथ 100% संगत हैं। फ़ॉर्म भरें, नतीजा रीयल-टाइम में देखें और इसे सीधे अपने ई-मेल क्लाइंट में कॉपी करें।',
  },
  languageSwitcher: {
    label: 'भाषा',
  },
  form: {
    ariaLabel: 'हस्ताक्षर डेटा फ़ॉर्म',
    sections: {
      general: { title: '1. सामान्य जानकारी', description: 'नाम, पद और कंपनी' },
      contact: { title: '2. संपर्क', description: 'ई-मेल, फ़ोन, वेबसाइट और पता' },
      media: { title: '3. मीडिया और सोशल नेटवर्क', description: 'फ़ोटो, लोगो और सोशल प्रोफ़ाइल' },
      design: { title: '4. डिज़ाइन और अनुकूलन', description: 'रंग, फ़ॉन्ट और लेआउट टेम्पलेट' },
    },
    fields: {
      fullName: { label: 'पूरा नाम', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'पद / शीर्षक', placeholder: 'Senior Software Engineer' },
      company: { label: 'कंपनी / संगठन', placeholder: 'Acme Corp' },
      department: { label: 'विभाग (वैकल्पिक)', placeholder: 'उत्पाद इंजीनियरिंग' },
      email: { label: 'ई-मेल', placeholder: 'you@company.com' },
      phone: { label: 'व्यावसायिक फ़ोन', placeholder: '+91 11 2345 6789' },
      mobile: { label: 'मोबाइल', placeholder: '+91 98765 43210' },
      website: {
        label: 'वेबसाइट',
        placeholder: 'https://www.company.com',
        hint: 'https:// प्रीफ़िक्स स्वतः जोड़ा जाता है।',
      },
      address: { label: 'पता', placeholder: 'मेन रोड, नंबर 1' },
      city: { label: 'शहर', placeholder: 'मुंबई' },
      state: { label: 'राज्य', placeholder: 'महाराष्ट्र' },
      photoUrl: {
        label: 'प्रोफ़ाइल फ़ोटो या कंपनी लोगो का URL',
        placeholder: 'https://...',
        hint: 'एक पूर्ण (absolute) URL का उपयोग करें (https://)। Base64 और सापेक्ष (relative) पथ ई-मेल में काम नहीं करते।',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'प्राथमिक रंग (नाम और विभाजक)' },
      secondaryColor: { label: 'द्वितीयक रंग (लिंक और आइकन)' },
      fontFamily: { label: 'फ़ॉन्ट परिवार' },
    },
    templateLabel: 'लेआउट टेम्पलेट',
    colorField: {
      pickerAriaLabel: '{{label}} (रंग चयनकर्ता)',
      hexAriaLabel: '{{label}} (हेक्स मान)',
    },
  },
  templates: {
    classic: {
      label: 'क्लासिक हॉरिज़ॉन्टल',
      description: 'बाईं ओर फ़ोटो, वर्टिकल विभाजक और दाईं ओर विवरण।',
    },
    minimal: {
      label: 'मिनिमलिस्ट वर्टिकल',
      description: 'फ़ोटो के बिना, विभाजकों के साथ एक संक्षिप्त पंक्ति में डेटा।',
    },
    corporate: {
      label: 'एलिगेंट कॉर्पोरेट',
      description: 'ऊपर लोगो, नाम प्रमुखता से और सोशल नेटवर्क बैज।',
    },
  },
  preview: {
    newMessage: 'नया संदेश',
    to: 'प्रति:',
    toPlaceholder: 'recipient@email.com',
    subject: 'विषय:',
    subjectValue: 'नमस्ते!',
    regards: 'सादर,',
  },
  actions: {
    copySignature: 'हस्ताक्षर को क्लिपबोर्ड पर कॉपी करें',
    copying: 'कॉपी हो रहा है…',
    copyCode: 'कच्चा HTML कोड कॉपी करें',
    download: '.html फ़ाइल डाउनलोड करें',
    toastCopySignatureSuccess:
      'हस्ताक्षर कॉपी हो गया! बस इसे अपनी ई-मेल सेटिंग्स में पेस्ट (Ctrl/Cmd+V) करें।',
    toastCopySignatureError: 'स्वतः कॉपी नहीं हो सका। "कच्चा HTML कोड कॉपी करें" बटन आज़माएं।',
    toastCopyCodeSuccess: 'HTML कोड क्लिपबोर्ड पर कॉपी हो गया!',
    toastCopyCodeError: 'कोड कॉपी नहीं हो सका। इसे नीचे दिए गए पैनल से मैन्युअल रूप से कॉपी करें।',
    toastDownload: '{{file}} डाउनलोड हो रहा है…',
  },
  codeView: {
    toggle: 'जनरेट किया गया HTML कोड देखें',
  },
  signatureLabels: {
    email: 'ई-मेल',
    phone: 'फ़ोन',
    mobile: 'मोबाइल',
    website: 'साइट',
    address: 'पता',
  },
  faq: {
    heading: 'HTML ई-मेल हस्ताक्षरों के बारे में अक्सर पूछे जाने वाले प्रश्न',
    items: [
      {
        question: 'क्या हस्ताक्षर Gmail, Outlook, Apple Mail और Thunderbird में काम करता है?',
        answer:
          'हां। जनरेट किया गया HTML पूरी तरह से इनलाइन स्टाइल वाली तालिकाओं पर आधारित है, बिना CSS क्लास, <style> ब्लॉक, Flexbox या Grid के — ये वे तकनीकें हैं जिन्हें Gmail हटा देता है और जिन्हें Outlook (Word) का रेंडरिंग इंजन सपोर्ट नहीं करता।',
      },
      {
        question: 'मैं Base64 फ़ोटो का उपयोग क्यों नहीं कर सकता?',
        answer:
          'Gmail जैसे क्लाइंट सुरक्षा कारणों से एम्बेडेड Base64 छवियों को ब्लॉक कर देते हैं, और अधिकांश वेबमेल सेवाएं पेस्ट करते समय इस प्रकार का डेटा सुरक्षित नहीं रखतीं। इसीलिए हमें फ़ोटो और लोगो के लिए हमेशा एक पूर्ण URL (https://) चाहिए होता है।',
      },
      {
        question: 'मैं हस्ताक्षर को अपने ई-मेल क्लाइंट में कैसे पेस्ट करूं?',
        answer:
          '"हस्ताक्षर को क्लिपबोर्ड पर कॉपी करें" पर क्लिक करें, अपने ई-मेल प्रदाता की हस्ताक्षर सेटिंग्स खोलें और Ctrl+V (या Mac पर Cmd+V) से पेस्ट करें। रंग, तालिका और लिंक सुरक्षित रहते हैं।',
      },
      {
        question: 'क्या मैं बाद में उपयोग के लिए कोड डाउनलोड कर सकता हूं?',
        answer:
          'हां, स्थानीय प्रति सहेजने के लिए ".html फ़ाइल डाउनलोड करें" बटन का उपयोग करें, या किसी भी एडिटर में स्रोत कोड पेस्ट करने के लिए "कच्चा HTML कोड कॉपी करें" का उपयोग करें।',
      },
    ],
  },
  footer: {
    tip: 'सुझाव: कॉपी किए गए हस्ताक्षर को सीधे Gmail, Outlook, Apple Mail या Thunderbird के हस्ताक्षर संपादक में पेस्ट करें — रंग, तालिका और लिंक सुरक्षित रहते हैं।',
  },
}

export default hi
