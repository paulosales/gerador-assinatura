export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          Gratuito &amp; sem cadastro
        </p>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">HTML Email Signature Generator</h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Crie assinaturas de e-mail profissionais, 100% compatíveis com Gmail, Outlook, Apple Mail e
          Thunderbird. Preencha o formulário, veja o resultado em tempo real e copie direto para o seu cliente
          de e-mail.
        </p>
      </div>
    </header>
  )
}
