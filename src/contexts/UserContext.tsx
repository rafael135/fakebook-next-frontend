"use client"

import { userReducer } from "@/reducers/UserReducer";
import { UserContextType } from "@/types/Contexts";
import { UserReducerType } from "@/types/Reducers";
import { UserType } from "@/types/User";
import { createContext, ReactNode, useEffect, useLayoutEffect, useReducer, useState } from "react";

export const UserContext = createContext<UserContextType>(null);

const LOGGED_USER_KEY = "loggedUser";
const LOGGED_USER_TOKEN_KEY = "loggedUserToken";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [loggedUser, dispatchLoggedUser] = useReducer<UserReducerType>(userReducer, null);
    const [token, setToken] = useState<string | null>(null);
    const [initialized, setInitialized] = useState<boolean>(false);


    useLayoutEffect(() => {
        if(typeof window == "undefined") {
            return;
        }

        if(initialized == false) {
            setInitialized(true);
            dispatchLoggedUser({ type: "initialize", payload: JSON.parse(sessionStorage.getItem(LOGGED_USER_KEY) ?? "{}") });

            setToken(sessionStorage.getItem(LOGGED_USER_TOKEN_KEY));
        }


        if(loggedUser != null && initialized == true) {
            if(JSON.stringify(loggedUser) == "{}") { return; }
            sessionStorage.setItem(LOGGED_USER_KEY, JSON.stringify(loggedUser));
        }

        if(token != null && initialized == true) {
            sessionStorage.setItem(LOGGED_USER_TOKEN_KEY, token ?? "");
        }
    }, [loggedUser, token]);

    return(
        <UserContext.Provider value={{ loggedUser: loggedUser, dispatchLoggedUser: dispatchLoggedUser, token: token, setToken: setToken }}>
            {children}
        </UserContext.Provider>
    );
}