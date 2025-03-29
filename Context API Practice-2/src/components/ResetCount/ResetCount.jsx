import React, { useContext, useState } from 'react'
import { CountContext } from '../../App'

const ResetCount = () => {

    const [count, setCount] = useContext(CountContext)
    const [resetCount, setResetCount] = useState(0);

  return (
    <div>
        <button onClick={() => setCount(count * 0)}>Reset Count- {resetCount}</button>
    </div>
  )
}

export default ResetCount