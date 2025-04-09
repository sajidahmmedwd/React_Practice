import React, { useState } from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter1 = () => {
    const [counter, increment, decrement] = useCounter(10);

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        {/* <button onClick={reset}>Reset</button> */}
    </div>
  )
}

export default Counter1