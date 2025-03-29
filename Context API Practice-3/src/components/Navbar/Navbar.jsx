import React, { useContext } from 'react'
import InsideNav from '../InsideNav/InsideNav'
import { CountContext } from '../../App'

const Navbar = () => {

  const [count, setCount] = useContext(CountContext)

  return (
    <div>
        <InsideNav></InsideNav>
        <button onClick={() => setCount(count + 5)}>Plus Count- {count}</button>
    </div>
  )
}

export default Navbar