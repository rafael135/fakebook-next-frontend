import { UserType } from "./User";


export type PostType = {
    uuid: string;
    author: UserType;
    body: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
};