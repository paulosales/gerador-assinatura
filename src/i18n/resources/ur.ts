import type { AppTranslations } from '../types'

const ur: AppTranslations = {
  header: {
    badge: 'مفت اور بغیر رجسٹریشن کے',
    title: 'HTML Email Signature Generator',
    subtitle:
      'پیشہ ورانہ ای میل دستخط بنائیں، جو Gmail، Outlook، Apple Mail اور Thunderbird کے ساتھ 100% مطابقت رکھتے ہیں۔ فارم پُر کریں، نتیجہ حقیقی وقت میں دیکھیں اور اسے براہ راست اپنے ای میل کلائنٹ میں کاپی کریں۔',
  },
  languageSwitcher: {
    label: 'زبان',
  },
  form: {
    ariaLabel: 'دستخط کے ڈیٹا کا فارم',
    sections: {
      general: { title: '1۔ عمومی معلومات', description: 'نام، عہدہ اور کمپنی' },
      contact: { title: '2۔ رابطہ', description: 'ای میل، فون، ویب سائٹ اور پتہ' },
      media: { title: '3۔ میڈیا اور سوشل نیٹ ورکس', description: 'تصویر، لوگو اور سوشل پروفائلز' },
      design: { title: '4۔ ڈیزائن اور تخصیص', description: 'رنگ، فونٹ اور لے آؤٹ ٹیمپلیٹ' },
    },
    fields: {
      fullName: { label: 'پورا نام', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'عہدہ', placeholder: 'Senior Software Engineer' },
      company: { label: 'کمپنی / ادارہ', placeholder: 'Acme Corp' },
      department: { label: 'شعبہ (اختیاری)', placeholder: 'پروڈکٹ انجینئرنگ' },
      email: { label: 'ای میل', placeholder: 'you@company.com' },
      phone: { label: 'دفتری فون', placeholder: '+92 21 1234 5678' },
      mobile: { label: 'موبائل', placeholder: '+92 300 1234567' },
      website: {
        label: 'ویب سائٹ',
        placeholder: 'https://www.company.com',
        hint: 'پیش لفظ https:// خود بخود شامل کر دیا جاتا ہے۔',
      },
      address: { label: 'پتہ', placeholder: 'مین بلیوارڈ، نمبر 1' },
      city: { label: 'شہر', placeholder: 'کراچی' },
      state: { label: 'صوبہ', placeholder: 'سندھ' },
      photoUrl: {
        label: 'پروفائل تصویر یا کمپنی لوگو کا URL',
        placeholder: 'https://...',
        hint: 'ایک مطلق URL استعمال کریں (https://)۔ Base64 اور relative راستے ای میلز میں کام نہیں کرتے۔',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'بنیادی رنگ (نام اور تقسیم کار)' },
      secondaryColor: { label: 'ثانوی رنگ (لنکس اور آئیکونز)' },
      fontFamily: { label: 'فونٹ فیملی' },
    },
    templateLabel: 'لے آؤٹ ٹیمپلیٹ',
    colorField: {
      pickerAriaLabel: '{{label}} (رنگ منتخب کریں)',
      hexAriaLabel: '{{label}} (ہیکس ویلیو)',
    },
  },
  templates: {
    classic: {
      label: 'کلاسک افقی',
      description: 'بائیں جانب تصویر، عمودی تقسیم کار اور دائیں جانب تفصیلات۔',
    },
    minimal: {
      label: 'مینیمل عمودی',
      description: 'بغیر تصویر کے، ایک کمپیکٹ لائن میں معلومات اور علیحدگی کے نشانات۔',
    },
    corporate: {
      label: 'خوبصورت کارپوریٹ',
      description: 'اوپر لوگو، نمایاں نام اور سوشل نیٹ ورک بیجز۔',
    },
  },
  preview: {
    newMessage: 'نیا پیغام',
    to: 'بنام:',
    toPlaceholder: 'recipient@email.com',
    subject: 'موضوع:',
    subjectValue: 'سلام!',
    regards: 'نیک تمناؤں کے ساتھ،',
  },
  actions: {
    copySignature: 'دستخط کلپ بورڈ پر کاپی کریں',
    copying: 'کاپی ہو رہا ہے…',
    copyCode: 'خام HTML کوڈ کاپی کریں',
    download: '.html فائل ڈاؤن لوڈ کریں',
    toastCopySignatureSuccess: 'دستخط کاپی ہو گیا! اسے اپنی ای میل کی ترتیبات میں پیسٹ (Ctrl/Cmd+V) کریں۔',
    toastCopySignatureError: 'خودکار کاپی ممکن نہیں ہو سکی۔ "خام HTML کوڈ کاپی کریں" بٹن آزمائیں۔',
    toastCopyCodeSuccess: 'HTML کوڈ کلپ بورڈ پر کاپی ہو گیا!',
    toastCopyCodeError: 'کوڈ کاپی نہیں ہو سکا۔ اسے نیچے دیے گئے پینل سے دستی طور پر کاپی کریں۔',
    toastDownload: '{{file}} ڈاؤن لوڈ ہو رہی ہے…',
  },
  codeView: {
    toggle: 'تیار کردہ HTML کوڈ دیکھیں',
  },
  signatureLabels: {
    email: 'ای میل',
    phone: 'فون',
    mobile: 'موبائل',
    website: 'سائٹ',
    address: 'پتہ',
  },
  faq: {
    heading: 'HTML ای میل دستخطوں کے بارے میں اکثر پوچھے گئے سوالات',
    items: [
      {
        question: 'کیا دستخط Gmail، Outlook، Apple Mail اور Thunderbird میں کام کرتا ہے؟',
        answer:
          'جی ہاں۔ تیار کردہ HTML مکمل طور پر ٹیبلز اور ان لائن اسٹائلز پر مبنی ہے، بغیر CSS کلاسز، <style> بلاکس، Flexbox یا Grid کے — یہ وہ ٹیکنالوجیز ہیں جنہیں Gmail ہٹا دیتا ہے اور Outlook (Word) کا رینڈرنگ انجن سپورٹ نہیں کرتا۔',
      },
      {
        question: 'میں Base64 تصویر کیوں استعمال نہیں کر سکتا؟',
        answer:
          'Gmail جیسے کلائنٹس سیکیورٹی وجوہات کی بنا پر Base64 میں شامل تصاویر کو بلاک کر دیتے ہیں، اور زیادہ تر ویب میل سروسز پیسٹ کرتے وقت اس قسم کا ڈیٹا محفوظ نہیں رکھتیں۔ اسی لیے ہمیں تصاویر اور لوگوز کے لیے ہمیشہ ایک مطلق URL (https://) درکار ہوتا ہے۔',
      },
      {
        question: 'میں اپنے ای میل کلائنٹ میں دستخط کیسے پیسٹ کروں؟',
        answer:
          '"دستخط کلپ بورڈ پر کاپی کریں" پر کلک کریں، اپنے ای میل فراہم کنندہ کی دستخط کی ترتیبات کھولیں اور Ctrl+V (یا Mac پر Cmd+V) سے پیسٹ کریں۔ رنگ، ٹیبل اور لنکس محفوظ رہتے ہیں۔',
      },
      {
        question: 'کیا میں بعد میں استعمال کے لیے کوڈ ڈاؤن لوڈ کر سکتا ہوں؟',
        answer:
          'جی ہاں، مقامی کاپی محفوظ کرنے کے لیے ".html فائل ڈاؤن لوڈ کریں" بٹن، یا سورس کوڈ کسی بھی ایڈیٹر میں پیسٹ کرنے کے لیے "خام HTML کوڈ کاپی کریں" استعمال کریں۔',
      },
    ],
  },
  footer: {
    tip: 'تجویز: کاپی کیے گئے دستخط کو براہ راست Gmail، Outlook، Apple Mail یا Thunderbird کے دستخط ایڈیٹر میں پیسٹ کریں — رنگ، ٹیبل اور لنکس محفوظ رہتے ہیں۔',
  },
}

export default ur
