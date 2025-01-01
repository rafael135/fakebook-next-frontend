"use client"

import { MenuContextType } from "@/types/Contexts";
import { createContext, useState } from "react";




export const MenuContext = createContext<MenuContextType>(null);


type props = {
    children: React.ReactNode;
}

export const MenuContextProvider = ({ children }: props) => {
    const [showSideMenu, setShowSideMenu] = useState(false);


    return(
        <MenuContext.Provider value={{ showSideMenu, setShowSideMenu }}>
            {children}
        </MenuContext.Provider>
    )

}

