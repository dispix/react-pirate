import { useEffect } from 'react'

/**
 * Wraps `setInterval`. Triggers the function each interval.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useInterval(fn, interval) {
  useEffect(() => {
    const id = setInterval(fn, interval)
    return () => clearInterval(id)
  })
}
