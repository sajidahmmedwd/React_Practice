import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';

const NewUsers = () => {

    const [users, setUsers] = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleSubmit = () => {
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), userName: userName}
        setUsers(prevUsers => [...prevUsers, newUser])
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