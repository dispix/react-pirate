import { useRef, useEffect } from 'react'

export default function useUpdate(fn, { hook = useEffect } = {}) {
  const mounting = useRef(true)
  hook(() => {
    if (mounting.current) {
      mounting.current = false
    } else {
      fn()
    }
  })
}
