import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Context_1_Provider } from './Contexts/Context_1'



function App() {
  

  return (
    <div>
      
      <Context_1_Provider>
        <Navbar></Navbar>
        <button> count- </button>
      </Context_1_Provider>
        

        
    </div>
  )
}

export default App
