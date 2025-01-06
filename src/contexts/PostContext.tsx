"use client"

import { postReducer } from "@/reducers/PostReducer";
import { PostContextType } from "@/types/Contexts";
import { PostType } from "@/types/Post";
import { PostReducerType } from "@/types/Reducers";
import { UserType } from "@/types/User";
import { createContext, useContext, useEffect, useReducer } from "react";


export const PostContext = createContext<PostContextType>(null);

const testUser: UserType = {
    id: "sdasda-dasdasd-dasdsad",
    name: "Test",
    email: "test@gmail.com",
    avatar: "/img/profile-picture-5.jpg",
    friends: [],
    phone: "(19) 98917-7880"
};

const testPost: PostType = {
    author: testUser,
    body: "Texto para testar o post de teste",
    createdAt: "2024-22-09",
    updatedAt: "2024-22-09",
    likes: 0,
    id: "27388181-23823783-283823",
    liked: false
};

const POSTS_KEY = "posts";

type props = {
    children: React.ReactNode;
}

export const PostContextProvider = ({ children }: props) => {

    const [posts, dispatchPosts] = useReducer(postReducer, [testPost]);


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

export const usePosts = () => {
    const postsCtx = useContext(PostContext);

    if(postsCtx == null) {
        throw new Error("Using posts context outside provider")
    }

    return postsCtx;
}