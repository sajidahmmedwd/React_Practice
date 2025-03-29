import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ResetCount from './components/ResetCount/ResetCount';

export const CountContext = createContext();
export const AnotherContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const [another, setAnother] = useState(20);

  return (
    <div>
      
      <AnotherContext.Provider value={[another, setAnother]}>
        <CountContext.Provider value={[count, setCount]}>
          
          <Navbar></Navbar>
            
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>

          <ResetCount></ResetCount>

        </CountContext.Provider>
      </AnotherContext.Provider>
        
      
      
    </div>
  )
}

export default App
