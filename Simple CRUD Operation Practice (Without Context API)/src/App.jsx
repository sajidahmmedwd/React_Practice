
import { useState } from 'react'
import './App.css'
import Users from './components/Users/Users'
import NewUsers from './components/NewUsers/NewUsers'


function App() {
  const [users, setUsers] = useState([
    {id: 1, userName: "Rahim"},
    {id: 2, userName: "Karim"}
  ])


  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id)
    setUsers(filteredUsers)
    
  }
  const handleAddNewUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser])
    
}

  return (
    <div>
      <NewUsers
        handleAddNewUser = {handleAddNewUser}
      ></NewUsers>
      <Users 
        users = {users}
        handleDeleteUser = {handleDeleteUser}
      ></Users>
      
        
    </div>
  )
}

export default App
