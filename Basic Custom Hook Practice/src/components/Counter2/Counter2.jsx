import React from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter2 = () => {
    const [counter, increment, decrement] = useCounter(5);

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        {/* <button onClick={reset}>Reset</button> */}
    </div>
  )
}

export default Counter2