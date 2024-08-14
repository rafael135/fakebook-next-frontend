import { UserReducerType } from "@/types/Reducers";
import { UserType } from "@/types/User";





export const useUserReducer = (state: UserType | null, action: UserReducerType) => {
    switch(action.action) {
        case "set":
            return {...action.payload};
            break;
        case "initialize":
            return action.payload;
    }
}