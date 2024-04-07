import React from 'react'

interface PreviewWeatherItemProps {
  isLoading: boolean;
  dayShortName?: string;
  hours?: string | number;
  minutes?: string | number;
  temp?: number;
  icon?: string;
}

const PreviewWeatherItem: React.FC<PreviewWeatherItemProps> = ({
  isLoading,
  dayShortName,
  hours,
  icon,
  minutes,
  temp
}) => {
  return isLoading
    ? (
      <div className='min-w-24 bg-gray-200 animate-pulse rounded-md h-40 border p-4 flex flex-col justify-center items-center' />
      )
    : (
      <div className='min-w-24 rounded-md h-40 border p-4 flex flex-col justify-center items-center'>
        <p className='flex flex-col items-center capitalize text-sm'>
          <span className='uppercase'> {dayShortName} </span>
          <span>
            {' '}
            {hours}:{minutes}{' '}
          </span>
        </p>
        <img
          width={65}
          className='drop-shadow-md'
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <span className='capitalize text-sm'> {temp}ºc </span>
      </div>
      )
}

export default PreviewWeatherItem
