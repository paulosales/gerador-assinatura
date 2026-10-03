const FAQ_ITEMS = [
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
]

export function SeoContent() {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
      <h2 id="faq-heading" className="text-lg font-bold text-slate-900">
        Perguntas frequentes sobre assinaturas de e-mail em HTML
      </h2>
      <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <dt className="text-sm font-semibold text-slate-800">{item.question}</dt>
            <dd className="mt-1 text-sm text-slate-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
