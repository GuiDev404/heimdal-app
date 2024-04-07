import React from 'react'
import PreviewWeatherItem from './PreviewWeatherItem'
import { List } from '../types/APIResponseWeather'

type PreviewListWeatherProps = {
  isLoading: boolean
  initQty?: number
  endQty?: number
  list?: List[]
}

const PreviewListWeather: React.FC<PreviewListWeatherProps> = ({ isLoading, list, initQty = 0, endQty }) => {
  return isLoading
    ? [...Array(7).keys()].map(idx => <PreviewWeatherItem key={idx} isLoading={isLoading} />)

    : list?.slice(initQty, endQty).map(item => {
      const date = new Date(item.dt * 1000)
      const dayShortName = date.toLocaleDateString(navigator.language, { weekday: 'short' })
      let hours: string | number = date.getHours()
      let minutes: string | number = date.getMinutes()
      hours = hours < 10 ? `0${hours}` : hours
      minutes = minutes < 10 ? `0${minutes}` : minutes

      return (
        <PreviewWeatherItem
          key={item.dt}
          isLoading={isLoading}
          dayShortName={dayShortName}
          hours={hours}
          minutes={minutes}
          icon={item.weather[0].icon}
          temp={item.main.temp}
        />
      )
    })
}

export default PreviewListWeather
