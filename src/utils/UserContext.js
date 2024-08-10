import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Dafault User"
})

export default UserContext;