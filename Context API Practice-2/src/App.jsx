import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ResetCount from './components/ResetCount/ResetCount';

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <CountContext.Provider value={[count, setCount]}>

        <Navbar></Navbar>
        
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

        <ResetCount></ResetCount>

      </CountContext.Provider>
      
        
      
      
    </div>
  )
}

export default App
