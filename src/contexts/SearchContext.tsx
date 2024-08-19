"use client"

import { SearchContextFilterType, SearchContextType } from "@/types/Contexts";
import { createContext, ReactNode, useState } from "react";

export const SearchContext = createContext<SearchContextType>(null);

export const SearchContextProvider = ({children}: {children: ReactNode}) => {
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState<SearchContextFilterType>(null);



    return(
        <SearchContext.Provider value={{ term, setTerm, filter, setFilter }}>
            {children}
        </SearchContext.Provider>
    );
}