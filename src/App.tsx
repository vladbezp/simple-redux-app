import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import PhotoList from "./components/PhotoList";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
            <hr/>
            <PhotoList/>
        </div>
    );
};

export default App;