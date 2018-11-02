import { useEffect, useCallback } from 'react'

/**
 * Wraps `setInterval`. Triggers the function each interval.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useInterval(fn, interval) {
  const memoizedFn = useCallback(fn)
  useEffect(() => {
    const id = setInterval(memoizedFn, interval)
    return () => clearInterval(id)
  }, [])
}
