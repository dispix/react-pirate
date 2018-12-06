import { useEffect, useRef } from 'react'

/**
 * Stores a value and pass it back to the component on each render. Useful for
 * example to store a prop and compare it to the newest value.
 * @param {*} value
 * @return {*} the value stored
 */
export default function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
