import { PropsWithChildren, ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'

export const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
