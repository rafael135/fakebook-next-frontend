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
            return [...prevState.filter(post => post.uuid != (action.payload as PostType).uuid)];
            break;
        default:
            return prevState;
    }
}