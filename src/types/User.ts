import { UserRelationType } from "./UserRelation";




export type UserType = {
    id: string;
    avatar: string | null;
    name: string;
    email: string;
    phone: string;
    friends: UserRelationType[];
};