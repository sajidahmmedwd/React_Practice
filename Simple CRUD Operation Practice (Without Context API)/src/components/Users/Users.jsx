import React from 'react'
import User from '../User/User'

const Users = ({users, handleDeleteUser}) => {
  return (
    <div>
        {
            users.map(user => <User
                key={user.id}
                user={user}
                handleDeleteUser = {handleDeleteUser}
            ></User>)
        }
    </div>
  )
}

export default Users