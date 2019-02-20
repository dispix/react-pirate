import { useEffect } from 'react'

/**
 * Wraps `setTimeout`. Triggers the function after a given delay.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useTimeout(fn, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = fn
  })

  useEffect(() => {
    function cb() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(cb, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
