import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'
import { ToastProvider } from '../components/toast/ToastProvider'

function renderApp() {
  return render(
    <ToastProvider>
      <App />
    </ToastProvider>,
  )
}

describe('App', () => {
  it('renders the default signature preview with sample data', () => {
    renderApp()
    const preview = screen.getByTestId('signature-render')
    expect(within(preview).getByText('Alexandre Silva')).toBeInTheDocument()
    expect(within(preview).getByText(/alexandre\.silva@acmecorp\.com/)).toBeInTheDocument()
  })

  it('updates the preview in real time as the user types the full name', async () => {
    const user = userEvent.setup()
    renderApp()

    const nameInput = screen.getByLabelText(/Nome completo/)
    await user.clear(nameInput)
    await user.type(nameInput, 'Maria Souza')

    const preview = screen.getByTestId('signature-render')
    expect(within(preview).getByText('Maria Souza')).toBeInTheDocument()
  })

  it('switches templates and re-renders the signature accordingly', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /Minimalista Vertical/ }))

    const preview = screen.getByTestId('signature-render')
    // The minimalist template has no <img>, unlike the default classic template.
    expect(within(preview).queryByRole('img')).not.toBeInTheDocument()
  })
})
