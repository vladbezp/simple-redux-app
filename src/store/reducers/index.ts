import {userReducer} from "./userReducer";
import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {photosReducer} from "./photoReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    photos: photosReducer
})

