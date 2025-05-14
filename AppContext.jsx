import { createContext } from "react";
import { doctors } from "../assets/asset";

// Create the context
export const AppContext = createContext()

// AppContextProvider component
const AppContextProvider = (props) => {
    const value = {
        doctors
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider