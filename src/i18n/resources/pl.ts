import type { AppTranslations } from '../types'

const pl: AppTranslations = {
  header: {
    badge: 'Bezpłatnie i bez rejestracji',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Twórz profesjonalne podpisy e-mail, w 100% kompatybilne z Gmail, Outlook, Apple Mail i Thunderbird. Wypełnij formularz, zobacz wynik w czasie rzeczywistym i skopiuj go bezpośrednio do swojego klienta poczty.',
  },
  languageSwitcher: {
    label: 'Język',
  },
  form: {
    ariaLabel: 'Formularz danych podpisu',
    sections: {
      general: { title: '1. Informacje ogólne', description: 'Imię i nazwisko, stanowisko i firma' },
      contact: { title: '2. Kontakt', description: 'E-mail, telefon, strona internetowa i adres' },
      media: {
        title: '3. Media i media społecznościowe',
        description: 'Zdjęcie, logo i profile społecznościowe',
      },
      design: { title: '4. Projekt i personalizacja', description: 'Kolory, czcionka i szablon układu' },
    },
    fields: {
      fullName: { label: 'Imię i nazwisko', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Stanowisko / Tytuł', placeholder: 'Senior Software Engineer' },
      company: { label: 'Firma / Organizacja', placeholder: 'Acme Corp' },
      department: { label: 'Dział (opcjonalnie)', placeholder: 'Inżynieria Produktu' },
      email: { label: 'E-mail', placeholder: 'ty@firma.com' },
      phone: { label: 'Telefon służbowy', placeholder: '+48 22 123 45 67' },
      mobile: { label: 'Telefon komórkowy', placeholder: '+48 601 234 567' },
      website: {
        label: 'Strona internetowa',
        placeholder: 'https://www.firma.com',
        hint: 'Przedrostek https:// jest dodawany automatycznie.',
      },
      address: { label: 'Adres', placeholder: 'ul. Główna 1' },
      city: { label: 'Miasto', placeholder: 'Warszawa' },
      state: { label: 'Województwo', placeholder: 'MZ' },
      photoUrl: {
        label: 'Adres URL zdjęcia profilowego lub logo',
        placeholder: 'https://...',
        hint: 'Użyj bezwzględnego adresu URL (https://). Base64 i ścieżki względne nie działają w e-mailach.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Kolor podstawowy (imię i separatory)' },
      secondaryColor: { label: 'Kolor dodatkowy (linki i ikony)' },
      fontFamily: { label: 'Rodzina czcionek' },
    },
    templateLabel: 'Szablon układu',
    colorField: {
      pickerAriaLabel: '{{label}} (wybór koloru)',
      hexAriaLabel: '{{label}} (wartość hex)',
    },
  },
  templates: {
    classic: {
      label: 'Klasyczny Poziomy',
      description: 'Zdjęcie po lewej z pionowym separatorem i danymi po prawej.',
    },
    minimal: {
      label: 'Minimalistyczny Pionowy',
      description: 'Bez zdjęcia, dane w jednej zwartej linii z separatorami.',
    },
    corporate: {
      label: 'Elegancki Firmowy',
      description: 'Logo u góry, wyeksponowane imię i odznaki sieci społecznościowych.',
    },
  },
  preview: {
    newMessage: 'Nowa wiadomość',
    to: 'Do:',
    toPlaceholder: 'odbiorca@email.com',
    subject: 'Temat:',
    subjectValue: 'Cześć!',
    regards: 'Z poważaniem,',
  },
  actions: {
    copySignature: 'Kopiuj podpis do schowka',
    copying: 'Kopiowanie…',
    copyCode: 'Kopiuj surowy kod HTML',
    download: 'Pobierz plik .html',
    toastCopySignatureSuccess: 'Podpis skopiowany! Wystarczy wkleić (Ctrl/Cmd+V) w ustawieniach poczty.',
    toastCopySignatureError:
      'Nie udało się skopiować automatycznie. Spróbuj przycisku "Kopiuj surowy kod HTML".',
    toastCopyCodeSuccess: 'Kod HTML skopiowany do schowka!',
    toastCopyCodeError: 'Nie udało się skopiować kodu. Skopiuj go ręcznie z panelu poniżej.',
    toastDownload: 'Pobieranie {{file}}…',
  },
  codeView: {
    toggle: 'Zobacz wygenerowany kod HTML',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'Kom.',
    website: 'Strona',
    address: 'Adres',
  },
  faq: {
    heading: 'Najczęściej zadawane pytania dotyczące podpisów e-mail w HTML',
    items: [
      {
        question: 'Czy podpis działa w Gmail, Outlook, Apple Mail i Thunderbird?',
        answer:
          'Tak. Wygenerowany kod HTML w 100% opiera się na tabelach ze stylami inline, bez klas CSS, bloków <style>, Flexbox czy Grid — technologii, które Gmail usuwa, a których silnik renderowania Outlooka (Word) nie obsługuje.',
      },
      {
        question: 'Dlaczego nie mogę użyć zdjęcia w formacie Base64?',
        answer:
          'Klienci tacy jak Gmail blokują osadzone obrazy Base64 ze względów bezpieczeństwa, a większość usług poczty internetowej nie zachowuje tego typu danych podczas wklejania. Dlatego zawsze wymagamy bezwzględnego adresu URL (https://) dla zdjęć i logo.',
      },
      {
        question: 'Jak wkleić podpis w moim kliencie poczty?',
        answer:
          'Kliknij "Kopiuj podpis do schowka", otwórz ustawienia podpisu u swojego dostawcy poczty i wklej za pomocą Ctrl+V (lub Cmd+V na Macu). Kolory, tabela i linki zostaną zachowane.',
      },
      {
        question: 'Czy mogę pobrać kod, aby użyć go później?',
        answer:
          'Tak, użyj przycisku "Pobierz plik .html", aby zapisać lokalną kopię, lub "Kopiuj surowy kod HTML", aby wkleić kod źródłowy w dowolnym edytorze.',
      },
    ],
  },
  footer: {
    tip: 'Wskazówka: wklej skopiowany podpis bezpośrednio w edytorze podpisów Gmail, Outlook, Apple Mail lub Thunderbird — kolory, tabela i linki zostaną zachowane.',
  },
}

export default pl
