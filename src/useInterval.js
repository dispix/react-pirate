import { useEffect } from 'react'

/**
 * Wraps `setInterval`. Triggers the function each interval.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useInterval(fn, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = fn
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
