import { UserReducerType } from "@/types/Reducers";
import { UserType } from "@/types/User";





export const userReducer: UserReducerType = (prevState, action) => {
    switch(action.type) {
        case "set":
            return {...action.payload!};
            break;
        case "initialize":
            return action.payload;
    }
}