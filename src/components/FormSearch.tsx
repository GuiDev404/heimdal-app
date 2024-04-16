import React, { useRef, useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import useDebouce from '../hooks/useDebouce'
import { Coord, SearchLocation } from '../types'
import { MapPinIcon } from './Icons'
import { getSearchResults } from '../services'
import useSWR from 'swr'

interface FormSearchProps {
  getWeatherOfLocation: (coords: Coord)=> void
}

const FormSearch: React.FC<FormSearchProps> = ({ getWeatherOfLocation }) => {
  const [showResult, setShowResults] = useState(false)

  const [query, setQuery] = useState('')
  const debouceValue = useDebouce({ value: query, time: 1000 })

  const isEnabledFetchOrNot = debouceValue.trim() ? `q=${debouceValue}&limit=10` : null
  const { data, error, isLoading, mutate } = useSWR<SearchLocation[]>(isEnabledFetchOrNot, getSearchResults, {
    revalidateOnFocus: false,
    keepPreviousData: true
  })

  const clickRef = useRef<HTMLDivElement>(null)
  useClickOutside<HTMLDivElement>({
    ref: clickRef,
    callback: () => {
      setShowResults(false)
    }
  })

  const handleFocus = () => setShowResults(true)

  const handleClick = (coord: Coord) => {
    return () => {
      getWeatherOfLocation(coord)
      setShowResults(false)
    }
  }

  const handleKeyDown = (coord: Coord) => {
    return (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (event.key === 'Enter') {
        getWeatherOfLocation(coord)
        setShowResults(false)
      }
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setQuery(value)

    if (!value) {
      await mutate([], false)
    }
  }

  const classToggleable = showResult ? 'opacity-100 visible' : 'opacity-0 invisible'
  const resultsMesage = data?.length
    ? `${data?.length} resultados para ${debouceValue}`
    : `No hay resultados para ${debouceValue}`

  return (
    <div className='w-full relative' ref={clickRef}>
      <form className='flex border  bg-white gap-x-2 rounded-md items-center overflow-hidden' onSubmit={handleSubmit} autoComplete='nope'>
        <label htmlFor='search' className='text-gray-600 px-2 self-stretch flex justify-center items-center'>
          <MapPinIcon width={20} height={20} />
        </label>
        <input
          type='search'
          className='flex-grow py-2 text-lg outline-none pe-2'
          placeholder='Ingrese una ciudad'
          autoComplete='nope'
          spellCheck='false'
          id='search'
          name='search_location'
          value={query}
          onFocus={handleFocus}
          onChange={handleChange}
        />
      </form>

      <ul className={`flex flex-col border bg-white p-4 gap-y-2 rounded-md overflow-auto mt-2 absolute w-full shadow-lg ${classToggleable} max-h-[305px]`}>
        <li className='text-sm text-gray-600'>
          {isLoading
            ? 'Buscando...'
            : !debouceValue ? 'Busque una ciudad' : (resultsMesage)}
        </li>

        {(!isLoading && error !== null) && <li> {error?.message} </li>}

        {(!isLoading && data) && data.map(resultado => {
          const elementKey = `${resultado.name.split(' ').join('_')}_${resultado.lat}_${resultado.lon}_${resultado.country}`.toLocaleLowerCase()

          return (
            <li
              className='rounded-md cursor-pointer outline-none focus:bg-gray-100 hover:bg-gray-100 p-2 '
              tabIndex={0}
              onClick={handleClick({ lat: resultado.lat, lon: resultado.lon })}
              onKeyDown={handleKeyDown(({ lat: resultado.lat, lon: resultado.lon }))}
              key={elementKey}
            >
              {resultado.name}{resultado?.state ? `, ${resultado?.state}` : ''}, {resultado.country}
            </li>

          )
        })}

      </ul>

    </div>
  )
}

export default FormSearch
