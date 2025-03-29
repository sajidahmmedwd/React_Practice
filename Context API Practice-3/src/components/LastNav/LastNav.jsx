import React, { useContext } from 'react'
import { CountContext } from '../../App'
import Another from '../Another/Another'

const LastNav = () => {

    const [count, setCount] = useContext(CountContext)

  return (
    <div>
      <Another></Another>
      <button onClick={() => setCount(count * 2)}>Multiple Count- {count}</button>
    </div>
  )
}

export default LastNav