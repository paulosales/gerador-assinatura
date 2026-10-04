import type { AppTranslations } from '../types'

const uk: AppTranslations = {
  header: {
    badge: 'Безкоштовно та без реєстрації',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Створюйте професійні підписи для електронної пошти, на 100% сумісні з Gmail, Outlook, Apple Mail і Thunderbird. Заповніть форму, перегляньте результат у реальному часі та скопіюйте його прямо у свій поштовий клієнт.',
  },
  languageSwitcher: {
    label: 'Мова',
  },
  form: {
    ariaLabel: 'Форма даних підпису',
    sections: {
      general: { title: '1. Загальна інформація', description: 'Ім\u2019я, посада та компанія' },
      contact: { title: '2. Контакти', description: 'Електронна пошта, телефон, сайт і адреса' },
      media: { title: '3. Медіа та соціальні мережі', description: 'Фото, логотип і профілі в соцмережах' },
      design: { title: '4. Дизайн і налаштування', description: 'Кольори, шрифт і шаблон макета' },
    },
    fields: {
      fullName: { label: 'Повне ім\u2019я', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Посада', placeholder: 'Senior Software Engineer' },
      company: { label: 'Компанія / Організація', placeholder: 'Acme Corp' },
      department: { label: 'Відділ (необов\u2019язково)', placeholder: 'Розробка продукту' },
      email: { label: 'Електронна пошта', placeholder: 'you@company.com' },
      phone: { label: 'Робочий телефон', placeholder: '+380 44 123 4567' },
      mobile: { label: 'Мобільний телефон', placeholder: '+380 67 123 4567' },
      website: {
        label: 'Веб-сайт',
        placeholder: 'https://www.company.com',
        hint: 'Префікс https:// додається автоматично.',
      },
      address: { label: 'Адреса', placeholder: 'вул. Хрещатик, 1' },
      city: { label: 'Місто', placeholder: 'Київ' },
      state: { label: 'Область', placeholder: 'Київська' },
      photoUrl: {
        label: 'URL-адреса фото профілю або логотипа',
        placeholder: 'https://...',
        hint: 'Використовуйте абсолютну URL-адресу (https://). Base64 та відносні шляхи не працюють в електронних листах.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Основний колір (ім\u2019я та роздільники)' },
      secondaryColor: { label: 'Додатковий колір (посилання та іконки)' },
      fontFamily: { label: 'Сімейство шрифтів' },
    },
    templateLabel: 'Шаблон макета',
    colorField: {
      pickerAriaLabel: '{{label}} (вибір кольору)',
      hexAriaLabel: '{{label}} (шістнадцяткове значення)',
    },
  },
  templates: {
    classic: {
      label: 'Класичний горизонтальний',
      description: 'Фото зліва з вертикальним роздільником і даними справа.',
    },
    minimal: {
      label: 'Мінімалістичний вертикальний',
      description: 'Без фото, дані в одному компактному рядку з роздільниками.',
    },
    corporate: {
      label: 'Елегантний корпоративний',
      description: 'Логотип зверху, акцент на імені та значки соціальних мереж.',
    },
  },
  preview: {
    newMessage: 'Нове повідомлення',
    to: 'Кому:',
    toPlaceholder: 'otrymuvach@email.com',
    subject: 'Тема:',
    subjectValue: 'Привіт!',
    regards: 'З повагою,',
  },
  actions: {
    copySignature: 'Скопіювати підпис у буфер обміну',
    copying: 'Копіювання…',
    copyCode: 'Скопіювати вихідний код HTML',
    download: 'Завантажити файл .html',
    toastCopySignatureSuccess:
      'Підпис скопійовано! Просто вставте його (Ctrl/Cmd+V) у налаштуваннях електронної пошти.',
    toastCopySignatureError:
      'Не вдалося скопіювати автоматично. Спробуйте кнопку «Скопіювати вихідний код HTML».',
    toastCopyCodeSuccess: 'Код HTML скопійовано в буфер обміну!',
    toastCopyCodeError: 'Не вдалося скопіювати код. Скопіюйте його вручну з панелі нижче.',
    toastDownload: 'Завантаження {{file}}…',
  },
  codeView: {
    toggle: 'Переглянути згенерований код HTML',
  },
  signatureLabels: {
    email: 'Ел. пошта',
    phone: 'Тел',
    mobile: 'Моб',
    website: 'Сайт',
    address: 'Адреса',
  },
  faq: {
    heading: 'Поширені запитання про HTML-підписи для електронної пошти',
    items: [
      {
        question: 'Чи працює підпис у Gmail, Outlook, Apple Mail і Thunderbird?',
        answer:
          'Так. Згенерований HTML на 100% базується на таблицях із вбудованими стилями, без CSS-класів, блоків <style>, Flexbox чи Grid — технологій, які Gmail видаляє, а механізм рендерингу Outlook (Word) не підтримує.',
      },
      {
        question: 'Чому я не можу використовувати фото у форматі Base64?',
        answer:
          'Такі клієнти, як Gmail, блокують вбудовані зображення Base64 з міркувань безпеки, а більшість веб-поштових сервісів не зберігають такі дані під час вставлення. Тому для фото та логотипів завжди потрібна абсолютна URL-адреса (https://).',
      },
      {
        question: 'Як вставити підпис у мій поштовий клієнт?',
        answer:
          'Натисніть «Скопіювати підпис у буфер обміну», відкрийте налаштування підпису у вашого поштового провайдера та вставте за допомогою Ctrl+V (або Cmd+V на Mac). Кольори, таблиця та посилання зберігаються.',
      },
      {
        question: 'Чи можу я завантажити код, щоб використати його пізніше?',
        answer:
          'Так, скористайтеся кнопкою «Завантажити файл .html», щоб зберегти локальну копію, або «Скопіювати вихідний код HTML», щоб вставити вихідний код у будь-який редактор.',
      },
    ],
  },
  footer: {
    tip: 'Порада: вставте скопійований підпис безпосередньо в редактор підписів Gmail, Outlook, Apple Mail або Thunderbird — кольори, таблиця та посилання збережуться.',
  },
}

export default uk
