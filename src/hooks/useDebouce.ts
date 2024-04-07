import { useEffect, useState } from 'react'

interface HookParams {
  value: string
  time?: number
}

const useDebouce = ({ value, time = 2000 }: HookParams) => {
  const [debounceValue, setDebouceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouceValue(value)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, time])

  return debounceValue
}

export default useDebouce
