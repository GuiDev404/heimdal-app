export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
export const BASE_URL = 'https://api.openweathermap.org'
const GEO_URL_APROXIMADO = 'http://ip-api.com/json/?fields=status,message,lat,lon'

export const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then((res) => res.json())

export const getWeatherByLocation = (coords: string) => {
  return fetcher(`/data/2.5/forecast?${coords}&units=metric&lang=es&appid=${API_KEY}`)
}

export const getSearchResults = (querySearch: string) => {
  return fetcher(`/geo/1.0/direct?${querySearch}&lang=es&appid=${API_KEY}`)
}

export const getGeolocationAproximate = () => {
  return fetch(GEO_URL_APROXIMADO).then((res) => res.json())
}
