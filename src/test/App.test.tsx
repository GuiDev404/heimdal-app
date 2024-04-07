import { screen } from '@testing-library/react'
import App from '../App'

import { customRender } from './utils'

import { server } from './setup'

describe('<App />', () => {
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })

  it('Deberia renderizarse', () => {
    // server.use(...handlers)

    customRender(<App />)

    expect(screen.getByText(/heimdal/i))
  })

  it('Deberia mostrar el clima geolocalizado', async () => {
    // server.use(...handlers)

    customRender(<App />)

    const location = await screen.findByRole('heading', { level: 3 })
    expect(location.innerText).toBe('Villa Ojo de Agua, AR')
  })
})
