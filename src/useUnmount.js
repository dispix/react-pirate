import { useEffect } from 'react'

export default function useUnmount(fn, { hook = useEffect } = {}) {
  hook(() => fn, [])
}
