import { FONT_OPTIONS, TEMPLATE_OPTIONS } from '../../data/options'
import type { SignatureData, SocialLinks } from '../../types'
import { AccordionSection } from './AccordionSection'
import { ColorField } from './fields/ColorField'
import { SelectField } from './fields/SelectField'
import { TextField } from './fields/TextField'

interface SignatureFormProps {
  data: SignatureData
  onFieldChange: <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => void
  onSocialChange: <K extends keyof SocialLinks>(field: K, value: string) => void
}

export function SignatureForm({ data, onFieldChange, onSocialChange }: SignatureFormProps) {
  return (
    <form
      className="flex flex-col gap-4"
      aria-label="Formulário de dados da assinatura"
      onSubmit={(e) => e.preventDefault()}
    >
      <AccordionSection title="1. Informações gerais" description="Nome, cargo e empresa" defaultOpen>
        <TextField
          label="Nome completo"
          name="fullName"
          value={data.fullName}
          onChange={(value) => onFieldChange('fullName', value)}
          placeholder="Alexandre Silva"
          required
        />
        <TextField
          label="Cargo / Título"
          name="jobTitle"
          value={data.jobTitle}
          onChange={(value) => onFieldChange('jobTitle', value)}
          placeholder="Senior Software Engineer"
        />
        <TextField
          label="Empresa / Organização"
          name="company"
          value={data.company}
          onChange={(value) => onFieldChange('company', value)}
          placeholder="Acme Corp"
        />
        <TextField
          label="Departamento (opcional)"
          name="department"
          value={data.department}
          onChange={(value) => onFieldChange('department', value)}
          placeholder="Engenharia de Produto"
        />
      </AccordionSection>

      <AccordionSection title="2. Contatos" description="E-mail, telefone, site e endereço">
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={(value) => onFieldChange('email', value)}
          placeholder="voce@empresa.com"
        />
        <TextField
          label="Telefone comercial"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(value) => onFieldChange('phone', value)}
          placeholder="+55 11 4002-8922"
        />
        <TextField
          label="Celular"
          name="mobile"
          type="tel"
          value={data.mobile}
          onChange={(value) => onFieldChange('mobile', value)}
          placeholder="+55 11 99876-5432"
        />
        <TextField
          label="Website"
          name="website"
          type="url"
          value={data.website}
          onChange={(value) => onFieldChange('website', value)}
          placeholder="https://www.empresa.com"
          hint="O prefixo https:// é adicionado automaticamente."
        />
        <TextField
          label="Endereço"
          name="address"
          value={data.address}
          onChange={(value) => onFieldChange('address', value)}
          placeholder="Av. Paulista, 1000"
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Cidade"
            name="city"
            value={data.city}
            onChange={(value) => onFieldChange('city', value)}
            placeholder="São Paulo"
          />
          <TextField
            label="Estado"
            name="state"
            value={data.state}
            onChange={(value) => onFieldChange('state', value)}
            placeholder="SP"
          />
        </div>
      </AccordionSection>

      <AccordionSection title="3. Mídia e redes sociais" description="Foto, logo e perfis sociais">
        <TextField
          label="URL da foto de perfil ou logo"
          name="photoUrl"
          type="url"
          value={data.photoUrl}
          onChange={(value) => onFieldChange('photoUrl', value)}
          placeholder="https://..."
          hint="Use uma URL absoluta (https://). Base64 e caminhos relativos não funcionam em e-mails."
        />
        <TextField
          label="LinkedIn"
          name="linkedin"
          type="url"
          value={data.social.linkedin}
          onChange={(value) => onSocialChange('linkedin', value)}
          placeholder="https://linkedin.com/in/..."
        />
        <TextField
          label="GitHub"
          name="github"
          type="url"
          value={data.social.github}
          onChange={(value) => onSocialChange('github', value)}
          placeholder="https://github.com/..."
        />
        <TextField
          label="X (Twitter)"
          name="twitter"
          type="url"
          value={data.social.twitter}
          onChange={(value) => onSocialChange('twitter', value)}
          placeholder="https://x.com/..."
        />
        <TextField
          label="Instagram"
          name="instagram"
          type="url"
          value={data.social.instagram}
          onChange={(value) => onSocialChange('instagram', value)}
          placeholder="https://instagram.com/..."
        />
      </AccordionSection>

      <AccordionSection title="4. Design e personalização" description="Cores, fonte e modelo de layout">
        <ColorField
          label="Cor primária (nome e divisórias)"
          value={data.primaryColor}
          onChange={(value) => onFieldChange('primaryColor', value)}
        />
        <ColorField
          label="Cor secundária (links e ícones)"
          value={data.secondaryColor}
          onChange={(value) => onFieldChange('secondaryColor', value)}
        />
        <SelectField
          label="Família tipográfica"
          value={data.fontFamily}
          onChange={(value) => onFieldChange('fontFamily', value as SignatureData['fontFamily'])}
          options={FONT_OPTIONS.map((font) => ({ value: font.id, label: font.label }))}
        />
        <div className="sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Modelo de layout</span>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TEMPLATE_OPTIONS.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => onFieldChange('template', template.id)}
                aria-pressed={data.template === template.id}
                className={`rounded-lg border px-3 py-3 text-left text-xs transition ${
                  data.template === template.id
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <span className="block text-sm font-semibold text-slate-900">{template.label}</span>
                <span className="mt-1 block text-slate-500">{template.description}</span>
              </button>
            ))}
          </div>
        </div>
      </AccordionSection>
    </form>
  )
}
