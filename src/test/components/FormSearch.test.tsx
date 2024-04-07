import { screen, waitFor } from '@testing-library/react'

import FormSearch from '../../components/FormSearch'

import { searchResult } from '../../mocks/index.ts'
import { userEvent } from '@testing-library/user-event'
import { server } from '../setup.ts'
// import { handlers } from '../msw/handlers.ts'

import { customRender } from '../utils.tsx'

const getWeatherOfLocationMock = vi.fn()

describe('<FormSearch />', () => {
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })

  it('deberia mostrar "Busque una ciudad" si el input esta vacio', async () => {
    // server.use(...handlers)
    customRender(<FormSearch getWeatherOfLocation={getWeatherOfLocationMock} />)

    const firstItem = await screen.findAllByRole('listitem')

    expect(firstItem[0].innerText).toBe('Busque una ciudad')
  })

  it('Deberia realizar una busqueda', async () => {
    customRender(<FormSearch getWeatherOfLocation={getWeatherOfLocationMock} />)

    const input: HTMLInputElement = screen.getByRole('searchbox')
    expect(input).toBeDefined()
    await userEvent.type(input, 'suardi')

    expect(input.value).toBe('suardi')

    // server.use(handlers[0])
    await waitFor(() => screen.getByText(/Buscando.../i))

    // server.use(handlers[2])

    const resultado = searchResult[0]
    const expectedText = `${resultado.name}${resultado?.state ? `, ${resultado?.state}` : ''}, ${resultado.country}`
    expect((await screen.findAllByRole('listitem')).length).toBe(4)
    expect(screen.getByText(expectedText)).toBeDefined()
  })

  it('Deberia llamar a la funcion de buscar', async () => {
    customRender(<FormSearch getWeatherOfLocation={getWeatherOfLocationMock} />)

    const input: HTMLInputElement = screen.getByRole('searchbox')
    await userEvent.type(input, 'suardi')

    expect(input.value).toBe('suardi')

    // server.use(handlers[0])

    // await waitFor(() => screen.getByText(/Buscando.../i))

    await waitFor(() => screen.getByText(/2 resultados para suardi/i))

    const listado = await screen.findAllByRole('listitem')
    console.log(listado[2]?.innerHTML)

    await userEvent.click(listado[2])
    await waitFor(() => {
      const resultado = searchResult[0]

      expect(getWeatherOfLocationMock).toHaveBeenCalledWith({ lat: resultado.lat, lon: resultado.lon })
    })
  })
})
