import {useAppDispatch} from "./useAppDispatch";
import ActionsCreator from "../store/actions-creator";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(ActionsCreator, dispatch);
}