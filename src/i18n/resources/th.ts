import type { AppTranslations } from '../types'

const th: AppTranslations = {
  header: {
    badge: 'ฟรี & ไม่ต้องสมัครสมาชิก',
    title: 'HTML Email Signature Generator',
    subtitle:
      'สร้างลายเซ็นอีเมลแบบมืออาชีพ ที่เข้ากันได้ 100% กับ Gmail, Outlook, Apple Mail และ Thunderbird กรอกแบบฟอร์ม ดูผลลัพธ์แบบเรียลไทม์ แล้วคัดลอกไปยังโปรแกรมอีเมลของคุณได้ทันที',
  },
  languageSwitcher: {
    label: 'ภาษา',
  },
  form: {
    ariaLabel: 'แบบฟอร์มข้อมูลลายเซ็น',
    sections: {
      general: { title: '1. ข้อมูลทั่วไป', description: 'ชื่อ ตำแหน่ง และบริษัท' },
      contact: { title: '2. ข้อมูลติดต่อ', description: 'อีเมล โทรศัพท์ เว็บไซต์ และที่อยู่' },
      media: { title: '3. สื่อและเครือข่ายสังคม', description: 'รูปภาพ โลโก้ และโปรไฟล์โซเชียล' },
      design: { title: '4. การออกแบบและปรับแต่ง', description: 'สี แบบอักษร และเทมเพลตเลย์เอาต์' },
    },
    fields: {
      fullName: { label: 'ชื่อ-นามสกุล', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'ตำแหน่งงาน', placeholder: 'Senior Software Engineer' },
      company: { label: 'บริษัท / องค์กร', placeholder: 'Acme Corp' },
      department: { label: 'แผนก (ไม่บังคับ)', placeholder: 'วิศวกรรมผลิตภัณฑ์' },
      email: { label: 'อีเมล', placeholder: 'you@company.com' },
      phone: { label: 'โทรศัพท์ที่ทำงาน', placeholder: '+66 2 123 4567' },
      mobile: { label: 'มือถือ', placeholder: '+66 81 234 5678' },
      website: {
        label: 'เว็บไซต์',
        placeholder: 'https://www.company.com',
        hint: 'ระบบจะเพิ่มคำนำหน้า https:// ให้โดยอัตโนมัติ',
      },
      address: { label: 'ที่อยู่', placeholder: 'ถนนสุขุมวิท เลขที่ 1' },
      city: { label: 'เมือง', placeholder: 'กรุงเทพฯ' },
      state: { label: 'จังหวัด', placeholder: 'กรุงเทพมหานคร' },
      photoUrl: {
        label: 'URL รูปโปรไฟล์หรือโลโก้บริษัท',
        placeholder: 'https://...',
        hint: 'ใช้ URL แบบสัมบูรณ์ (https://) รูปแบบ Base64 และพาธแบบสัมพัทธ์ใช้ไม่ได้ในอีเมล',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'สีหลัก (ชื่อและเส้นแบ่ง)' },
      secondaryColor: { label: 'สีรอง (ลิงก์และไอคอน)' },
      fontFamily: { label: 'ตระกูลแบบอักษร' },
    },
    templateLabel: 'เทมเพลตเลย์เอาต์',
    colorField: {
      pickerAriaLabel: '{{label}} (ตัวเลือกสี)',
      hexAriaLabel: '{{label}} (ค่าเฮกซ์)',
    },
  },
  templates: {
    classic: {
      label: 'คลาสสิกแนวนอน',
      description: 'รูปภาพอยู่ด้านซ้ายพร้อมเส้นแบ่งแนวตั้งและรายละเอียดด้านขวา',
    },
    minimal: {
      label: 'มินิมอลแนวตั้ง',
      description: 'ไม่มีรูปภาพ ข้อมูลอยู่ในบรรทัดเดียวที่กระชับพร้อมตัวคั่น',
    },
    corporate: {
      label: 'องค์กรหรูหรา',
      description: 'โลโก้อยู่ด้านบน ชื่อโดดเด่น และมีแบดจ์เครือข่ายสังคม',
    },
  },
  preview: {
    newMessage: 'ข้อความใหม่',
    to: 'ถึง:',
    toPlaceholder: 'recipient@email.com',
    subject: 'หัวข้อ:',
    subjectValue: 'สวัสดี!',
    regards: 'ขอแสดงความนับถือ,',
  },
  actions: {
    copySignature: 'คัดลอกลายเซ็นไปยังคลิปบอร์ด',
    copying: 'กำลังคัดลอก…',
    copyCode: 'คัดลอกโค้ด HTML ดิบ',
    download: 'ดาวน์โหลดไฟล์ .html',
    toastCopySignatureSuccess: 'คัดลอกลายเซ็นแล้ว! เพียงวาง (Ctrl/Cmd+V) ในการตั้งค่าอีเมลของคุณ',
    toastCopySignatureError: 'ไม่สามารถคัดลอกอัตโนมัติได้ ลองใช้ปุ่ม "คัดลอกโค้ด HTML ดิบ"',
    toastCopyCodeSuccess: 'คัดลอกโค้ด HTML ไปยังคลิปบอร์ดแล้ว!',
    toastCopyCodeError: 'ไม่สามารถคัดลอกโค้ดได้ กรุณาคัดลอกด้วยตนเองจากแผงด้านล่าง',
    toastDownload: 'กำลังดาวน์โหลด {{file}}…',
  },
  codeView: {
    toggle: 'ดูโค้ด HTML ที่สร้างขึ้น',
  },
  signatureLabels: {
    email: 'อีเมล',
    phone: 'โทร',
    mobile: 'มือถือ',
    website: 'เว็บไซต์',
    address: 'ที่อยู่',
  },
  faq: {
    heading: 'คำถามที่พบบ่อยเกี่ยวกับลายเซ็นอีเมล HTML',
    items: [
      {
        question: 'ลายเซ็นใช้งานได้กับ Gmail, Outlook, Apple Mail และ Thunderbird หรือไม่?',
        answer:
          'ใช่ HTML ที่สร้างขึ้นใช้ตารางพร้อมสไตล์แบบอินไลน์ทั้งหมด 100% โดยไม่มีคลาส CSS, บล็อก <style>, Flexbox หรือ Grid ซึ่งเป็นเทคโนโลยีที่ Gmail จะลบออกและเอนจินการแสดงผลของ Outlook (Word) ไม่รองรับ',
      },
      {
        question: 'ทำไมฉันถึงใช้รูปภาพแบบ Base64 ไม่ได้?',
        answer:
          'โปรแกรมอย่าง Gmail จะบล็อกรูปภาพ Base64 ที่ฝังไว้ด้วยเหตุผลด้านความปลอดภัย และบริการเว็บเมลส่วนใหญ่จะไม่เก็บข้อมูลประเภทนี้ไว้เมื่อวาง ด้วยเหตุนี้เราจึงต้องการ URL แบบสัมบูรณ์ (https://) สำหรับรูปภาพและโลโก้เสมอ',
      },
      {
        question: 'ฉันจะวางลายเซ็นลงในโปรแกรมอีเมลของฉันได้อย่างไร?',
        answer:
          'คลิก "คัดลอกลายเซ็นไปยังคลิปบอร์ด" เปิดการตั้งค่าลายเซ็นของผู้ให้บริการอีเมลของคุณ แล้ววางด้วย Ctrl+V (หรือ Cmd+V บน Mac) สี ตาราง และลิงก์จะยังคงอยู่',
      },
      {
        question: 'ฉันสามารถดาวน์โหลดโค้ดเพื่อใช้ภายหลังได้หรือไม่?',
        answer:
          'ได้ ใช้ปุ่ม "ดาวน์โหลดไฟล์ .html" เพื่อบันทึกสำเนาในเครื่อง หรือ "คัดลอกโค้ด HTML ดิบ" เพื่อวางซอร์สโค้ดในโปรแกรมแก้ไขใดก็ได้',
      },
    ],
  },
  footer: {
    tip: 'เคล็ดลับ: วางลายเซ็นที่คัดลอกไว้ลงในตัวแก้ไขลายเซ็นของ Gmail, Outlook, Apple Mail หรือ Thunderbird โดยตรง — สี ตาราง และลิงก์จะยังคงอยู่',
  },
}

export default th
