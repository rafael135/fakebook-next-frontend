import { UserType } from "./User"


export type UserReducerActionType = {
    payload: UserType | null;
    type: "initialize" | "set";
}

export type UserReducerType = (prevState: UserType | null, action: UserReducerActionType) => UserType | null;