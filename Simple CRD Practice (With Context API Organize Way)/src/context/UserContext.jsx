import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([
        {id: 1, userName: "Rahim"},
        {id: 2, userName: "Karim"}
      ])

    return (
        <UserContext.Provider value={[users, setUsers]}>
            {children}
        </UserContext.Provider>
    )
}


