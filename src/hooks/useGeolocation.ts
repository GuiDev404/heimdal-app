import { useEffect, useState } from 'react'
// import useSWR from 'swr'
// import { getGeolocationAproximate } from '../services'
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

// BUENOS AIRES
const DEFAULT_COORDS: Coord = {
  lat: -34.6075682,
  lon: -58.4370894
}

const useGeolocation = (): useGeolocationResult => {
  const [coords, setCoords] = useState<Coord | null>(DEFAULT_COORDS)

  // const isEnabled = !actualLocation ? 'geolocation' : null
  // const { data, isLoading } = useSWR<GeoApproximate>(isEnabled, getGeolocationAproximate, {
  //   // revalidateOnMount: false,
  //   revalidateOnFocus: false
  // })

  // useEffect(() => {
  //   if (!isLoading && data) {
  //     setCoords({ lat: data.lat, lon: data.lon })
  //   }
  // }, [isLoading, data])

  // useEffect(() => {
  //   const options = {
  //     enableHighAccuracy: true, // el navegador intentará obtener la ubicación con la mayor precisión posible
  //     // timeout: 5000,
  //     maximumAge: 0 // el navegador no usará ubicaciones antiguas en cache y intentará obtener una nueva ubicación
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       const crd = pos.coords

  //       setCoords({ lat: crd.latitude, lon: crd.longitude })
  //     },
  //     () => {
  //       setCoords(DEFAULT_COORDS)
  //     },
  //     options
  //   )
  // }, [])

  useEffect(() => {
    const options = {
      enableHighAccuracy: true, // el navegador intentará obtener la ubicación con la mayor precisión posible
      // timeout: 5000,
      maximumAge: 0 // el navegador no usará ubicaciones antiguas en cache y intentará obtener una nueva ubicación
    }

    const successCb = (pos) => {
      const crd = pos.coords
      setCoords({ lat: crd.latitude, lon: crd.longitude })
    }

    const permissionHandler = (status: PermissionStatus) => {
      navigator.geolocation.getCurrentPosition(successCb, null, options)

      status.onchange = () => {
        if (status.state === 'denied') {
          setCoords(DEFAULT_COORDS)
          return
        }

        if (status.state === 'granted') {
          navigator.geolocation.getCurrentPosition(successCb, null, options)
        }
      }
    }

    navigator.permissions.query({ name: 'geolocation' })
      .then(permissionHandler)
      .catch(() => {
        setCoords(DEFAULT_COORDS)
      })
  }, [])

  const changeCoords = (newCoord: Coord) => {
    setCoords(newCoord)
  }

  return { coords, changeCoords }
}

export default useGeolocation
