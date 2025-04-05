import React, { useContext } from 'react'
import User from '../User/User'
import { UserContext } from '../../context/UserContext';

const Users = () => {

  const [users, setUsers] = useContext(UserContext);

  return (
    <div>
        {
            users.map(user => <User
                key={user.id}
                user={user}
            ></User>)
        }
    </div>
  )
}

export default Users