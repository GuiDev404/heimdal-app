import React from 'react'
import { obtenerDireccionViento } from '../utils'

interface CurrentWeatherInfoProps {
  hasData: boolean
  temp?: number
  cityName?: string
  cityCountry?: string
  feelsLike?: number
  humidity?: number
  windDeg?: number
  windSpeed?: number
}

const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = ({ hasData, temp, cityName, cityCountry, feelsLike, humidity, windDeg, windSpeed }) => {
  return hasData
    ? (
      <>
        <div className='bg-gray-200 animate-pulse w-32 mx-auto h-24 p-3 rounded-md' />
        <div className='bg-gray-200 animate-pulse w-40 mx-auto h-1 my-4 p-3 rounded-md' />
        <div className='bg-gray-200 animate-pulse w-3/4 mx-auto h-1 p-3 rounded-md' />
      </>
      )
    : (
      <>
        <h2 className='text-6xl md:text-8xl font-thin font-display'>
          {temp}ºc
        </h2>
        <h3 className='text-xl text-gray-600'>
          {cityName}, {cityCountry}
        </h3>
        <div className='flex flex-wrap gap-2 my-4 justify-center'>
          <span>
            Sensación termica: <strong> {feelsLike}º </strong>{' '}
          </span>{' '}
          •
          <span>
            Humedad: <strong> {humidity}% </strong>
          </span>{' '}
          •
          <p className='flex flex-col gap-2'>
            <span>
              Viento:
              <strong>
                {' '}
                {obtenerDireccionViento(windDeg)} - {' '}
                {windSpeed && Math.round(windSpeed)} km/h
              </strong>
            </span>
          </p>
        </div>
      </>
      )
}

export default CurrentWeatherInfo
