import { CityWeather, SearchLocation } from '../types'

export const geolocationResult = {
  status: 'success',
  lat: -29.2895,
  lon: -63.8297
}

export const searchResult: SearchLocation[] = [
  {
    name: 'Suardi',
    lat: 45.034656,
    lon: 8.742945,
    country: 'IT',
    state: 'Lombardy'
  },
  {
    name: 'Municipio de Suardi',
    local_names: {
      es: 'Municipio de Suardi'
    },
    lat: -30.5342762,
    lon: -61.9610646,
    country: 'AR',
    state: 'Santa Fe'
  }
]

export const weatherResult00 = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1712534400,
      main: {
        temp: 15.06,
        feels_like: 14.37,
        temp_min: 13.84,
        temp_max: 15.06,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1008,
        humidity: 67,
        temp_kf: 1.22
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.86,
        deg: 230,
        gust: 1.8
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2024-04-08 00:00:00'
    }
  ],
  city: {
    id: 3166055,
    name: 'Suardi',
    coord: {
      lat: 45.034656,
      lon: 8.742945
    },
    country: 'IT',
    population: 1000,
    timezone: 7200,
    sunrise: 1712551925,
    sunset: 1712599265
  }
}

export const weatherResult01: CityWeather = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1705849200,
      main: {
        temp: 25.54,
        feels_like: 25.25,
        temp_min: 25.54,
        temp_max: 25.54,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 974,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04d'
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 5.38,
        deg: 76,
        gust: 6.47
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2024-01-21 15:00:00'
    }

  ],
  city: {
    id: 3832658,
    name: 'Villa Ojo de Agua',
    coord: {
      lat: -29.2895,
      lon: -63.8297
    },
    country: 'AR',
    population: 5832,
    timezone: -10800,
    sunrise: 1705829704,
    sunset: 1705879052
  }
}

export const weatherResult02: CityWeather = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1706130000,
      main: {
        temp: 31.87,
        feels_like: 30.11,
        temp_min: 31.87,
        temp_max: 31.95,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 969,
        humidity: 24,
        temp_kf: -0.08
      },
      clouds: {
        all: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d'
        }
      ],
      wind: {
        speed: 5.3,
        deg: 112,
        gust: 4.92
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2024-01-24 21:00:00'
    }
  ],
  city: {
    id: 3832658,
    name: 'Villa Ojo de Agua',
    coord: {
      lat: -29.2895,
      lon: -63.8297
    },
    country: 'AR',
    population: 5832,
    timezone: -10800,
    sunrise: 1706089062,
    sunset: 1706138193
  }
}
