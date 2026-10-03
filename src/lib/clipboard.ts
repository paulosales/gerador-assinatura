export type CopyMethod = 'clipboard-item' | 'exec-command' | 'text-fallback'

export interface CopyResult {
  success: boolean
  method?: CopyMethod
  error?: unknown
}

/**
 * Copies a rendered signature to the clipboard so it can be pasted (Ctrl/Cmd+V)
 * directly into Gmail/Outlook/Apple Mail/Thunderbird signature settings, keeping
 * tables, colors and links intact.
 *
 * Strategy:
 * 1. `navigator.clipboard.write` with a `ClipboardItem` carrying both `text/html`
 *    and `text/plain` representations (modern Chrome/Edge/Safari).
 * 2. Fallback: render the HTML into a hidden, selected DOM node and use the
 *    legacy `document.execCommand('copy')`, which copies the *rendered* content
 *    as rich text — this works in browsers that reject custom clipboard mimetypes.
 * 3. Last resort: copy the raw HTML string as plain text so the user has
 *    something to paste, even if it isn't rendered.
 */
export async function copyFormattedSignature(htmlString: string, plainText: string): Promise<CopyResult> {
  if (
    typeof navigator !== 'undefined' &&
    navigator.clipboard &&
    typeof window.ClipboardItem !== 'undefined'
  ) {
    try {
      const htmlBlob = new Blob([htmlString], { type: 'text/html' })
      const textBlob = new Blob([plainText], { type: 'text/plain' })
      const item = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': textBlob,
      })
      await navigator.clipboard.write([item])
      return { success: true, method: 'clipboard-item' }
    } catch (err) {
      // Falls through to the execCommand-based fallback below.
      return copyFormattedSignatureWithExecCommand(htmlString, err)
    }
  }
  return copyFormattedSignatureWithExecCommand(htmlString)
}

function copyFormattedSignatureWithExecCommand(htmlString: string, previousError?: unknown): CopyResult {
  if (typeof document === 'undefined') {
    return { success: false, error: previousError ?? new Error('document is not available') }
  }
  const container = document.createElement('div')
  container.setAttribute('contenteditable', 'true')
  container.style.position = 'fixed'
  container.style.left = '-9999px'
  container.style.top = '0'
  container.style.opacity = '0'
  container.innerHTML = htmlString
  document.body.appendChild(container)

  try {
    const range = document.createRange()
    range.selectNodeContents(container)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)

    const succeeded = document.execCommand('copy')
    selection?.removeAllRanges()
    if (succeeded) {
      return { success: true, method: 'exec-command' }
    }
    return copyPlainTextFallback(htmlString, previousError)
  } catch (err) {
    return copyPlainTextFallback(htmlString, err ?? previousError)
  } finally {
    document.body.removeChild(container)
  }
}

function copyPlainTextFallback(text: string, previousError?: unknown): CopyResult {
  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    const succeeded = document.execCommand('copy')
    document.body.removeChild(textarea)
    return succeeded ? { success: true, method: 'text-fallback' } : { success: false, error: previousError }
  } catch (err) {
    return { success: false, error: err ?? previousError }
  }
}

/** Copies a raw string (e.g. the signature's HTML source code) as plain text. */
export async function copyPlainText(text: string): Promise<CopyResult> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return { success: true, method: 'clipboard-item' }
    } catch (err) {
      return copyPlainTextFallback(text, err)
    }
  }
  return copyPlainTextFallback(text)
}
