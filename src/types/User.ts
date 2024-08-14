import { FriendType } from "./Friend";




export type UserType = {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    friends: FriendType[];
    
};