import React, { useState } from 'react'

const NewUsers = ({handleAddNewUser}) => {
    const [userName, setUserName] = useState('');
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleSubmit = () => {
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), userName: userName}
        handleAddNewUser(newUser);
        setUserName("");
    }
    


  return (
    <div>
        <h2>User Registration</h2>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleUserNameChange} type="text" name='username' value={userName} required/>
            <button>Add User</button>
        </form>
        <hr />
    </div>
  )
}

export default NewUsers