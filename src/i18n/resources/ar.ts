import type { AppTranslations } from '../types'

const ar: AppTranslations = {
  header: {
    badge: 'مجاني وبدون تسجيل',
    title: 'HTML Email Signature Generator',
    subtitle:
      'أنشئ توقيعات بريد إلكتروني احترافية، متوافقة بنسبة 100% مع Gmail وOutlook وApple Mail وThunderbird. املأ النموذج، شاهد النتيجة في الوقت الفعلي، وانسخها مباشرة إلى برنامج البريد الإلكتروني الخاص بك.',
  },
  languageSwitcher: {
    label: 'اللغة',
  },
  form: {
    ariaLabel: 'نموذج بيانات التوقيع',
    sections: {
      general: { title: '١. معلومات عامة', description: 'الاسم والمسمى الوظيفي والشركة' },
      contact: { title: '٢. معلومات الاتصال', description: 'البريد الإلكتروني والهاتف والموقع والعنوان' },
      media: { title: '٣. الوسائط والشبكات الاجتماعية', description: 'الصورة والشعار والحسابات الاجتماعية' },
      design: { title: '٤. التصميم والتخصيص', description: 'الألوان والخط ونموذج التخطيط' },
    },
    fields: {
      fullName: { label: 'الاسم الكامل', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'المسمى الوظيفي', placeholder: 'Senior Software Engineer' },
      company: { label: 'الشركة / المؤسسة', placeholder: 'Acme Corp' },
      department: { label: 'القسم (اختياري)', placeholder: 'هندسة المنتجات' },
      email: { label: 'البريد الإلكتروني', placeholder: 'you@company.com' },
      phone: { label: 'هاتف العمل', placeholder: '+971 4 123 4567' },
      mobile: { label: 'الهاتف المحمول', placeholder: '+971 50 123 4567' },
      website: {
        label: 'الموقع الإلكتروني',
        placeholder: 'https://www.company.com',
        hint: 'تتم إضافة البادئة https:// تلقائيًا.',
      },
      address: { label: 'العنوان', placeholder: 'شارع الشيخ زايد، 1' },
      city: { label: 'المدينة', placeholder: 'دبي' },
      state: { label: 'المنطقة / الإمارة', placeholder: 'دبي' },
      photoUrl: {
        label: 'رابط صورة الملف الشخصي أو شعار الشركة',
        placeholder: 'https://...',
        hint: 'استخدم رابطًا مطلقًا (https://). لا تعمل صيغة Base64 والمسارات النسبية في رسائل البريد الإلكتروني.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'اللون الأساسي (الاسم والفواصل)' },
      secondaryColor: { label: 'اللون الثانوي (الروابط والأيقونات)' },
      fontFamily: { label: 'نوع الخط' },
    },
    templateLabel: 'نموذج التخطيط',
    colorField: {
      pickerAriaLabel: '{{label}} (أداة اختيار اللون)',
      hexAriaLabel: '{{label}} (القيمة السداسية العشرية)',
    },
  },
  templates: {
    classic: {
      label: 'أفقي كلاسيكي',
      description: 'الصورة على اليسار مع فاصل عمودي والبيانات على اليمين.',
    },
    minimal: {
      label: 'عمودي بسيط',
      description: 'بدون صورة، البيانات في سطر واحد مضغوط مع فواصل.',
    },
    corporate: {
      label: 'مؤسسي أنيق',
      description: 'الشعار في الأعلى، والاسم بارز، وشارات لشبكات التواصل الاجتماعي.',
    },
  },
  preview: {
    newMessage: 'رسالة جديدة',
    to: 'إلى:',
    toPlaceholder: 'recipient@email.com',
    subject: 'الموضوع:',
    subjectValue: 'مرحبًا!',
    regards: 'مع أطيب التحيات،',
  },
  actions: {
    copySignature: 'نسخ التوقيع إلى الحافظة',
    copying: 'جارٍ النسخ…',
    copyCode: 'نسخ كود HTML الخام',
    download: 'تنزيل ملف .html',
    toastCopySignatureSuccess: 'تم نسخ التوقيع! ما عليك سوى لصقه (Ctrl/Cmd+V) في إعدادات بريدك الإلكتروني.',
    toastCopySignatureError: 'تعذّر النسخ تلقائيًا. جرّب زر "نسخ كود HTML الخام".',
    toastCopyCodeSuccess: 'تم نسخ كود HTML إلى الحافظة!',
    toastCopyCodeError: 'تعذّر نسخ الكود. انسخه يدويًا من اللوحة أدناه.',
    toastDownload: 'جارٍ تنزيل {{file}}…',
  },
  codeView: {
    toggle: 'عرض كود HTML الذي تم إنشاؤه',
  },
  signatureLabels: {
    email: 'البريد',
    phone: 'هاتف',
    mobile: 'جوال',
    website: 'الموقع',
    address: 'العنوان',
  },
  faq: {
    heading: 'الأسئلة الشائعة حول توقيعات البريد الإلكتروني بصيغة HTML',
    items: [
      {
        question: 'هل يعمل التوقيع في Gmail وOutlook وApple Mail وThunderbird؟',
        answer:
          'نعم. يعتمد كود HTML الذي يتم إنشاؤه بنسبة 100% على الجداول مع أنماط مضمّنة، دون فئات CSS أو كتل <style> أو Flexbox أو Grid — وهي التقنيات التي يزيلها Gmail ولا يدعمها محرك عرض Outlook (Word).',
      },
      {
        question: 'لماذا لا يمكنني استخدام صورة بصيغة Base64؟',
        answer:
          'تحظر برامج مثل Gmail الصور المضمّنة بصيغة Base64 لأسباب أمنية، ولا تحافظ معظم خدمات البريد الإلكتروني عبر الويب على هذا النوع من البيانات عند اللصق. لهذا السبب نطلب دائمًا رابطًا مطلقًا (https://) للصور والشعارات.',
      },
      {
        question: 'كيف ألصق التوقيع في برنامج البريد الإلكتروني الخاص بي؟',
        answer:
          'انقر على "نسخ التوقيع إلى الحافظة"، ثم افتح إعدادات التوقيع لدى مزوّد بريدك الإلكتروني والصق باستخدام Ctrl+V (أو Cmd+V على Mac). يتم الحفاظ على الألوان والجدول والروابط.',
      },
      {
        question: 'هل يمكنني تنزيل الكود لاستخدامه لاحقًا؟',
        answer:
          'نعم، استخدم زر "تنزيل ملف .html" لحفظ نسخة محلية، أو "نسخ كود HTML الخام" للصق الكود المصدري في أي محرر.',
      },
    ],
  },
  footer: {
    tip: 'نصيحة: الصق التوقيع المنسوخ مباشرة في محرر التوقيع الخاص بـ Gmail أو Outlook أو Apple Mail أو Thunderbird — يتم الحفاظ على الألوان والجدول والروابط.',
  },
}

export default ar
