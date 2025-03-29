import React, { useContext } from 'react'
import { Context_1 } from '../../Contexts/Context_1'


const LastNav = () => {
  const [name, setName] = useContext(Context_1)

  return (
    <div>
      <button>LastNav- {name}</button>
    </div>
  )
}

export default LastNav