import { HttpResponse, http } from 'msw'

import { geolocationResult, searchResult, weatherResult01, weatherResult02 } from '../../mocks/index'

export const handlers = [
  http.get('https://api.openweathermap.org/geo/1.0/direct', async () => {
    // return fetch(bypass(request)).then((response) => response.json())
    console.log('call')
    return HttpResponse.json(searchResult, { status: 200 })
  }),
  http.get('https://api.openweathermap.org/data/2.5/forecast', () => {
    return HttpResponse.json(weatherResult01, { status: 200 })
  }),
  http.get('https://api.openweathermap.org/data/2.5/forecast', () => {
    return HttpResponse.json(weatherResult02, { status: 200 })
  }),
  http.get('http://ip-api.com/json/', () => {
    return HttpResponse.json(geolocationResult, { status: 200 })
  })
]
