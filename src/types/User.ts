import { FriendType } from "./Friend";




export type UserType = {
    uuid: string;
    avatar: string | null;
    name: string;
    email: string;
    phone: string;
    friends: FriendType[];
    
};