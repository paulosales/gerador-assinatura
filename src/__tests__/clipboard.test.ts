import { afterEach, describe, expect, it, vi } from 'vitest'
import { copyFormattedSignature, copyPlainText } from '../lib/clipboard'

describe('copyFormattedSignature', () => {
  const originalClipboardItem = window.ClipboardItem

  afterEach(() => {
    vi.unstubAllGlobals()
    window.ClipboardItem = originalClipboardItem
    vi.restoreAllMocks()
  })

  it('uses the ClipboardItem API when available and succeeds', async () => {
    const write = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, clipboard: { write } })
    // @ts-expect-error - minimal ClipboardItem stub for the test environment
    window.ClipboardItem = class {
      items: Record<string, Blob>
      constructor(items: Record<string, Blob>) {
        this.items = items
      }
    }

    const result = await copyFormattedSignature('<table></table>', 'plain text')

    expect(result).toEqual({ success: true, method: 'clipboard-item' })
    expect(write).toHaveBeenCalledTimes(1)
  })

  it('falls back to execCommand when ClipboardItem/write throws', async () => {
    const write = vi.fn().mockRejectedValue(new Error('not allowed'))
    vi.stubGlobal('navigator', { ...navigator, clipboard: { write } })
    // @ts-expect-error - minimal ClipboardItem stub for the test environment
    window.ClipboardItem = class {
      items: Record<string, Blob>
      constructor(items: Record<string, Blob>) {
        this.items = items
      }
    }
    document.execCommand = vi.fn().mockReturnValue(true)

    const result = await copyFormattedSignature('<table></table>', 'plain text')

    expect(result).toEqual({ success: true, method: 'exec-command' })
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })

  it('reports failure when every copy strategy is unavailable', async () => {
    vi.stubGlobal('navigator', { ...navigator, clipboard: undefined })
    // @ts-expect-error - simulate a browser without ClipboardItem support
    window.ClipboardItem = undefined
    document.execCommand = vi.fn().mockReturnValue(false)

    const result = await copyFormattedSignature('<table></table>', 'plain text')

    expect(result.success).toBe(false)
  })
})

describe('copyPlainText', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('uses navigator.clipboard.writeText when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } })

    const result = await copyPlainText('<table></table>')

    expect(result).toEqual({ success: true, method: 'clipboard-item' })
    expect(writeText).toHaveBeenCalledWith('<table></table>')
  })
})
