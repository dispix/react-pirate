import { useEffect } from 'react'

/**
 * Triggers the function when the component is unmounted. You can pass options
 * in the second parameter:
 * - hook: by default uses the `useEffect` hook, but you can replace it with
 *   `useLayoutEffect` or `useMutationEffect` if needed.
 * @param {Function} fn function to call
 * @param {object} options
 * @return {void}
 */
export default function useUnmount(fn, { hook = useEffect } = {}) {
  hook(() => fn, [])
}
