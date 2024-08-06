import { createContext, useState } from "react";

const Context = createContext()

const TokentContext = ({children}) => {
    const [token, setToken] = useState(false)
   return( <Context.Provider value={{token, setToken}}>{children}</Context.Provider>)
}

export {Context, TokentContext}