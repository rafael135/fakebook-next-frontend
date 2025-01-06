import { PostType } from "@/types/Post";
import { PostReducerActionType, PostReducerType } from "@/types/Reducers"





export const postReducer: PostReducerType = (prevState: PostType[], action: PostReducerActionType) => {
    switch(action.type) {
        case "initialize":
            return (action.payload as PostType[]);
            break;
        case "add":
            return [...prevState, action.payload as PostType];
            break;
        case "delete":
            return [...prevState.filter(post => post.id != (action.payload as PostType).id)];
            break;
        case "like":
            return [...prevState.map((post) => {
                if(post.id == (action.payload as PostType).id) {
                    post.liked = true;
                    post.likes = post.likes + 1;
                }

                return post;
            })];
            break;
        case "dislike":
            return [...prevState.map((post) => {
                if(post.id == (action.payload as PostType).id) {
                    post.liked = false;
                    post.likes = post.likes - 1;
                }

                return post;
            })];
        default:
            return prevState;
    }
}