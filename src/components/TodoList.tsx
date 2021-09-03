import React, { FunctionComponent } from 'react'
import Todo from "./Todo";

interface TodoList {
    todos: Array<{ id: string, name: string, complete: boolean }>;
}

const TodoList: FunctionComponent<TodoList> = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default TodoList;
