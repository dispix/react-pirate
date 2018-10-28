import { useEffect } from 'react'

export default function useMount(fn, { hook = useEffect } = {}) {
  hook(() => void fn(), [])
}
