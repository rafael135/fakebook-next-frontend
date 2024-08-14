import { UserType } from "./User"



export type UserReducerType = {
    payload: UserType | null;
    action: "set" | "initialize";
};