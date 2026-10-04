import type { AppTranslations } from '../types'

const fa: AppTranslations = {
  header: {
    badge: 'رایگان و بدون ثبت‌نام',
    title: 'HTML Email Signature Generator',
    subtitle:
      'امضاهای ایمیل حرفه‌ای بسازید که ۱۰۰٪ با Gmail، Outlook، Apple Mail و Thunderbird سازگار هستند. فرم را پر کنید، نتیجه را به‌صورت زنده ببینید و مستقیماً در کلاینت ایمیل خود کپی کنید.',
  },
  languageSwitcher: {
    label: 'زبان',
  },
  form: {
    ariaLabel: 'فرم اطلاعات امضا',
    sections: {
      general: { title: '۱. اطلاعات کلی', description: 'نام، سمت شغلی و شرکت' },
      contact: { title: '۲. اطلاعات تماس', description: 'ایمیل، تلفن، وب‌سایت و آدرس' },
      media: { title: '۳. رسانه و شبکه‌های اجتماعی', description: 'عکس، لوگو و پروفایل‌های اجتماعی' },
      design: { title: '۴. طراحی و شخصی‌سازی', description: 'رنگ‌ها، فونت و قالب طرح‌بندی' },
    },
    fields: {
      fullName: { label: 'نام کامل', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'عنوان شغلی', placeholder: 'Senior Software Engineer' },
      company: { label: 'شرکت / سازمان', placeholder: 'Acme Corp' },
      department: { label: 'بخش (اختیاری)', placeholder: 'مهندسی محصول' },
      email: { label: 'ایمیل', placeholder: 'you@company.com' },
      phone: { label: 'تلفن کاری', placeholder: '+98 21 1234 5678' },
      mobile: { label: 'تلفن همراه', placeholder: '+98 912 123 4567' },
      website: {
        label: 'وب‌سایت',
        placeholder: 'https://www.company.com',
        hint: 'پیشوند https:// به‌صورت خودکار اضافه می‌شود.',
      },
      address: { label: 'آدرس', placeholder: 'خیابان ولیعصر، پلاک ۱' },
      city: { label: 'شهر', placeholder: 'تهران' },
      state: { label: 'استان', placeholder: 'تهران' },
      photoUrl: {
        label: 'آدرس URL عکس پروفایل یا لوگوی شرکت',
        placeholder: 'https://...',
        hint: 'از یک آدرس URL مطلق (https://) استفاده کنید. Base64 و مسیرهای نسبی در ایمیل‌ها کار نمی‌کنند.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'رنگ اصلی (نام و جداکننده‌ها)' },
      secondaryColor: { label: 'رنگ ثانویه (لینک‌ها و آیکون‌ها)' },
      fontFamily: { label: 'خانواده فونت' },
    },
    templateLabel: 'قالب طرح‌بندی',
    colorField: {
      pickerAriaLabel: '{{label}} (انتخابگر رنگ)',
      hexAriaLabel: '{{label}} (مقدار هگزادسیمال)',
    },
  },
  templates: {
    classic: {
      label: 'افقی کلاسیک',
      description: 'عکس در سمت چپ با جداکننده عمودی و اطلاعات در سمت راست.',
    },
    minimal: {
      label: 'عمودی مینیمال',
      description: 'بدون عکس، اطلاعات در یک خط فشرده با جداکننده.',
    },
    corporate: {
      label: 'سازمانی شیک',
      description: 'لوگو در بالا، نام برجسته و نشان‌های شبکه‌های اجتماعی.',
    },
  },
  preview: {
    newMessage: 'پیام جدید',
    to: 'به:',
    toPlaceholder: 'recipient@email.com',
    subject: 'موضوع:',
    subjectValue: 'سلام!',
    regards: 'با احترام،',
  },
  actions: {
    copySignature: 'کپی امضا در کلیپ‌بورد',
    copying: 'در حال کپی…',
    copyCode: 'کپی کد HTML خام',
    download: 'دانلود فایل .html',
    toastCopySignatureSuccess:
      'امضا کپی شد! کافی است آن را (Ctrl/Cmd+V) در تنظیمات ایمیل خود جای‌گذاری کنید.',
    toastCopySignatureError: 'کپی خودکار ممکن نشد. دکمهٔ «کپی کد HTML خام» را امتحان کنید.',
    toastCopyCodeSuccess: 'کد HTML در کلیپ‌بورد کپی شد!',
    toastCopyCodeError: 'کپی کد ممکن نشد. آن را به‌صورت دستی از پنل زیر کپی کنید.',
    toastDownload: 'در حال دانلود {{file}}…',
  },
  codeView: {
    toggle: 'مشاهده کد HTML تولیدشده',
  },
  signatureLabels: {
    email: 'ایمیل',
    phone: 'تلفن',
    mobile: 'همراه',
    website: 'سایت',
    address: 'آدرس',
  },
  faq: {
    heading: 'سؤالات متداول درباره امضای ایمیل HTML',
    items: [
      {
        question: 'آیا امضا در Gmail، Outlook، Apple Mail و Thunderbird کار می‌کند؟',
        answer:
          'بله. کد HTML تولیدشده ۱۰۰٪ مبتنی بر جدول با استایل‌های درون‌خطی است، بدون کلاس‌های CSS، بلوک‌های <style>، Flexbox یا Grid — فناوری‌هایی که Gmail آن‌ها را حذف می‌کند و موتور رندر Outlook (Word) از آن‌ها پشتیبانی نمی‌کند.',
      },
      {
        question: 'چرا نمی‌توانم از عکس Base64 استفاده کنم؟',
        answer:
          'کلاینت‌هایی مانند Gmail به دلایل امنیتی تصاویر جاسازی‌شده Base64 را مسدود می‌کنند و اکثر سرویس‌های وب‌میل این نوع داده را هنگام جای‌گذاری حفظ نمی‌کنند. به همین دلیل همیشه برای عکس‌ها و لوگوها به یک آدرس URL مطلق (https://) نیاز داریم.',
      },
      {
        question: 'چگونه امضا را در کلاینت ایمیل خود جای‌گذاری کنم؟',
        answer:
          'روی «کپی امضا در کلیپ‌بورد» کلیک کنید، تنظیمات امضای ارائه‌دهندهٔ ایمیل خود را باز کنید و با Ctrl+V (یا Cmd+V در مک) جای‌گذاری کنید. رنگ‌ها، جدول و لینک‌ها حفظ می‌شوند.',
      },
      {
        question: 'آیا می‌توانم کد را برای استفادهٔ بعدی دانلود کنم؟',
        answer:
          'بله، از دکمهٔ «دانلود فایل .html» برای ذخیرهٔ یک نسخهٔ محلی، یا «کپی کد HTML خام» برای جای‌گذاری کد منبع در هر ویرایشگری استفاده کنید.',
      },
    ],
  },
  footer: {
    tip: 'نکته: امضای کپی‌شده را مستقیماً در ویرایشگر امضای Gmail، Outlook، Apple Mail یا Thunderbird جای‌گذاری کنید — رنگ‌ها، جدول و لینک‌ها حفظ می‌شوند.',
  },
}

export default fa
