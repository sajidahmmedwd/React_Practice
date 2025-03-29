import { Children, createContext, useState } from "react";

export const Context_1 = createContext();


export const Context_1_Provider = ({children}) => {
    
    const [name, setName] = useState("Hello Programmers..!");

  return (
    <Context_1.Provider value={[name, setName]}>
        {children}
    </Context_1.Provider>
  )
}

