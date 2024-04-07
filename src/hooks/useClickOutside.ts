import { RefObject, useCallback, useEffect } from 'react'

interface ParamsHook<T extends HTMLElement> {
  ref: RefObject<T>,
  callback: () => void
}

function useClickOutside <T extends HTMLElement> ({ ref, callback }: ParamsHook<T>) {
  const handleClick = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }, [ref, callback])

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])
}

export default useClickOutside
