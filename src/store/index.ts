import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>