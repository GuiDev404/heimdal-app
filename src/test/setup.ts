// import '@testing-library/happy-dom'
import { setupServer } from 'msw/node'
import { beforeAll, afterEach, afterAll } from 'vitest'

import { handlers } from './msw/handlers'

export const server = setupServer(...handlers)

beforeAll(() => {
  // Start the interception.
  server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})

afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})
