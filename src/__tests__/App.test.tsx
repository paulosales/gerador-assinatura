import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App'
import { ToastProvider } from '../components/toast/ToastProvider'
import i18n from '../i18n'

function renderApp() {
  return render(
    <ToastProvider>
      <App />
    </ToastProvider>,
  )
}

describe('App', () => {
  // Force a deterministic language regardless of the detected/cached locale,
  // since the rest of the assertions below rely on the English copy.
  beforeEach(async () => {
    await i18n.changeLanguage('en')
  })

  it('renders the default signature preview with sample data', () => {
    renderApp()
    const preview = screen.getByTestId('signature-render')
    expect(within(preview).getByText('Alexandre Silva')).toBeInTheDocument()
    expect(within(preview).getByText(/alexandre\.silva@acmecorp\.com/)).toBeInTheDocument()
  })

  it('updates the preview in real time as the user types the full name', async () => {
    const user = userEvent.setup()
    renderApp()

    const nameInput = screen.getByLabelText(/Full name/)
    await user.clear(nameInput)
    await user.type(nameInput, 'Maria Souza')

    const preview = screen.getByTestId('signature-render')
    expect(within(preview).getByText('Maria Souza')).toBeInTheDocument()
  })

  it('switches templates and re-renders the signature accordingly', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /Minimalist Vertical/ }))

    const preview = screen.getByTestId('signature-render')
    // The minimalist template has no <img>, unlike the default classic template.
    expect(within(preview).queryByRole('img')).not.toBeInTheDocument()
  })

  it('switches the UI language when a different language is selected', async () => {
    const user = userEvent.setup()
    renderApp()

    const languageSelect = screen.getByLabelText('Language')
    await user.selectOptions(languageSelect, 'pt')

    expect(await screen.findByText('Gratuito & sem cadastro')).toBeInTheDocument()
    expect(screen.getByLabelText(/Nome completo/)).toBeInTheDocument()
  })
})
