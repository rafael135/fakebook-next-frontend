import { UserType } from "./User";


export interface PostType extends Object {
    id: string;
    author: UserType;
    body: string;
    likes: number;
    createdAt: string;
    updatedAt: string;
    liked: boolean;
};