import { ScrollContainer } from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import useSWR from 'swr'

import CurrentWeatherInfo from './components/CurrentWeatherInfo'
import FormSearch from './components/FormSearch'
import PreviewListWeather from './components/PreviewListWeather'
import Section from './components/Section'

import useGeolocation from './hooks/useGeolocation'
import { getWeatherByLocation } from './services'
import { CityWeather } from './types/APIResponseWeather'

function App () {
  const { coords, changeCoords } = useGeolocation()

  const isEnabledFetchOrNot = coords ? `lat=${coords.lat}&lon=${coords.lon}` : null
  const { data, isLoading } = useSWR<CityWeather>(isEnabledFetchOrNot, getWeatherByLocation)

  return (
    <div className='max-w-[800px] mx-auto w-11/12'>
      <header className='min-h-52 flex flex-col justify-center items-center'>
        <h1 className='text-3xl uppercase font-display mb-4 text-center'>
          HEIMDAL ᛉ
        </h1>

        <FormSearch getWeatherOfLocation={changeCoords} />
      </header>

      <main className='my-4 gap-4 flex flex-col'>

        <Section className='text-center'>
          <CurrentWeatherInfo
            temp={data?.list[0].main.temp}
            hasData={isLoading || !data}
            cityCountry={data?.city.country}
            cityName={data?.city.name}
            feelsLike={data?.list[0].main.feels_like}
            humidity={data?.list[0].main.humidity}
            windDeg={data?.list[0].wind.deg}
            windSpeed={data?.list[0].wind.speed && Math.round(data?.list[0].wind.speed * 3.6)}
          />

        </Section>

        <Section title='Proximas horas'>
          <ScrollContainer className='flex gap-4'>
            <PreviewListWeather initQty={0} endQty={7} isLoading={isLoading} list={data?.list} />
          </ScrollContainer>
        </Section>

        <Section title='Pronostico extendido'>
          <ScrollContainer className='flex gap-4'>
            <PreviewListWeather initQty={7} isLoading={isLoading} list={data?.list} />
          </ScrollContainer>
        </Section>

      </main>

    </div>
  )
}

export default App
