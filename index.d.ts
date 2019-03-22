export function useInterval(fn: () => void, delay: number): void
export function useMount(fn: () => void): void
export function usePrevious<T>(value: T): T
export function useTimeout(fn: () => void, delay: number): void
export function useToggle(
  initialValue: boolean,
): {
  value: boolean
  toggle: () => void
  setValue: (value: boolean) => void
  setTrue: () => void
  setFalse: () => void
}
export function useUnmount(fn: () => void): void
export function useUpdate(fn: () => void): void
