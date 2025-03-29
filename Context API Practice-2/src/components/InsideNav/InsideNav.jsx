import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { CountContext } from '../../App'

const InsideNav = () => {

  const [count, setCount] = useContext(CountContext)

  return (
    <div>
        <LastNav></LastNav>
        <button onClick={() => setCount(count - 1)}>Minus Count- {count}</button>
    </div>
  )
}

export default InsideNav