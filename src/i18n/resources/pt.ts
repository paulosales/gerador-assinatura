import type { AppTranslations } from '../types'

const pt: AppTranslations = {
  header: {
    badge: 'Gratuito & sem cadastro',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Crie assinaturas de e-mail profissionais, 100% compatíveis com Gmail, Outlook, Apple Mail e Thunderbird. Preencha o formulário, veja o resultado em tempo real e copie direto para o seu cliente de e-mail.',
  },
  languageSwitcher: {
    label: 'Idioma',
  },
  form: {
    ariaLabel: 'Formulário de dados da assinatura',
    sections: {
      general: { title: '1. Informações gerais', description: 'Nome, cargo e empresa' },
      contact: { title: '2. Contatos', description: 'E-mail, telefone, site e endereço' },
      media: { title: '3. Mídia e redes sociais', description: 'Foto, logo e perfis sociais' },
      design: { title: '4. Design e personalização', description: 'Cores, fonte e modelo de layout' },
    },
    fields: {
      fullName: { label: 'Nome completo', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Cargo / Título', placeholder: 'Senior Software Engineer' },
      company: { label: 'Empresa / Organização', placeholder: 'Acme Corp' },
      department: { label: 'Departamento (opcional)', placeholder: 'Engenharia de Produto' },
      email: { label: 'E-mail', placeholder: 'voce@empresa.com' },
      phone: { label: 'Telefone comercial', placeholder: '+55 11 4002-8922' },
      mobile: { label: 'Celular', placeholder: '+55 11 99876-5432' },
      website: {
        label: 'Website',
        placeholder: 'https://www.empresa.com',
        hint: 'O prefixo https:// é adicionado automaticamente.',
      },
      address: { label: 'Endereço', placeholder: 'Av. Paulista, 1000' },
      city: { label: 'Cidade', placeholder: 'São Paulo' },
      state: { label: 'Estado', placeholder: 'SP' },
      photoUrl: {
        label: 'URL da foto de perfil ou logo',
        placeholder: 'https://...',
        hint: 'Use uma URL absoluta (https://). Base64 e caminhos relativos não funcionam em e-mails.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Cor primária (nome e divisórias)' },
      secondaryColor: { label: 'Cor secundária (links e ícones)' },
      fontFamily: { label: 'Família tipográfica' },
    },
    templateLabel: 'Modelo de layout',
    colorField: {
      pickerAriaLabel: '{{label}} (seletor visual)',
      hexAriaLabel: '{{label}} (valor hexadecimal)',
    },
  },
  templates: {
    classic: {
      label: 'Clássico Horizontal',
      description: 'Foto à esquerda com divisória vertical e dados à direita.',
    },
    minimal: {
      label: 'Minimalista Vertical',
      description: 'Sem foto, dados em linha única compacta com separadores.',
    },
    corporate: {
      label: 'Corporativo Elegante',
      description: 'Logo acima, nome em destaque e badges para redes sociais.',
    },
  },
  preview: {
    newMessage: 'Nova mensagem',
    to: 'Para:',
    toPlaceholder: 'destinatario@email.com',
    subject: 'Assunto:',
    subjectValue: 'Olá!',
    regards: 'Atenciosamente,',
  },
  actions: {
    copySignature: 'Copiar assinatura para a área de transferência',
    copying: 'Copiando…',
    copyCode: 'Copiar código HTML puro',
    download: 'Baixar arquivo .html',
    toastCopySignatureSuccess:
      'Assinatura copiada! Basta colar (Ctrl/Cmd+V) nas configurações do seu e-mail.',
    toastCopySignatureError: 'Não foi possível copiar automaticamente. Tente o botão "Copiar código HTML".',
    toastCopyCodeSuccess: 'Código HTML copiado para a área de transferência!',
    toastCopyCodeError: 'Não foi possível copiar o código. Copie manualmente no painel abaixo.',
    toastDownload: 'Baixando {{file}}…',
  },
  codeView: {
    toggle: 'Ver código HTML gerado',
  },
  signatureLabels: {
    email: 'E-mail',
    phone: 'Tel',
    mobile: 'Celular',
    website: 'Site',
    address: 'Endereço',
  },
  faq: {
    heading: 'Perguntas frequentes sobre assinaturas de e-mail em HTML',
    items: [
      {
        question: 'A assinatura funciona no Gmail, Outlook, Apple Mail e Thunderbird?',
        answer:
          'Sim. O HTML gerado é 100% baseado em tabelas com estilos inline, sem classes CSS, blocos <style>, Flexbox ou Grid — as tecnologias que o Gmail remove e que o motor de renderização do Outlook (Word) não suporta.',
      },
      {
        question: 'Por que não posso usar uma foto em Base64?',
        answer:
          'Clientes como o Gmail bloqueiam imagens embutidas em Base64 por segurança e a maioria dos webmails não preserva esse tipo de dado ao colar. Por isso exigimos sempre uma URL absoluta (https://) para fotos e logos.',
      },
      {
        question: 'Como eu colo a assinatura no meu cliente de e-mail?',
        answer:
          'Clique em "Copiar assinatura para a área de transferência", abra as configurações de assinatura do seu provedor de e-mail e cole com Ctrl+V (ou Cmd+V no Mac). As cores, a tabela e os links são mantidos.',
      },
      {
        question: 'Posso baixar o código para usar depois?',
        answer:
          'Sim, use o botão "Baixar arquivo .html" para salvar uma cópia local, ou "Copiar código HTML puro" para colar o código-fonte em qualquer editor.',
      },
    ],
  },
  footer: {
    tip: 'Dica: cole a assinatura copiada diretamente no editor de assinatura do Gmail, Outlook, Apple Mail ou Thunderbird — as cores, a tabela e os links são preservados.',
  },
}

export default pt
