import { useEffect } from 'react'

/**
 * Wraps `setTimeout`. Triggers the function after a given delay.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useTimeout(fn, delay) {
  useEffect(() => {
    const id = setTimeout(fn, delay)
    return () => clearTimeout(id)
  })
}
