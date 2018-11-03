# 🏴‍☠️ React Pirate

## _Hooks for React 16.7 and above. Arrrr._

## Installation

With [`npm`](https://npmjs.org/):

```
npm install react-pirate
```

With [`yarn`](https://yarnpkg.com/):

```
yarn add react-pirate
```

## Usage

### Utility hooks

- `usePrevious` stores a value so you can compare it to the current value ! Quite useful to store a piece of props or state and compare changes between renders:

  ```jsx
  import React, { useState } from 'react'
  import { usePrevious } from 'react-pirate'

  function Pirate(props) {
    const [shipCount, setShipCount] = useState(props.ship ? 1 : 0)
    const previousShip = usePrevious(props.ship)

    if (props.ship && previousShip !== props.ship) {
      setShipCount(shipCount + 1)
    }

    switch (shipCount) {
      case 0:
        return <p>I am an aspiring pirate !</p>
      case 1:
        return <p>I have served on one ship !</p>
      default:
        return (
          <p>I am a veteran pirate. I have served on {shipCount} ships !</p>
        )
    }
  }
  ```

- `useTimeout` and `useInterval` are used for timing:

  ```jsx
  import React, { useState } from 'react'
  import { useTimeout, useInterval, usePrevious } from 'react-pirate'

  function Pirate(props) {
    const [currentTime, setCurrentTime] = useState(0)
    const [previousTime, setPreviousTime] = useState(0)
    const previousShip = usePrevious(props.ship)

    if (props.ship !== previousShip) {
      setPreviousTime(currentTime)
    }

    useInterval(() => setCurrentTime(currentTime + 1000), 1000)

    return (
      <div>
        <p>I've been serving on this ship for {currentTime} seconds !</p>
        {previousTime && (
          <p>
            Before that, I served on {previousShip} for {previousTime} seconds !
          </p>
        )}
      </div>
    )
  }

  function Ship(props) {
    useTimeout(() => {
      if (props.isAtSea) {
        props.returnToPort()
      }
    }, 1000)

    return (
      <p>{props.name} can't sail for too long or it'll run out of water!</p>
    )
  }
  ```

- `useToggle` to easily manage a boolean value:

  ```jsx
  import React from 'react'
  import { useToggle } from 'react-pirate'

  function Pirate(props) {
    const sleeping = useToggle(false)

    if (props.isNight) {
      sleeping.setTrue()
    }

    return (
      <div>
        <p>I am {sleeping.value ? 'sleeping' : 'awake'} right now.</p>
        <button onClick={sleeping.toggle}>
          {sleeping.value ? 'Wake up' : 'Sleep'}
        </button>
      </div>
    )
  }
  ```

- ... More to come !

### Lifecycle hooks

Lifecycle hooks helps you simulate your good ol' `React.Component` lifecycle methods with hooks. These hooks use `useEffect` internally, but you can specify another React hook if needed :

- `componentDidMount`:

  ```jsx
  import React, { useLayoutEffect } from 'react'
  import { useMount } from 'react-pirate'

  function Ship(props) {
    useMount(() => {
      // quite similar to `componentDidMount`
    })

    return <p>This is my Ship, its name is {props.name}</p>
  }

  function Captain(props) {
    useMount(
      () => {
        // similar to `componentDidMount`
      },
      { hook: useLayoutEffect },
    )

    return <p>This is the captain of the {props.shipName} !</p>
  }
  ```

- `componentDidUpdate`:

  ```jsx
  import React, { useLayoutEffect } from 'react'
  import { useUpdate, useLegacyUpdate } from 'react-pirate'

  function Ship(props) {
    useUpdate(() => {
      // quite similar to `componentDidUpdate`
    })

    return <p>This is my Ship, its name is {props.name}</p>
  }

  function Captain(props) {
    useUpdate(
      () => {
        // similar to `componentDidUpdate`
      },
      { hook: useLayoutEffect },
    )

    return <p>This is the captain of the {props.shipName} !</p>
  }
  ```

- `componentWillUnmount`:

  ```jsx
  import React, { useLayoutEffect } from 'react'
  import { useUnmount, useLegacyUnmount } from 'react-pirate'

  function Ship(props) {
    useUnmount(() => {
      // quite similar to `componentWillUnmount`
    })

    return <p>This is my Ship, its name is {props.name}</p>
  }

  function Captain(props) {
    useUnmount(
      () => {
        // similar to `componentWillUnmount`
      },
      { hook: useLayoutEffect },
    )

    return <p>This is the captain of the {props.shipName} !</p>
  }
  ```

- `getDerivedStateFromProps` has no need for hook ! Just update your state in your component:

  ```jsx
  import React from 'react'
  import { useState } from 'react'

  function FirstMate(props) {
    const [captain, setCaptain] = useState(null)

    if (!captain && props.ship) {
      setCaptain(props.ship.captain)
    }

    return <p>I am the first mate of captain {captain.name} until my death !</p>
  }
  ```

- `getSnapshotBeforeUpdate`, `getDerivedStateFromError`, `componentDidCatch`: 🏳️ We surrender ! [React does not provide solutions for these hooks yet](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

```

```
