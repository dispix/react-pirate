import { useEffect } from 'react'

export default function useTimeout(fn, delay) {
  useEffect(() => {
    const id = setTimeout(fn, delay)
    return () => clearTimeout(id)
  })
}
