import React, { FC } from 'react'

interface Todo {
    todo: { id: string, name: string, complete: boolean };
}

const Todo: FC<Todo> = ({ todo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.complete}/>
            {todo.name}
           
        </div>
    )
}

export default Todo;
