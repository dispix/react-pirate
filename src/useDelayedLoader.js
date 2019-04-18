import { useState, useRef, useEffect } from 'react'

export default function useDelayedLoader(loading, delay) {
  const [delayed, setDelayed] = useState(false)
  const timer = useRef()

  useEffect(() => {
    clearTimeout(timer.current)

    if (loading) {
      timer.current = setTimeout(() => {
        setDelayed(true)
      }, delay)
    } else {
      setDelayed(false)
    }

    return () => clearTimeout(timer.current)
  }, [loading, delay])

  return delayed
}
