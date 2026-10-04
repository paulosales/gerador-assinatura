import type { AppTranslations } from '../types'

const zh: AppTranslations = {
  header: {
    badge: '免费且无需注册',
    title: 'HTML Email Signature Generator',
    subtitle:
      '创建专业的电子邮件签名，100% 兼容 Gmail、Outlook、Apple Mail 和 Thunderbird。填写表单，实时查看效果，然后直接复制到您的邮件客户端。',
  },
  languageSwitcher: {
    label: '语言',
  },
  form: {
    ariaLabel: '签名数据表单',
    sections: {
      general: { title: '1. 基本信息', description: '姓名、职位和公司' },
      contact: { title: '2. 联系方式', description: '电子邮件、电话、网站和地址' },
      media: { title: '3. 媒体与社交网络', description: '照片、徽标和社交媒体资料' },
      design: { title: '4. 设计与自定义', description: '颜色、字体和布局模板' },
    },
    fields: {
      fullName: { label: '全名', placeholder: 'Alexandre Silva' },
      jobTitle: { label: '职位', placeholder: 'Senior Software Engineer' },
      company: { label: '公司 / 组织', placeholder: 'Acme Corp' },
      department: { label: '部门（可选）', placeholder: '产品工程部' },
      email: { label: '电子邮件', placeholder: 'you@company.com' },
      phone: { label: '办公电话', placeholder: '+86 10 1234 5678' },
      mobile: { label: '手机', placeholder: '+86 138 0013 8000' },
      website: {
        label: '网站',
        placeholder: 'https://www.company.com',
        hint: '系统会自动添加 https:// 前缀。',
      },
      address: { label: '地址', placeholder: '中山路1号' },
      city: { label: '城市', placeholder: '上海' },
      state: { label: '省/州', placeholder: '上海' },
      photoUrl: {
        label: '头像照片或公司徽标的 URL',
        placeholder: 'https://...',
        hint: '请使用绝对 URL（https://）。Base64 和相对路径在电子邮件中无法使用。',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X（Twitter）', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: '主色调（姓名和分隔线）' },
      secondaryColor: { label: '次色调（链接和图标）' },
      fontFamily: { label: '字体系列' },
    },
    templateLabel: '布局模板',
    colorField: {
      pickerAriaLabel: '{{label}}（颜色选择器）',
      hexAriaLabel: '{{label}}（十六进制值）',
    },
  },
  templates: {
    classic: {
      label: '经典横版',
      description: '左侧照片配垂直分隔线，右侧为详细信息。',
    },
    minimal: {
      label: '极简竖版',
      description: '无照片，信息以紧凑单行配分隔符显示。',
    },
    corporate: {
      label: '优雅商务版',
      description: '顶部徽标，姓名突出显示，并附带社交网络徽章。',
    },
  },
  preview: {
    newMessage: '新邮件',
    to: '收件人：',
    toPlaceholder: 'recipient@email.com',
    subject: '主题：',
    subjectValue: '你好！',
    regards: '此致敬礼，',
  },
  actions: {
    copySignature: '复制签名到剪贴板',
    copying: '正在复制…',
    copyCode: '复制原始 HTML 代码',
    download: '下载 .html 文件',
    toastCopySignatureSuccess: '签名已复制！只需在您的邮件设置中粘贴（Ctrl/Cmd+V）即可。',
    toastCopySignatureError: '无法自动复制。请尝试点击"复制原始 HTML 代码"按钮。',
    toastCopyCodeSuccess: 'HTML 代码已复制到剪贴板！',
    toastCopyCodeError: '无法复制代码。请从下方面板手动复制。',
    toastDownload: '正在下载 {{file}}…',
  },
  codeView: {
    toggle: '查看生成的 HTML 代码',
  },
  signatureLabels: {
    email: '邮箱',
    phone: '电话',
    mobile: '手机',
    website: '网站',
    address: '地址',
  },
  faq: {
    heading: '关于 HTML 电子邮件签名的常见问题',
    items: [
      {
        question: '签名能在 Gmail、Outlook、Apple Mail 和 Thunderbird 中正常显示吗？',
        answer:
          '可以。生成的 HTML 完全基于带有内联样式的表格，不使用 CSS 类、<style> 代码块、Flexbox 或 Grid——这些都是 Gmail 会移除且 Outlook（Word）渲染引擎不支持的技术。',
      },
      {
        question: '为什么不能使用 Base64 格式的照片？',
        answer:
          'Gmail 等客户端出于安全原因会屏蔽嵌入的 Base64 图片，而且大多数网页邮箱在粘贴时不会保留这类数据。因此，照片和徽标必须始终使用绝对 URL（https://）。',
      },
      {
        question: '如何将签名粘贴到我的邮件客户端？',
        answer:
          '点击"复制签名到剪贴板"，打开您邮件服务商的签名设置，然后用 Ctrl+V（Mac 上为 Cmd+V）粘贴。颜色、表格和链接都会被保留。',
      },
      {
        question: '我可以下载代码以备日后使用吗？',
        answer:
          '可以，使用"下载 .html 文件"按钮保存本地副本，或使用"复制原始 HTML 代码"将源代码粘贴到任何编辑器中。',
      },
    ],
  },
  footer: {
    tip: '提示：将复制的签名直接粘贴到 Gmail、Outlook、Apple Mail 或 Thunderbird 的签名编辑器中——颜色、表格和链接都会被保留。',
  },
}

export default zh
