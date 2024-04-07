import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'
import { SWRConfig } from 'swr'

afterEach(() => {
  cleanup()
})

function Providers ({ children }: { children: React.ReactNode | React.ReactElement }) {
  return (
    <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
      {children}
    </SWRConfig>
  )
}

export function customRender (ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: Providers,
    ...options
  })
}
