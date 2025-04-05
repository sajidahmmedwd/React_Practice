import { useState } from 'react'
import './App.css'
import Users from './components/Users/Users'
import NewUsers from './components/NewUsers/NewUsers'
import { UserContext, UsersProvider } from './context/UserContext'


function App() {

  return (
    
    
      <div>
        <UsersProvider>
          <NewUsers></NewUsers>
          <Users></Users> 
        </UsersProvider>
      </div>
    
    
  )
}

export default App
