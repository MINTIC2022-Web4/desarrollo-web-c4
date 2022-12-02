import React, { useState } from 'react'

export const UserContext = React.createContext();

export function UserContextProvider(props) {
    const [jwt, setJwt] = useState("");
    return (
        <UserContext.Provider value={{ jwt, setJwt }}>
            {props.children}
        </UserContext.Provider>
    )
}
