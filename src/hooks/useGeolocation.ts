import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { getGeolocationAproximate } from '../services'
import { Coord } from '../types'

export interface GeoApproximate {
  status: string;
  country: string;
  countryCode: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
}

interface useGeolocationResult {
  coords: Coord | null,
  changeCoords: (coord: Coord)=> void
}

const useGeolocation = (actualLocation: boolean = false): useGeolocationResult => {
  const [coords, setCoords] = useState<Coord | null>(null)

  const isEnabled = !actualLocation ? 'geolocation' : null
  const { data, isLoading } = useSWR<GeoApproximate>(isEnabled, getGeolocationAproximate, {
    // revalidateOnMount: false,
    revalidateOnFocus: false
  })

  useEffect(() => {
    if (!isLoading && data) {
      setCoords({ lat: data.lat, lon: data.lon })
    }
  }, [isLoading, data])

  useEffect(() => {
    if (actualLocation) {
      const options = {
        enableHighAccuracy: true,
        // timeout: 5000,
        maximumAge: 0
      }

      const positionId = navigator.geolocation.watchPosition((pos) => {
        const crd = pos.coords

        setCoords({ lat: crd.latitude, lon: crd.longitude })
      }, null, options)

      return () => {
        navigator.geolocation.clearWatch(positionId)
      }
    }
  }, [actualLocation])

  const changeCoords = (newCoord: Coord) => {
    setCoords(newCoord)
  }

  return { coords, changeCoords }
}

export default useGeolocation
