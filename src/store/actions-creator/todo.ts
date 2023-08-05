import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "react";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            const todos = response.data;
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: todos});
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error occurred'});
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}