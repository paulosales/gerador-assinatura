import type { AppTranslations } from '../types'

const ko: AppTranslations = {
  header: {
    badge: '무료 & 가입 불필요',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Gmail, Outlook, Apple Mail, Thunderbird와 100% 호환되는 전문적인 이메일 서명을 만드세요. 양식을 작성하면 결과를 실시간으로 확인할 수 있으며, 이메일 클라이언트에 바로 복사할 수 있습니다.',
  },
  languageSwitcher: {
    label: '언어',
  },
  form: {
    ariaLabel: '서명 데이터 양식',
    sections: {
      general: { title: '1. 일반 정보', description: '이름, 직책 및 회사' },
      contact: { title: '2. 연락처', description: '이메일, 전화번호, 웹사이트 및 주소' },
      media: { title: '3. 미디어 및 소셜 네트워크', description: '사진, 로고 및 소셜 프로필' },
      design: { title: '4. 디자인 및 사용자 지정', description: '색상, 글꼴 및 레이아웃 템플릿' },
    },
    fields: {
      fullName: { label: '이름', placeholder: 'Alexandre Silva' },
      jobTitle: { label: '직책', placeholder: 'Senior Software Engineer' },
      company: { label: '회사 / 조직', placeholder: 'Acme Corp' },
      department: { label: '부서 (선택사항)', placeholder: '제품 엔지니어링팀' },
      email: { label: '이메일', placeholder: 'you@company.com' },
      phone: { label: '회사 전화번호', placeholder: '+82 2-1234-5678' },
      mobile: { label: '휴대전화', placeholder: '+82 10-1234-5678' },
      website: {
        label: '웹사이트',
        placeholder: 'https://www.company.com',
        hint: 'https:// 접두사는 자동으로 추가됩니다.',
      },
      address: { label: '주소', placeholder: '중앙로 1길' },
      city: { label: '도시', placeholder: '서울' },
      state: { label: '시/도', placeholder: '서울특별시' },
      photoUrl: {
        label: '프로필 사진 또는 회사 로고 URL',
        placeholder: 'https://...',
        hint: '절대 URL(https://)을 사용하세요. Base64 및 상대 경로는 이메일에서 작동하지 않습니다.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: '기본 색상 (이름 및 구분선)' },
      secondaryColor: { label: '보조 색상 (링크 및 아이콘)' },
      fontFamily: { label: '글꼴 패밀리' },
    },
    templateLabel: '레이아웃 템플릿',
    colorField: {
      pickerAriaLabel: '{{label}} (색상 선택기)',
      hexAriaLabel: '{{label}} (16진수 값)',
    },
  },
  templates: {
    classic: {
      label: '클래식 가로형',
      description: '왼쪽에 사진과 세로 구분선, 오른쪽에 세부 정보.',
    },
    minimal: {
      label: '미니멀 세로형',
      description: '사진 없이 구분 기호가 있는 한 줄로 압축된 정보.',
    },
    corporate: {
      label: '엘레강트 기업형',
      description: '상단 로고, 이름 강조 및 소셜 네트워크 배지.',
    },
  },
  preview: {
    newMessage: '새 메시지',
    to: '받는 사람:',
    toPlaceholder: 'recipient@email.com',
    subject: '제목:',
    subjectValue: '안녕하세요!',
    regards: '감사합니다,',
  },
  actions: {
    copySignature: '서명을 클립보드에 복사',
    copying: '복사 중…',
    copyCode: '원본 HTML 코드 복사',
    download: '.html 파일 다운로드',
    toastCopySignatureSuccess: '서명이 복사되었습니다! 이메일 설정에 붙여넣기(Ctrl/Cmd+V)만 하면 됩니다.',
    toastCopySignatureError: '자동으로 복사할 수 없습니다. "원본 HTML 코드 복사" 버튼을 사용해 보세요.',
    toastCopyCodeSuccess: 'HTML 코드가 클립보드에 복사되었습니다!',
    toastCopyCodeError: '코드를 복사할 수 없습니다. 아래 패널에서 수동으로 복사하세요.',
    toastDownload: '{{file}} 다운로드 중…',
  },
  codeView: {
    toggle: '생성된 HTML 코드 보기',
  },
  signatureLabels: {
    email: '이메일',
    phone: '전화',
    mobile: '휴대폰',
    website: '웹사이트',
    address: '주소',
  },
  faq: {
    heading: 'HTML 이메일 서명에 대한 자주 묻는 질문',
    items: [
      {
        question: '서명이 Gmail, Outlook, Apple Mail, Thunderbird에서 작동하나요?',
        answer:
          '네. 생성된 HTML은 CSS 클래스, <style> 블록, Flexbox 또는 Grid 없이 인라인 스타일을 사용한 테이블을 100% 기반으로 합니다. 이는 Gmail이 제거하고 Outlook(Word)의 렌더링 엔진이 지원하지 않는 기술입니다.',
      },
      {
        question: '왜 Base64 사진을 사용할 수 없나요?',
        answer:
          'Gmail과 같은 클라이언트는 보안상의 이유로 포함된 Base64 이미지를 차단하며, 대부분의 웹메일 서비스는 붙여넣을 때 이러한 종류의 데이터를 유지하지 않습니다. 그래서 사진과 로고에는 항상 절대 URL(https://)이 필요합니다.',
      },
      {
        question: '이메일 클라이언트에 서명을 어떻게 붙여넣나요?',
        answer:
          '"서명을 클립보드에 복사"를 클릭하고, 이메일 제공업체의 서명 설정을 연 다음 Ctrl+V(Mac에서는 Cmd+V)로 붙여넣으세요. 색상, 표, 링크가 그대로 유지됩니다.',
      },
      {
        question: '나중에 사용하기 위해 코드를 다운로드할 수 있나요?',
        answer:
          '네, 로컬 사본을 저장하려면 ".html 파일 다운로드" 버튼을, 소스 코드를 다른 편집기에 붙여넣으려면 "원본 HTML 코드 복사"를 사용하세요.',
      },
    ],
  },
  footer: {
    tip: '팁: 복사한 서명을 Gmail, Outlook, Apple Mail 또는 Thunderbird의 서명 편집기에 직접 붙여넣으세요. 색상, 표, 링크가 그대로 유지됩니다.',
  },
}

export default ko
