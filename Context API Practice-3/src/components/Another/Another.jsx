import React, { useContext } from 'react'
import { AnotherContext } from '../../App'

const Another = () => {

    const [another, setAnother] = useContext(AnotherContext)

  return (
    <div>
        <button onClick={() => setAnother(another + 100)}>Another- {another}</button>
    </div>
  )
}

export default Another