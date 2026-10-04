import type { AppTranslations } from '../types'

const tr: AppTranslations = {
  header: {
    badge: 'Ücretsiz ve üyeliksiz',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Gmail, Outlook, Apple Mail ve Thunderbird ile %100 uyumlu profesyonel e-posta imzaları oluşturun. Formu doldurun, sonucu gerçek zamanlı görün ve doğrudan e-posta istemcinize kopyalayın.',
  },
  languageSwitcher: {
    label: 'Dil',
  },
  form: {
    ariaLabel: 'İmza verileri formu',
    sections: {
      general: { title: '1. Genel bilgiler', description: 'Ad, unvan ve şirket' },
      contact: { title: '2. İletişim', description: 'E-posta, telefon, web sitesi ve adres' },
      media: { title: '3. Medya ve sosyal ağlar', description: 'Fotoğraf, logo ve sosyal profiller' },
      design: { title: '4. Tasarım ve özelleştirme', description: 'Renkler, yazı tipi ve yerleşim şablonu' },
    },
    fields: {
      fullName: { label: 'Ad soyad', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Unvan', placeholder: 'Senior Software Engineer' },
      company: { label: 'Şirket / Kuruluş', placeholder: 'Acme Corp' },
      department: { label: 'Departman (isteğe bağlı)', placeholder: 'Ürün Mühendisliği' },
      email: { label: 'E-posta', placeholder: 'siz@sirket.com' },
      phone: { label: 'İş telefonu', placeholder: '+90 212 123 45 67' },
      mobile: { label: 'Cep telefonu', placeholder: '+90 532 123 45 67' },
      website: {
        label: 'Web sitesi',
        placeholder: 'https://www.sirket.com',
        hint: 'https:// öneki otomatik olarak eklenir.',
      },
      address: { label: 'Adres', placeholder: 'Atatürk Caddesi No:1' },
      city: { label: 'Şehir', placeholder: 'İstanbul' },
      state: { label: 'Eyalet / İl', placeholder: 'İST' },
      photoUrl: {
        label: 'Profil fotoğrafı veya şirket logosu URL\u2019si',
        placeholder: 'https://...',
        hint: 'Mutlak bir URL kullanın (https://). Base64 ve göreli yollar e-postalarda çalışmaz.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Birincil renk (ad ve ayırıcılar)' },
      secondaryColor: { label: 'İkincil renk (bağlantılar ve simgeler)' },
      fontFamily: { label: 'Yazı tipi ailesi' },
    },
    templateLabel: 'Yerleşim şablonu',
    colorField: {
      pickerAriaLabel: '{{label}} (renk seçici)',
      hexAriaLabel: '{{label}} (onaltılık değer)',
    },
  },
  templates: {
    classic: {
      label: 'Klasik Yatay',
      description: 'Solda fotoğraf, dikey ayırıcı ve sağda bilgiler.',
    },
    minimal: {
      label: 'Minimalist Dikey',
      description: 'Fotoğrafsız, ayırıcılarla tek satırda kompakt veriler.',
    },
    corporate: {
      label: 'Şık Kurumsal',
      description: 'Üstte logo, öne çıkan ad ve sosyal ağ rozetleri.',
    },
  },
  preview: {
    newMessage: 'Yeni ileti',
    to: 'Kime:',
    toPlaceholder: 'alici@email.com',
    subject: 'Konu:',
    subjectValue: 'Merhaba!',
    regards: 'Saygılarımla,',
  },
  actions: {
    copySignature: 'İmzayı panoya kopyala',
    copying: 'Kopyalanıyor…',
    copyCode: 'Ham HTML kodunu kopyala',
    download: '.html dosyasını indir',
    toastCopySignatureSuccess: 'İmza kopyalandı! E-posta ayarlarınıza yapıştırmanız (Ctrl/Cmd+V) yeterli.',
    toastCopySignatureError: 'Otomatik kopyalanamadı. "Ham HTML kodunu kopyala" düğmesini deneyin.',
    toastCopyCodeSuccess: 'HTML kodu panoya kopyalandı!',
    toastCopyCodeError: 'Kod kopyalanamadı. Aşağıdaki panelden manuel olarak kopyalayın.',
    toastDownload: '{{file}} indiriliyor…',
  },
  codeView: {
    toggle: 'Oluşturulan HTML kodunu görüntüle',
  },
  signatureLabels: {
    email: 'E-posta',
    phone: 'Tel',
    mobile: 'Cep',
    website: 'Site',
    address: 'Adres',
  },
  faq: {
    heading: 'HTML e-posta imzaları hakkında sıkça sorulan sorular',
    items: [
      {
        question: 'İmza Gmail, Outlook, Apple Mail ve Thunderbird\u2019da çalışıyor mu?',
        answer:
          'Evet. Oluşturulan HTML, CSS sınıfları, <style> blokları, Flexbox veya Grid olmadan, satır içi stillere sahip tablolara %100 dayalıdır — bunlar Gmail\u2019in kaldırdığı ve Outlook\u2019un (Word) oluşturma motorunun desteklemediği teknolojilerdir.',
      },
      {
        question: 'Neden Base64 formatında bir fotoğraf kullanamıyorum?',
        answer:
          'Gmail gibi istemciler güvenlik nedeniyle gömülü Base64 görüntülerini engeller ve çoğu web postası yapıştırma sırasında bu tür verileri korumaz. Bu nedenle fotoğraflar ve logolar için her zaman mutlak bir URL (https://) gerektiririz.',
      },
      {
        question: 'İmzayı e-posta istemcime nasıl yapıştırırım?',
        answer:
          '"İmzayı panoya kopyala" düğmesine tıklayın, e-posta sağlayıcınızın imza ayarlarını açın ve Ctrl+V (Mac\u2019te Cmd+V) ile yapıştırın. Renkler, tablo ve bağlantılar korunur.',
      },
      {
        question: 'Daha sonra kullanmak için kodu indirebilir miyim?',
        answer:
          'Evet, yerel bir kopya kaydetmek için ".html dosyasını indir" düğmesini veya kaynak kodu herhangi bir düzenleyiciye yapıştırmak için "Ham HTML kodunu kopyala" düğmesini kullanın.',
      },
    ],
  },
  footer: {
    tip: 'İpucu: kopyalanan imzayı doğrudan Gmail, Outlook, Apple Mail veya Thunderbird\u2019un imza düzenleyicisine yapıştırın — renkler, tablo ve bağlantılar korunur.',
  },
}

export default tr
