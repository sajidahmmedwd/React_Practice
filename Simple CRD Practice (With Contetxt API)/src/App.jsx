
import { useState } from 'react'
import './App.css'
import Users from './components/Users/Users'
import NewUsers from './components/NewUsers/NewUsers'
import { UserContext } from './context/UserContext'


function App() {
  const [users, setUsers] = useState([
    {id: 1, userName: "Rahim"},
    {id: 2, userName: "Karim"}
  ])

  return (
    <UserContext.Provider value={[users, setUsers]}>
    
      <div>
        <NewUsers></NewUsers>
        <Users></Users> 
      </div>
    
    </UserContext.Provider>
  )
}

export default App
