import '@testing-library/jest-dom'

import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import NotificationProvider from '../../components/providers/NotificationProvider.tsx'

vi.mock('zustand')

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
