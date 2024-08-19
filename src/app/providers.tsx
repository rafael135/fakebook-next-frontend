import { SearchContextProvider } from "@/contexts/SearchContext"
import { UserContextProvider } from "@/contexts/UserContext"
import { ReactNode } from "react"




const Providers = ({ children }: { children: ReactNode }) => {


    return(
        <UserContextProvider>
            <SearchContextProvider>
                {children}
            </SearchContextProvider>
        </UserContextProvider>
    );
}

export default Providers;