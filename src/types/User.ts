import { UserRelationType } from "./UserRelation";




export interface UserType extends Object {
    id: string;
    avatar: string | null;
    name: string;
    email: string;
    phone: string;
    friends: UserRelationType[];
}