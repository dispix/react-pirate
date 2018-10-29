import { useState } from 'react'

/**
 * Stores a boolean and offers methods to update it.
 * @param {boolean} initialValue
 * @return {object} a toggle object with the current value and update methods
 */
export default function useToggle(initialValue = true) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}
