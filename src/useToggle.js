import { useState } from 'react'

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}
