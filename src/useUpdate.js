import { useRef, useEffect } from 'react'

/**
 * Triggers the function when the component is updated. You can pass options
 * in the second parameter:
 * - hook: by default uses the `useEffect` hook, but you can replace it with
 *   `useLayoutEffect` or `useMutationEffect` if needed.
 * @param {Function} fn
 * @param {object} options
 * @return {void}
 */
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
