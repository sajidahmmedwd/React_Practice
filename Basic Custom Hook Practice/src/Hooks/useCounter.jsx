import React, { useState } from 'react'

const useCounter = (initialValue = 0) => {

    const [counter, setCounter ] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

  return [counter, increment, decrement];
    
}

export default useCounter