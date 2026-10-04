import { useTranslation } from 'react-i18next'
import { FONT_OPTIONS, TEMPLATE_IDS } from '../../data/options'
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
  const { t } = useTranslation()

  return (
    <form
      className="flex flex-col gap-4"
      aria-label={t('form.ariaLabel')}
      onSubmit={(e) => e.preventDefault()}
    >
      <AccordionSection
        title={t('form.sections.general.title')}
        description={t('form.sections.general.description')}
        defaultOpen
      >
        <TextField
          label={t('form.fields.fullName.label')}
          name="fullName"
          value={data.fullName}
          onChange={(value) => onFieldChange('fullName', value)}
          placeholder={t('form.fields.fullName.placeholder')}
          required
        />
        <TextField
          label={t('form.fields.jobTitle.label')}
          name="jobTitle"
          value={data.jobTitle}
          onChange={(value) => onFieldChange('jobTitle', value)}
          placeholder={t('form.fields.jobTitle.placeholder')}
        />
        <TextField
          label={t('form.fields.company.label')}
          name="company"
          value={data.company}
          onChange={(value) => onFieldChange('company', value)}
          placeholder={t('form.fields.company.placeholder')}
        />
        <TextField
          label={t('form.fields.department.label')}
          name="department"
          value={data.department}
          onChange={(value) => onFieldChange('department', value)}
          placeholder={t('form.fields.department.placeholder')}
        />
      </AccordionSection>

      <AccordionSection
        title={t('form.sections.contact.title')}
        description={t('form.sections.contact.description')}
      >
        <TextField
          label={t('form.fields.email.label')}
          name="email"
          type="email"
          value={data.email}
          onChange={(value) => onFieldChange('email', value)}
          placeholder={t('form.fields.email.placeholder')}
        />
        <TextField
          label={t('form.fields.phone.label')}
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(value) => onFieldChange('phone', value)}
          placeholder={t('form.fields.phone.placeholder')}
        />
        <TextField
          label={t('form.fields.mobile.label')}
          name="mobile"
          type="tel"
          value={data.mobile}
          onChange={(value) => onFieldChange('mobile', value)}
          placeholder={t('form.fields.mobile.placeholder')}
        />
        <TextField
          label={t('form.fields.website.label')}
          name="website"
          type="url"
          value={data.website}
          onChange={(value) => onFieldChange('website', value)}
          placeholder={t('form.fields.website.placeholder')}
          hint={t('form.fields.website.hint')}
        />
        <TextField
          label={t('form.fields.address.label')}
          name="address"
          value={data.address}
          onChange={(value) => onFieldChange('address', value)}
          placeholder={t('form.fields.address.placeholder')}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label={t('form.fields.city.label')}
            name="city"
            value={data.city}
            onChange={(value) => onFieldChange('city', value)}
            placeholder={t('form.fields.city.placeholder')}
          />
          <TextField
            label={t('form.fields.state.label')}
            name="state"
            value={data.state}
            onChange={(value) => onFieldChange('state', value)}
            placeholder={t('form.fields.state.placeholder')}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        title={t('form.sections.media.title')}
        description={t('form.sections.media.description')}
      >
        <TextField
          label={t('form.fields.photoUrl.label')}
          name="photoUrl"
          type="url"
          value={data.photoUrl}
          onChange={(value) => onFieldChange('photoUrl', value)}
          placeholder={t('form.fields.photoUrl.placeholder')}
          hint={t('form.fields.photoUrl.hint')}
        />
        <TextField
          label={t('form.fields.linkedin.label')}
          name="linkedin"
          type="url"
          value={data.social.linkedin}
          onChange={(value) => onSocialChange('linkedin', value)}
          placeholder={t('form.fields.linkedin.placeholder')}
        />
        <TextField
          label={t('form.fields.github.label')}
          name="github"
          type="url"
          value={data.social.github}
          onChange={(value) => onSocialChange('github', value)}
          placeholder={t('form.fields.github.placeholder')}
        />
        <TextField
          label={t('form.fields.twitter.label')}
          name="twitter"
          type="url"
          value={data.social.twitter}
          onChange={(value) => onSocialChange('twitter', value)}
          placeholder={t('form.fields.twitter.placeholder')}
        />
        <TextField
          label={t('form.fields.instagram.label')}
          name="instagram"
          type="url"
          value={data.social.instagram}
          onChange={(value) => onSocialChange('instagram', value)}
          placeholder={t('form.fields.instagram.placeholder')}
        />
      </AccordionSection>

      <AccordionSection
        title={t('form.sections.design.title')}
        description={t('form.sections.design.description')}
      >
        <ColorField
          label={t('form.fields.primaryColor.label')}
          value={data.primaryColor}
          onChange={(value) => onFieldChange('primaryColor', value)}
        />
        <ColorField
          label={t('form.fields.secondaryColor.label')}
          value={data.secondaryColor}
          onChange={(value) => onFieldChange('secondaryColor', value)}
        />
        <SelectField
          label={t('form.fields.fontFamily.label')}
          value={data.fontFamily}
          onChange={(value) => onFieldChange('fontFamily', value as SignatureData['fontFamily'])}
          options={FONT_OPTIONS.map((font) => ({ value: font.id, label: font.label }))}
        />
        <div className="sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">{t('form.templateLabel')}</span>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TEMPLATE_IDS.map((templateId) => (
              <button
                key={templateId}
                type="button"
                onClick={() => onFieldChange('template', templateId)}
                aria-pressed={data.template === templateId}
                className={`rounded-lg border px-3 py-3 text-left text-xs transition ${
                  data.template === templateId
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <span className="block text-sm font-semibold text-slate-900">
                  {t(`templates.${templateId}.label`)}
                </span>
                <span className="mt-1 block text-slate-500">{t(`templates.${templateId}.description`)}</span>
              </button>
            ))}
          </div>
        </div>
      </AccordionSection>
    </form>
  )
}
