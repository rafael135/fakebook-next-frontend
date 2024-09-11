import { PostContextProvider } from "@/contexts/PostContext"
import { SearchContextProvider } from "@/contexts/SearchContext"
import { UserContextProvider } from "@/contexts/UserContext"
import { ReactNode } from "react"




const Providers = ({ children }: { children: ReactNode }) => {


    return(
        <UserContextProvider>
            <PostContextProvider>
                <SearchContextProvider>
                    {children}
                </SearchContextProvider>
            </PostContextProvider>
        </UserContextProvider>
    );
}

export default Providers;