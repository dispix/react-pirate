export function useInterval(fn: Function, delay: number): void
export function useMount(fn: Function): void
export function usePrevious<T>(value: T): T
export function useTimeout(fn: Function, delay: number): void
export function useToggle(
  initialValue: boolean,
): {
  value: boolean
  toggle: () => void
  setValue: (value: boolean) => void
  setTrue: () => void
  setFalse: () => void
}
export function useUnmount(fn: Function): void
export function useUpdate(fn: Function): void
