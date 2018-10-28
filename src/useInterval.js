import { useEffect } from 'react'

export default function useInterval(fn, delay) {
  useEffect(() => {
    const id = setInterval(fn, delay)
    return () => clearInterval(id)
  })
}
