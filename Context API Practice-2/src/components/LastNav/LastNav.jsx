import React, { useContext } from 'react'
import { CountContext } from '../../App'

const LastNav = () => {

    const [count, setCount] = useContext(CountContext)

  return (
    <div>
        <button onClick={() => setCount(count * 2)}>Multiple Count- {count}</button>
    </div>
  )
}

export default LastNav