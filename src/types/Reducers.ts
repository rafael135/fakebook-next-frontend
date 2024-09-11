import { PostType } from "./Post";
import { UserType } from "./User"


export type UserReducerActionType = {
    payload: UserType | null;
    type: "initialize" | "set";
}

export type UserReducerType = (prevState: UserType | null, action: UserReducerActionType) => UserType | null;



export type PostReducerActionType = {
    payload: PostType | PostType[];
    type: "initialize" | "add" | "delete";
}

export type PostReducerType = (prevState: PostType[], action: PostReducerActionType) => PostType[];