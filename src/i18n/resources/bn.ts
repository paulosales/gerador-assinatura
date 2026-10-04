import type { AppTranslations } from '../types'

const bn: AppTranslations = {
  header: {
    badge: 'বিনামূল্যে ও নিবন্ধন ছাড়াই',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Gmail, Outlook, Apple Mail এবং Thunderbird-এর সাথে ১০০% সামঞ্জস্যপূর্ণ পেশাদার ই-মেইল স্বাক্ষর তৈরি করুন। ফর্মটি পূরণ করুন, রিয়েল-টাইমে ফলাফল দেখুন এবং সরাসরি আপনার ই-মেইল ক্লায়েন্টে কপি করুন।',
  },
  languageSwitcher: {
    label: 'ভাষা',
  },
  form: {
    ariaLabel: 'স্বাক্ষরের তথ্যের ফর্ম',
    sections: {
      general: { title: '১. সাধারণ তথ্য', description: 'নাম, পদবি এবং কোম্পানি' },
      contact: { title: '২. যোগাযোগ', description: 'ই-মেইল, ফোন, ওয়েবসাইট এবং ঠিকানা' },
      media: { title: '৩. মিডিয়া ও সামাজিক যোগাযোগ মাধ্যম', description: 'ছবি, লোগো এবং সামাজিক প্রোফাইল' },
      design: { title: '৪. ডিজাইন ও কাস্টমাইজেশন', description: 'রঙ, ফন্ট এবং লেআউট টেমপ্লেট' },
    },
    fields: {
      fullName: { label: 'পুরো নাম', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'পদবি', placeholder: 'Senior Software Engineer' },
      company: { label: 'কোম্পানি / প্রতিষ্ঠান', placeholder: 'Acme Corp' },
      department: { label: 'বিভাগ (ঐচ্ছিক)', placeholder: 'প্রোডাক্ট ইঞ্জিনিয়ারিং' },
      email: { label: 'ই-মেইল', placeholder: 'you@company.com' },
      phone: { label: 'অফিসের ফোন', placeholder: '+880 2 1234 5678' },
      mobile: { label: 'মোবাইল', placeholder: '+880 1712-345678' },
      website: {
        label: 'ওয়েবসাইট',
        placeholder: 'https://www.company.com',
        hint: 'https:// উপসর্গটি স্বয়ংক্রিয়ভাবে যোগ করা হয়।',
      },
      address: { label: 'ঠিকানা', placeholder: 'প্রধান সড়ক, নম্বর ১' },
      city: { label: 'শহর', placeholder: 'ঢাকা' },
      state: { label: 'বিভাগ/রাজ্য', placeholder: 'ঢাকা' },
      photoUrl: {
        label: 'প্রোফাইল ছবি বা কোম্পানির লোগোর URL',
        placeholder: 'https://...',
        hint: 'একটি অ্যাবসোলিউট URL ব্যবহার করুন (https://)। Base64 এবং রিলেটিভ পাথ ই-মেইলে কাজ করে না।',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'প্রাথমিক রঙ (নাম ও বিভাজক)' },
      secondaryColor: { label: 'দ্বিতীয় রঙ (লিঙ্ক ও আইকন)' },
      fontFamily: { label: 'ফন্ট পরিবার' },
    },
    templateLabel: 'লেআউট টেমপ্লেট',
    colorField: {
      pickerAriaLabel: '{{label}} (রঙ নির্বাচক)',
      hexAriaLabel: '{{label}} (হেক্স মান)',
    },
  },
  templates: {
    classic: {
      label: 'ক্লাসিক হরাইজন্টাল',
      description: 'বাম দিকে ছবি, উল্লম্ব বিভাজক এবং ডান দিকে তথ্য।',
    },
    minimal: {
      label: 'মিনিমালিস্ট ভার্টিক্যাল',
      description: 'ছবি ছাড়া, বিভাজকসহ একটি সংক্ষিপ্ত লাইনে তথ্য।',
    },
    corporate: {
      label: 'এলিগেন্ট কর্পোরেট',
      description: 'উপরে লোগো, নাম হাইলাইট করা এবং সামাজিক যোগাযোগ মাধ্যমের ব্যাজ।',
    },
  },
  preview: {
    newMessage: 'নতুন বার্তা',
    to: 'প্রতি:',
    toPlaceholder: 'recipient@email.com',
    subject: 'বিষয়:',
    subjectValue: 'হ্যালো!',
    regards: 'শুভেচ্ছান্তে,',
  },
  actions: {
    copySignature: 'স্বাক্ষর ক্লিপবোর্ডে কপি করুন',
    copying: 'কপি হচ্ছে…',
    copyCode: 'অরিজিনাল HTML কোড কপি করুন',
    download: '.html ফাইল ডাউনলোড করুন',
    toastCopySignatureSuccess: 'স্বাক্ষর কপি হয়েছে! শুধু আপনার ই-মেইল সেটিংসে (Ctrl/Cmd+V) পেস্ট করুন।',
    toastCopySignatureError:
      'স্বয়ংক্রিয়ভাবে কপি করা যায়নি। "অরিজিনাল HTML কোড কপি করুন" বোতামটি চেষ্টা করুন।',
    toastCopyCodeSuccess: 'HTML কোড ক্লিপবোর্ডে কপি হয়েছে!',
    toastCopyCodeError: 'কোড কপি করা যায়নি। নিচের প্যানেল থেকে ম্যানুয়ালি কপি করুন।',
    toastDownload: '{{file}} ডাউনলোড হচ্ছে…',
  },
  codeView: {
    toggle: 'তৈরি করা HTML কোড দেখুন',
  },
  signatureLabels: {
    email: 'ই-মেইল',
    phone: 'ফোন',
    mobile: 'মোবাইল',
    website: 'সাইট',
    address: 'ঠিকানা',
  },
  faq: {
    heading: 'HTML ই-মেইল স্বাক্ষর সম্পর্কে প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    items: [
      {
        question: 'স্বাক্ষরটি কি Gmail, Outlook, Apple Mail এবং Thunderbird-এ কাজ করে?',
        answer:
          'হ্যাঁ। তৈরি করা HTML সম্পূর্ণভাবে ইনলাইন স্টাইলসহ টেবিলের উপর ভিত্তি করে তৈরি, কোনো CSS ক্লাস, <style> ব্লক, Flexbox বা Grid ছাড়াই — এই প্রযুক্তিগুলো Gmail সরিয়ে দেয় এবং Outlook (Word)-এর রেন্ডারিং ইঞ্জিন সমর্থন করে না।',
      },
      {
        question: 'আমি কেন Base64 ছবি ব্যবহার করতে পারি না?',
        answer:
          'Gmail-এর মতো ক্লায়েন্টগুলো নিরাপত্তার কারণে এমবেডেড Base64 ছবি ব্লক করে দেয়, এবং বেশিরভাগ ওয়েবমেইল পরিষেবা পেস্ট করার সময় এই ধরনের ডেটা সংরক্ষণ করে না। তাই ছবি ও লোগোর জন্য আমরা সবসময় একটি অ্যাবসোলিউট URL (https://) প্রয়োজন মনে করি।',
      },
      {
        question: 'আমি কীভাবে আমার ই-মেইল ক্লায়েন্টে স্বাক্ষর পেস্ট করব?',
        answer:
          '"স্বাক্ষর ক্লিপবোর্ডে কপি করুন"-এ ক্লিক করুন, আপনার ই-মেইল প্রদানকারীর স্বাক্ষর সেটিংস খুলুন এবং Ctrl+V (বা Mac-এ Cmd+V) দিয়ে পেস্ট করুন। রঙ, টেবিল এবং লিঙ্ক সংরক্ষিত থাকে।',
      },
      {
        question: 'আমি কি পরে ব্যবহারের জন্য কোড ডাউনলোড করতে পারি?',
        answer:
          'হ্যাঁ, স্থানীয় একটি কপি সংরক্ষণ করতে ".html ফাইল ডাউনলোড করুন" বোতাম, অথবা যেকোনো এডিটরে সোর্স কোড পেস্ট করতে "অরিজিনাল HTML কোড কপি করুন" ব্যবহার করুন।',
      },
    ],
  },
  footer: {
    tip: 'পরামর্শ: কপি করা স্বাক্ষরটি সরাসরি Gmail, Outlook, Apple Mail বা Thunderbird-এর স্বাক্ষর এডিটরে পেস্ট করুন — রঙ, টেবিল এবং লিঙ্ক সংরক্ষিত থাকে।',
  },
}

export default bn
