import React from 'react'

const User = ({user, handleDeleteUser}) => {
    const {id, userName} = user;

    const handleDelete = (id) => {
        handleDeleteUser(id);
        
    }

  return (
    <div>
        <h3>User ID: {id}</h3>
        <h1>User Name: {userName}</h1>
        <button onClick={() => {handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default User