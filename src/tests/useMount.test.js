import { render } from 'react-testing-library'

import useMount from '../useMount'

function Test({ cb }) {
  useMount(cb)

  return null
}

describe('useMount', () => {
  const cb = jest.fn()
  const { rerender } = render(<Test cb={cb} />)

  rerender()

  expect(cb).toHaveBeenCalledTimes(1)
})
