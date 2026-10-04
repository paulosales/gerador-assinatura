import type { AppTranslations } from '../types'

const id: AppTranslations = {
  header: {
    badge: 'Gratis & tanpa pendaftaran',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Buat tanda tangan e-mail profesional yang 100% kompatibel dengan Gmail, Outlook, Apple Mail, dan Thunderbird. Isi formulir, lihat hasilnya secara real-time, dan salin langsung ke klien e-mail Anda.',
  },
  languageSwitcher: {
    label: 'Bahasa',
  },
  form: {
    ariaLabel: 'Formulir data tanda tangan',
    sections: {
      general: { title: '1. Informasi umum', description: 'Nama, jabatan, dan perusahaan' },
      contact: { title: '2. Kontak', description: 'E-mail, telepon, situs web, dan alamat' },
      media: { title: '3. Media & jejaring sosial', description: 'Foto, logo, dan profil sosial' },
      design: { title: '4. Desain & kustomisasi', description: 'Warna, font, dan template tata letak' },
    },
    fields: {
      fullName: { label: 'Nama lengkap', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Jabatan', placeholder: 'Senior Software Engineer' },
      company: { label: 'Perusahaan / Organisasi', placeholder: 'Acme Corp' },
      department: { label: 'Departemen (opsional)', placeholder: 'Rekayasa Produk' },
      email: { label: 'E-mail', placeholder: 'anda@perusahaan.com' },
      phone: { label: 'Telepon kantor', placeholder: '+62 21 1234 5678' },
      mobile: { label: 'Ponsel', placeholder: '+62 812 3456 7890' },
      website: {
        label: 'Situs web',
        placeholder: 'https://www.perusahaan.com',
        hint: 'Awalan https:// akan ditambahkan secara otomatis.',
      },
      address: { label: 'Alamat', placeholder: 'Jl. Sudirman No. 1' },
      city: { label: 'Kota', placeholder: 'Jakarta' },
      state: { label: 'Provinsi', placeholder: 'DKI Jakarta' },
      photoUrl: {
        label: 'URL foto profil atau logo perusahaan',
        placeholder: 'https://...',
        hint: 'Gunakan URL absolut (https://). Base64 dan jalur relatif tidak berfungsi di e-mail.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Warna utama (nama & garis pemisah)' },
      secondaryColor: { label: 'Warna sekunder (tautan & ikon)' },
      fontFamily: { label: 'Jenis font' },
    },
    templateLabel: 'Template tata letak',
    colorField: {
      pickerAriaLabel: '{{label}} (pemilih warna)',
      hexAriaLabel: '{{label}} (nilai heksadesimal)',
    },
  },
  templates: {
    classic: {
      label: 'Klasik Horizontal',
      description: 'Foto di kiri dengan garis pemisah vertikal dan detail di kanan.',
    },
    minimal: {
      label: 'Minimalis Vertikal',
      description: 'Tanpa foto, data dalam satu baris ringkas dengan pemisah.',
    },
    corporate: {
      label: 'Korporat Elegan',
      description: 'Logo di atas, nama menonjol, dan lencana media sosial.',
    },
  },
  preview: {
    newMessage: 'Pesan baru',
    to: 'Kepada:',
    toPlaceholder: 'penerima@email.com',
    subject: 'Subjek:',
    subjectValue: 'Halo!',
    regards: 'Salam hormat,',
  },
  actions: {
    copySignature: 'Salin tanda tangan ke clipboard',
    copying: 'Menyalin…',
    copyCode: 'Salin kode HTML mentah',
    download: 'Unduh file .html',
    toastCopySignatureSuccess: 'Tanda tangan disalin! Cukup tempel (Ctrl/Cmd+V) di pengaturan e-mail Anda.',
    toastCopySignatureError: 'Tidak dapat menyalin secara otomatis. Coba tombol "Salin kode HTML mentah".',
    toastCopyCodeSuccess: 'Kode HTML disalin ke clipboard!',
    toastCopyCodeError: 'Tidak dapat menyalin kode. Salin secara manual dari panel di bawah.',
    toastDownload: 'Mengunduh {{file}}…',
  },
  codeView: {
    toggle: 'Lihat kode HTML yang dihasilkan',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'HP',
    website: 'Situs',
    address: 'Alamat',
  },
  faq: {
    heading: 'Pertanyaan umum tentang tanda tangan e-mail HTML',
    items: [
      {
        question: 'Apakah tanda tangan ini berfungsi di Gmail, Outlook, Apple Mail, dan Thunderbird?',
        answer:
          'Ya. HTML yang dihasilkan 100% berbasis tabel dengan gaya inline, tanpa kelas CSS, blok <style>, Flexbox, atau Grid — teknologi yang dihapus oleh Gmail dan tidak didukung oleh mesin rendering Outlook (Word).',
      },
      {
        question: 'Mengapa saya tidak bisa menggunakan foto Base64?',
        answer:
          'Klien seperti Gmail memblokir gambar Base64 yang disematkan karena alasan keamanan, dan sebagian besar layanan webmail tidak mempertahankan jenis data ini saat ditempel. Itulah sebabnya kami selalu memerlukan URL absolut (https://) untuk foto dan logo.',
      },
      {
        question: 'Bagaimana cara menempelkan tanda tangan di klien e-mail saya?',
        answer:
          'Klik "Salin tanda tangan ke clipboard", buka pengaturan tanda tangan penyedia e-mail Anda, lalu tempel dengan Ctrl+V (atau Cmd+V di Mac). Warna, tabel, dan tautan akan tetap utuh.',
      },
      {
        question: 'Bisakah saya mengunduh kode untuk digunakan nanti?',
        answer:
          'Ya, gunakan tombol "Unduh file .html" untuk menyimpan salinan lokal, atau "Salin kode HTML mentah" untuk menempelkan kode sumber ke editor apa pun.',
      },
    ],
  },
  footer: {
    tip: 'Tip: tempel tanda tangan yang disalin langsung ke editor tanda tangan Gmail, Outlook, Apple Mail, atau Thunderbird — warna, tabel, dan tautan akan tetap terjaga.',
  },
}

export default id
