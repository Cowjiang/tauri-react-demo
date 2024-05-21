import '@testing-library/jest-dom'

import { mockIPC } from '@tauri-apps/api/mocks'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { mockServer } from '../../__mocks__/zerotier.ts'
import NotificationProvider from '../../components/providers/NotificationProvider.tsx'
import { useZeroTierStore } from '../../store/zerotier.ts'

// Zustand mocking
vi.mock('zustand')

// HTTP request mocking
beforeAll(() => {
  mockIPC(async (cmd, args) => {
    if (cmd === 'tauri' && (args.message as any)?.cmd === 'httpRequest') {
      const { url, method } = (args.message as any).options
      const res = await fetch(url, {
        method,
      })
      return {
        url,
        status: res.status,
        ok: res.ok,
        data: JSON.stringify(await res.json()),
      }
    }
  })
})

beforeEach(() => useZeroTierStore.setState({ serverInfo: { port: 9999, secret: 'test' } }))
beforeAll(() => mockServer.listen({ onUnhandledRequest: 'error' }))
afterAll(() => mockServer.close())
afterEach(() => {
  mockServer.resetHandlers()
  vi.clearAllMocks()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <NotificationProvider>{children}</NotificationProvider>
    </BrowserRouter>
  )
}

const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options })

export { renderWithProviders as render }
