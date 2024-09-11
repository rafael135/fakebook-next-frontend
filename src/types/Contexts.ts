import { PostType } from "./Post";
import { PostReducerActionType, UserReducerActionType } from "./Reducers";
import { UserType } from "./User";


export type UserContextType = {
    loggedUser: UserType | null;
    dispatchLoggedUser: React.Dispatch<UserReducerActionType>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null;



export type SearchContextFilterType = "friends" | "profiles" | "posts" | "pages" | "groups" | null;

export type SearchContextType = {
    term: string;
    filter: SearchContextFilterType | null;
    setTerm: React.Dispatch<React.SetStateAction<string>>;
    setFilter: React.Dispatch<React.SetStateAction<SearchContextFilterType>>;
} | null;



export type PostContextType = {
    posts: PostType[];
    dispatchPosts: React.Dispatch<PostReducerActionType>;
} | null;