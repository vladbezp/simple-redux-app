import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {...todos} = useTypedSelector(state => state.todo)
    const pages = [1, 2, 3, 4, 5]

    const {fetchTodos, setTodoPage} = useActions();

    useEffect(() => {
        fetchTodos(todos.page, todos.limit);
    }, [todos.page, todos.limit]);

    if (todos.loading) {
        return <h1>Loading...</h1>
    }

    if (todos.error) {
        return <h1>{todos.error}</h1>
    }

    return (
        <div>
            {
                todos.todos.map(todo =>
                    <div key={todo.id}>{todo.id} - {todo.title}</div>
                )
            }
            {
                <div style={{display: 'flex'}}>
                    {
                        pages.map(p =>
                            <div
                                key={p}
                                onClick={() => setTodoPage(p)}
                                style={{
                                    border: p === todos.page ? '2px solid green' : '1px solid gray',
                                    padding: 10,
                                    cursor: 'pointer'
                                }}
                            >
                                {p}
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default TodoList;