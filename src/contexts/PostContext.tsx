"use client"

import { postReducer } from "@/reducers/PostReducer";
import { PostContextType } from "@/types/Contexts";
import { PostReducerType } from "@/types/Reducers";
import { createContext, useEffect, useReducer } from "react";


export const PostContext = createContext<PostContextType>(null);


const POSTS_KEY = "posts#sjhdis";

type props = {
    children: React.ReactNode;
}

export const PostContextProvider = ({ children }: props) => {

    const [posts, dispatchPosts] = useReducer<PostReducerType>(postReducer, []);


    useEffect(() => {
        if(typeof window == "undefined") {
            return;
        }

        if(posts.length > 0) {
            sessionStorage.setItem(POSTS_KEY, JSON.stringify(posts));
        }
    }, [posts]);

    return(
        <PostContext.Provider value={{ posts: posts, dispatchPosts: dispatchPosts }}>
            {children}
        </PostContext.Provider>
    );
}