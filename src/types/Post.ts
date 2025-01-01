import { UserType } from "./User";


export type PostType = {
    id: string;
    author: UserType;
    body: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
};