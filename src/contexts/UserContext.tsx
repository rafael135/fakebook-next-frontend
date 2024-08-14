import { useUserReducer } from "@/reducers/UserReducer";
import { UserReducerType } from "@/types/Reducers";
import { UserType } from "@/types/User";
import { createContext, ReactNode, useReducer, useState } from "react";




export type UserContextType = {
    loggedUser: UserType | null;
    dispatchLoggedUser: React.Dispatch<UserReducerType>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null;


export const UserContext = createContext<UserContextType>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [loggedUser, dispatchLoggedUser] = useReducer(useUserReducer, null, JSON.parse(sessionStorage.getItem("loggedUser") ?? "{}"));
    const [token, setToken] = useState<string | null>(null);

    return(
        <UserContext.Provider value={{ loggedUser: loggedUser, dispatchLoggedUser: dispatchLoggedUser, token: token, setToken: setToken }}>
            {children}
        </UserContext.Provider>
    );
}