import type { AppTranslations } from '../types'

const vi: AppTranslations = {
  header: {
    badge: 'Miễn phí & không cần đăng ký',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Tạo chữ ký email chuyên nghiệp, tương thích 100% với Gmail, Outlook, Apple Mail và Thunderbird. Điền vào biểu mẫu, xem kết quả theo thời gian thực và sao chép trực tiếp vào ứng dụng email của bạn.',
  },
  languageSwitcher: {
    label: 'Ngôn ngữ',
  },
  form: {
    ariaLabel: 'Biểu mẫu dữ liệu chữ ký',
    sections: {
      general: { title: '1. Thông tin chung', description: 'Họ tên, chức danh và công ty' },
      contact: { title: '2. Liên hệ', description: 'Email, điện thoại, trang web và địa chỉ' },
      media: { title: '3. Phương tiện & mạng xã hội', description: 'Ảnh, logo và hồ sơ mạng xã hội' },
      design: { title: '4. Thiết kế & tùy chỉnh', description: 'Màu sắc, phông chữ và mẫu bố cục' },
    },
    fields: {
      fullName: { label: 'Họ và tên', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Chức danh', placeholder: 'Senior Software Engineer' },
      company: { label: 'Công ty / Tổ chức', placeholder: 'Acme Corp' },
      department: { label: 'Phòng ban (tùy chọn)', placeholder: 'Kỹ thuật Sản phẩm' },
      email: { label: 'Email', placeholder: 'you@company.com' },
      phone: { label: 'Điện thoại công ty', placeholder: '+84 24 1234 5678' },
      mobile: { label: 'Di động', placeholder: '+84 912 345 678' },
      website: {
        label: 'Trang web',
        placeholder: 'https://www.company.com',
        hint: 'Tiền tố https:// sẽ được tự động thêm vào.',
      },
      address: { label: 'Địa chỉ', placeholder: 'Số 1, Đường Lê Lợi' },
      city: { label: 'Thành phố', placeholder: 'Hà Nội' },
      state: { label: 'Tỉnh/Thành', placeholder: 'Hà Nội' },
      photoUrl: {
        label: 'URL ảnh đại diện hoặc logo công ty',
        placeholder: 'https://...',
        hint: 'Sử dụng URL tuyệt đối (https://). Base64 và đường dẫn tương đối không hoạt động trong email.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Màu chính (tên và dấu phân cách)' },
      secondaryColor: { label: 'Màu phụ (liên kết và biểu tượng)' },
      fontFamily: { label: 'Họ phông chữ' },
    },
    templateLabel: 'Mẫu bố cục',
    colorField: {
      pickerAriaLabel: '{{label}} (bộ chọn màu)',
      hexAriaLabel: '{{label}} (giá trị hex)',
    },
  },
  templates: {
    classic: {
      label: 'Cổ điển Ngang',
      description: 'Ảnh bên trái với dấu phân cách dọc và thông tin bên phải.',
    },
    minimal: {
      label: 'Tối giản Dọc',
      description: 'Không có ảnh, dữ liệu trên một dòng gọn gàng với dấu phân cách.',
    },
    corporate: {
      label: 'Thanh lịch Doanh nghiệp',
      description: 'Logo ở trên, tên nổi bật và huy hiệu mạng xã hội.',
    },
  },
  preview: {
    newMessage: 'Thư mới',
    to: 'Đến:',
    toPlaceholder: 'recipient@email.com',
    subject: 'Chủ đề:',
    subjectValue: 'Xin chào!',
    regards: 'Trân trọng,',
  },
  actions: {
    copySignature: 'Sao chép chữ ký vào bộ nhớ tạm',
    copying: 'Đang sao chép…',
    copyCode: 'Sao chép mã HTML gốc',
    download: 'Tải xuống tệp .html',
    toastCopySignatureSuccess: 'Đã sao chép chữ ký! Chỉ cần dán (Ctrl/Cmd+V) vào cài đặt email của bạn.',
    toastCopySignatureError: 'Không thể sao chép tự động. Hãy thử nút "Sao chép mã HTML gốc".',
    toastCopyCodeSuccess: 'Đã sao chép mã HTML vào bộ nhớ tạm!',
    toastCopyCodeError: 'Không thể sao chép mã. Hãy sao chép thủ công từ bảng bên dưới.',
    toastDownload: 'Đang tải xuống {{file}}…',
  },
  codeView: {
    toggle: 'Xem mã HTML đã tạo',
  },
  signatureLabels: {
    email: 'Email',
    phone: 'ĐT',
    mobile: 'Di động',
    website: 'Web',
    address: 'Địa chỉ',
  },
  faq: {
    heading: 'Các câu hỏi thường gặp về chữ ký email HTML',
    items: [
      {
        question: 'Chữ ký có hoạt động trên Gmail, Outlook, Apple Mail và Thunderbird không?',
        answer:
          'Có. Mã HTML được tạo hoàn toàn dựa trên bảng với kiểu nội tuyến, không dùng lớp CSS, khối <style>, Flexbox hay Grid — những công nghệ mà Gmail loại bỏ và công cụ hiển thị của Outlook (Word) không hỗ trợ.',
      },
      {
        question: 'Tại sao tôi không thể dùng ảnh Base64?',
        answer:
          'Các ứng dụng như Gmail chặn hình ảnh Base64 nhúng vì lý do bảo mật, và hầu hết dịch vụ webmail không giữ lại loại dữ liệu này khi dán. Vì vậy chúng tôi luôn yêu cầu URL tuyệt đối (https://) cho ảnh và logo.',
      },
      {
        question: 'Làm thế nào để dán chữ ký vào ứng dụng email của tôi?',
        answer:
          'Nhấp vào "Sao chép chữ ký vào bộ nhớ tạm", mở cài đặt chữ ký của nhà cung cấp email và dán bằng Ctrl+V (hoặc Cmd+V trên Mac). Màu sắc, bảng và liên kết sẽ được giữ nguyên.',
      },
      {
        question: 'Tôi có thể tải xuống mã để sử dụng sau này không?',
        answer:
          'Có, hãy dùng nút "Tải xuống tệp .html" để lưu bản sao cục bộ, hoặc "Sao chép mã HTML gốc" để dán mã nguồn vào bất kỳ trình soạn thảo nào.',
      },
    ],
  },
  footer: {
    tip: 'Mẹo: dán chữ ký đã sao chép trực tiếp vào trình chỉnh sửa chữ ký của Gmail, Outlook, Apple Mail hoặc Thunderbird — màu sắc, bảng và liên kết sẽ được giữ nguyên.',
  },
}

export default vi
