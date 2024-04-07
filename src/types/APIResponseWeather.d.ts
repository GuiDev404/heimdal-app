export interface MainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

// export enum MainEnum {
//   Clear = 'Clear',
//   Clouds = 'Clouds',
// }

// export enum Description {
//   AlgoDeNubes = 'algo de nubes',
//   CieloClaro = 'cielo claro',
//   MuyNuboso = 'muy nuboso',
//   Nubes = 'nubes',
//   NubesDispersas = 'nubes dispersas',
// }

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

// export enum Pod {
//   D = 'd',
//   N = 'n',
// }

export interface Sys {
  pod: string;
}

export interface List {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string | Date;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface CityWeather {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
