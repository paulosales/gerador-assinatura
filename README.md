# HTML Email Signature Generator

Aplicação web para criar assinaturas de e-mail profissionais em HTML, 100% compatíveis com **Gmail**,
**Outlook** (desktop/Word engine), **Apple Mail** e **Thunderbird**. Preencha o formulário, veja o
resultado em tempo real e copie a assinatura já formatada para colar direto nas configurações do seu
cliente de e-mail — ou exporte o código HTML puro.

## ✨ Funcionalidades

- **Formulário em tempo real** organizado em seções retráteis: Informações gerais, Contatos, Mídia e
  redes sociais, Design e personalização (cores, fonte, template).
- **3 templates de layout**: Clássico Horizontal (foto + divisória), Minimalista Vertical (sem foto,
  linha compacta) e Corporativo Elegante (logo centralizado + badges de redes sociais).
- **Preview ao vivo** dentro de uma simulação de janela de composição de e-mail.
- **Copiar assinatura formatada** para a área de transferência via `ClipboardItem` (`text/html` +
  `text/plain`), com fallback automático via `execCommand('copy')` para navegadores sem suporte.
- **Copiar código HTML puro** e **baixar arquivo `.html`** de backup.
- Notificações (toast) de feedback para cada ação.

## 🔒 Regras de compatibilidade de e-mail (geração do HTML)

O HTML gerado para a assinatura segue regras estritas para sobreviver à sanitização dos principais
clientes de e-mail:

- 100% baseado em `<table>` com `cellpadding="0" cellspacing="0" border="0"` e `border-collapse: collapse`.
- Estilos **sempre inline** em `<td>`, `<span>`, `<a>` e `<img>` — sem classes CSS e sem blocos `<style>`.
- Sem Flexbox/Grid (incompatíveis com o motor Word do Outlook desktop).
- Imagens sempre com `width`/`height` fixos (atributo + inline) e URL absoluta `https://` — nunca
  Base64 ou caminhos relativos.
- Links com `style="color:inherit;text-decoration:none;"` para não herdar o azul padrão do Outlook.

Essas regras são cobertas por testes automatizados em
[`src/__tests__/signatureGenerator.test.ts`](src/__tests__/signatureGenerator.test.ts).

## 🛠️ Stack técnica

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como build tool
- [Tailwind CSS v4](https://tailwindcss.com/) para a UI da aplicação (não usado no HTML da assinatura)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes

## 🚀 Scripts

```bash
npm run dev          # inicia o servidor de desenvolvimento
npm run build         # type-check + build de produção
npm run preview        # pré-visualiza o build de produção
npm test               # roda a suíte de testes (vitest)
npm run test:watch     # testes em modo watch
npm run lint           # ESLint
npm run prettier        # formata todo o projeto com Prettier
```

## 📁 Estrutura de pastas

```
src/
  components/
    actions/        # botões de copiar/baixar
    form/            # formulário (accordion + campos reutilizáveis)
    layout/          # header/footer
    preview/         # painel de preview + visualizador de código
    toast/           # sistema de notificações
  data/options.ts    # opções de fonte/template + dados padrão de exemplo
  hooks/             # hooks (useToast)
  lib/
    signatureGenerator/  # geração do HTML (um arquivo por template) + helpers
    clipboard.ts          # cópia rica (ClipboardItem + fallback execCommand)
    download.ts           # download do arquivo .html
  types.ts           # tipos compartilhados (SignatureData, templates, fontes)
  __tests__/         # testes de geração de HTML, clipboard e integração da UI
```

## 🔍 SEO

`index.html` inclui title/description otimizados, Open Graph, Twitter Card, dados estruturados
(JSON-LD `WebApplication`) e `public/robots.txt` + `public/sitemap.xml`. A página também contém uma
seção de perguntas frequentes (FAQ) com conteúdo textual indexável sobre compatibilidade de e-mail.
