import { MenuContextProvider } from "@/contexts/MenuContext"
import { PostContextProvider } from "@/contexts/PostContext"
import { SearchContextProvider } from "@/contexts/SearchContext"
import { UserContextProvider } from "@/contexts/UserContext"
import { ReactNode } from "react"




const Providers = ({ children }: { children: ReactNode }) => {


    return(
        <MenuContextProvider>
            <UserContextProvider>
                <PostContextProvider>
                    <SearchContextProvider>
                        {children}
                    </SearchContextProvider>
                </PostContextProvider>
            </UserContextProvider>
        </MenuContextProvider>
    );
}

export default Providers;