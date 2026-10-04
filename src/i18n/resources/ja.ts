import type { AppTranslations } from '../types'

const ja: AppTranslations = {
  header: {
    badge: '無料・登録不要',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Gmail、Outlook、Apple Mail、Thunderbird と100%互換性のあるプロフェッショナルなメール署名を作成できます。フォームに入力すると、結果がリアルタイムで表示され、そのままメールクライアントにコピーできます。',
  },
  languageSwitcher: {
    label: '言語',
  },
  form: {
    ariaLabel: '署名データフォーム',
    sections: {
      general: { title: '1. 基本情報', description: '氏名、役職、会社' },
      contact: { title: '2. 連絡先', description: 'メール、電話、ウェブサイト、住所' },
      media: { title: '3. メディア & ソーシャルネットワーク', description: '写真、ロゴ、SNSプロフィール' },
      design: { title: '4. デザインとカスタマイズ', description: '色、フォント、レイアウトテンプレート' },
    },
    fields: {
      fullName: { label: '氏名', placeholder: 'Alexandre Silva' },
      jobTitle: { label: '役職', placeholder: 'Senior Software Engineer' },
      company: { label: '会社 / 組織', placeholder: 'Acme Corp' },
      department: { label: '部署（任意）', placeholder: 'プロダクトエンジニアリング部' },
      email: { label: 'メールアドレス', placeholder: 'you@company.com' },
      phone: { label: '会社電話', placeholder: '+81 3-1234-5678' },
      mobile: { label: '携帯電話', placeholder: '+81 90-1234-5678' },
      website: {
        label: 'ウェブサイト',
        placeholder: 'https://www.company.com',
        hint: 'https:// というプレフィックスは自動的に追加されます。',
      },
      address: { label: '住所', placeholder: '本町1丁目1番地' },
      city: { label: '市区町村', placeholder: '東京' },
      state: { label: '都道府県', placeholder: '東京都' },
      photoUrl: {
        label: 'プロフィール写真または会社ロゴのURL',
        placeholder: 'https://...',
        hint: '絶対URL（https://）を使用してください。Base64や相対パスはメールでは機能しません。',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X（Twitter）', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'プライマリカラー（氏名・区切り線）' },
      secondaryColor: { label: 'セカンダリカラー（リンク・アイコン）' },
      fontFamily: { label: 'フォントファミリー' },
    },
    templateLabel: 'レイアウトテンプレート',
    colorField: {
      pickerAriaLabel: '{{label}}（カラーピッカー）',
      hexAriaLabel: '{{label}}（16進数値）',
    },
  },
  templates: {
    classic: {
      label: 'クラシック・ホリゾンタル',
      description: '左側に写真と縦の区切り線、右側に詳細情報。',
    },
    minimal: {
      label: 'ミニマル・バーティカル',
      description: '写真なし、区切り記号付きのコンパクトな1行表示。',
    },
    corporate: {
      label: 'エレガント・コーポレート',
      description: '上部にロゴ、氏名を強調、SNSバッジ付き。',
    },
  },
  preview: {
    newMessage: '新規メッセージ',
    to: '宛先：',
    toPlaceholder: 'recipient@email.com',
    subject: '件名：',
    subjectValue: 'こんにちは！',
    regards: 'よろしくお願いいたします。',
  },
  actions: {
    copySignature: '署名をクリップボードにコピー',
    copying: 'コピー中…',
    copyCode: 'HTMLソースコードをコピー',
    download: '.htmlファイルをダウンロード',
    toastCopySignatureSuccess: '署名をコピーしました！メールの設定画面に貼り付け（Ctrl/Cmd+V）るだけです。',
    toastCopySignatureError: '自動コピーに失敗しました。「HTMLソースコードをコピー」ボタンをお試しください。',
    toastCopyCodeSuccess: 'HTMLコードをクリップボードにコピーしました！',
    toastCopyCodeError: 'コードをコピーできませんでした。下のパネルから手動でコピーしてください。',
    toastDownload: '{{file}} をダウンロード中…',
  },
  codeView: {
    toggle: '生成されたHTMLコードを表示',
  },
  signatureLabels: {
    email: 'メール',
    phone: '電話',
    mobile: '携帯',
    website: 'サイト',
    address: '住所',
  },
  faq: {
    heading: 'HTMLメール署名に関するよくある質問',
    items: [
      {
        question: 'Gmail、Outlook、Apple Mail、Thunderbirdで署名は機能しますか？',
        answer:
          'はい。生成されるHTMLは、CSSクラス、<style>ブロック、Flexbox、Gridを使用せず、インラインスタイルを使ったテーブルのみで100%構成されています。これらはGmailが除去し、Outlook（Word）のレンダリングエンジンがサポートしていない技術です。',
      },
      {
        question: 'なぜBase64形式の写真を使用できないのですか？',
        answer:
          'Gmailなどのクライアントはセキュリティ上の理由から埋め込みBase64画像をブロックし、多くのWebメールサービスは貼り付け時にこの種のデータを保持しません。そのため、写真やロゴには常に絶対URL（https://）が必要です。',
      },
      {
        question: 'メールクライアントに署名を貼り付けるにはどうすればよいですか？',
        answer:
          '「署名をクリップボードにコピー」をクリックし、お使いのメールプロバイダーの署名設定を開いて、Ctrl+V（Macの場合はCmd+V）で貼り付けてください。色、テーブル、リンクはそのまま維持されます。',
      },
      {
        question: '後で使用するためにコードをダウンロードできますか？',
        answer:
          'はい、ローカルコピーを保存するには「.htmlファイルをダウンロード」ボタンを、ソースコードを任意のエディタに貼り付けるには「HTMLソースコードをコピー」をご利用ください。',
      },
    ],
  },
  footer: {
    tip: 'ヒント：コピーした署名をGmail、Outlook、Apple Mail、Thunderbirdの署名エディタに直接貼り付けてください。色、テーブル、リンクはそのまま保持されます。',
  },
}

export default ja
