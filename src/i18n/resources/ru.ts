import type { AppTranslations } from '../types'

const ru: AppTranslations = {
  header: {
    badge: 'Бесплатно и без регистрации',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Создавайте профессиональные подписи для электронной почты, на 100% совместимые с Gmail, Outlook, Apple Mail и Thunderbird. Заполните форму, посмотрите результат в реальном времени и скопируйте его прямо в свой почтовый клиент.',
  },
  languageSwitcher: {
    label: 'Язык',
  },
  form: {
    ariaLabel: 'Форма данных подписи',
    sections: {
      general: { title: '1. Общая информация', description: 'Имя, должность и компания' },
      contact: { title: '2. Контакты', description: 'Электронная почта, телефон, сайт и адрес' },
      media: { title: '3. Медиа и социальные сети', description: 'Фото, логотип и профили в соцсетях' },
      design: { title: '4. Дизайн и настройка', description: 'Цвета, шрифт и шаблон макета' },
    },
    fields: {
      fullName: { label: 'Полное имя', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Должность', placeholder: 'Senior Software Engineer' },
      company: { label: 'Компания / Организация', placeholder: 'Acme Corp' },
      department: { label: 'Отдел (необязательно)', placeholder: 'Разработка продукта' },
      email: { label: 'Электронная почта', placeholder: 'you@company.com' },
      phone: { label: 'Рабочий телефон', placeholder: '+7 495 123-45-67' },
      mobile: { label: 'Мобильный телефон', placeholder: '+7 916 123-45-67' },
      website: {
        label: 'Веб-сайт',
        placeholder: 'https://www.company.com',
        hint: 'Префикс https:// добавляется автоматически.',
      },
      address: { label: 'Адрес', placeholder: 'ул. Ленина, 1' },
      city: { label: 'Город', placeholder: 'Москва' },
      state: { label: 'Регион', placeholder: 'МО' },
      photoUrl: {
        label: 'URL-адрес фото профиля или логотипа',
        placeholder: 'https://...',
        hint: 'Используйте абсолютный URL-адрес (https://). Base64 и относительные пути не работают в электронных письмах.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Основной цвет (имя и разделители)' },
      secondaryColor: { label: 'Дополнительный цвет (ссылки и значки)' },
      fontFamily: { label: 'Семейство шрифтов' },
    },
    templateLabel: 'Шаблон макета',
    colorField: {
      pickerAriaLabel: '{{label}} (выбор цвета)',
      hexAriaLabel: '{{label}} (шестнадцатеричное значение)',
    },
  },
  templates: {
    classic: {
      label: 'Классический горизонтальный',
      description: 'Фото слева с вертикальным разделителем и данными справа.',
    },
    minimal: {
      label: 'Минималистичный вертикальный',
      description: 'Без фото, данные в одной компактной строке с разделителями.',
    },
    corporate: {
      label: 'Элегантный корпоративный',
      description: 'Логотип сверху, акцент на имени и значки социальных сетей.',
    },
  },
  preview: {
    newMessage: 'Новое сообщение',
    to: 'Кому:',
    toPlaceholder: 'poluchatel@email.com',
    subject: 'Тема:',
    subjectValue: 'Привет!',
    regards: 'С уважением,',
  },
  actions: {
    copySignature: 'Скопировать подпись в буфер обмена',
    copying: 'Копирование…',
    copyCode: 'Скопировать исходный код HTML',
    download: 'Скачать файл .html',
    toastCopySignatureSuccess:
      'Подпись скопирована! Просто вставьте её (Ctrl/Cmd+V) в настройках электронной почты.',
    toastCopySignatureError:
      'Не удалось скопировать автоматически. Попробуйте кнопку «Скопировать исходный код HTML».',
    toastCopyCodeSuccess: 'Код HTML скопирован в буфер обмена!',
    toastCopyCodeError: 'Не удалось скопировать код. Скопируйте его вручную из панели ниже.',
    toastDownload: 'Загрузка {{file}}…',
  },
  codeView: {
    toggle: 'Просмотреть сгенерированный код HTML',
  },
  signatureLabels: {
    email: 'Эл. почта',
    phone: 'Тел',
    mobile: 'Моб',
    website: 'Сайт',
    address: 'Адрес',
  },
  faq: {
    heading: 'Часто задаваемые вопросы об HTML-подписях для электронной почты',
    items: [
      {
        question: 'Работает ли подпись в Gmail, Outlook, Apple Mail и Thunderbird?',
        answer:
          'Да. Сгенерированный HTML на 100% основан на таблицах со встроенными стилями, без CSS-классов, блоков <style>, Flexbox или Grid — технологий, которые Gmail удаляет, а механизм рендеринга Outlook (Word) не поддерживает.',
      },
      {
        question: 'Почему нельзя использовать фото в формате Base64?',
        answer:
          'Такие клиенты, как Gmail, блокируют встроенные изображения Base64 из соображений безопасности, а большинство веб-почтовых сервисов не сохраняют такие данные при вставке. Поэтому для фото и логотипов всегда требуется абсолютный URL-адрес (https://).',
      },
      {
        question: 'Как вставить подпись в мой почтовый клиент?',
        answer:
          'Нажмите «Скопировать подпись в буфер обмена», откройте настройки подписи у вашего почтового провайдера и вставьте с помощью Ctrl+V (или Cmd+V на Mac). Цвета, таблица и ссылки сохраняются.',
      },
      {
        question: 'Можно ли скачать код, чтобы использовать его позже?',
        answer:
          'Да, используйте кнопку «Скачать файл .html», чтобы сохранить локальную копию, или «Скопировать исходный код HTML», чтобы вставить исходный код в любой редактор.',
      },
    ],
  },
  footer: {
    tip: 'Совет: вставьте скопированную подпись прямо в редактор подписей Gmail, Outlook, Apple Mail или Thunderbird — цвета, таблица и ссылки сохранятся.',
  },
}

export default ru
