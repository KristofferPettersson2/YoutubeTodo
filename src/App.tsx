import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import {v4 as uuid} from 'uuid'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");


  function handleAddTodo() {
    const tmpTodos: Array<{}> = todos;
    tmpTodos.push({ id: uuid(), name: inputText, complete: false })
    setInputText("");
  }

  return (
    <>
      <TodoList todos={todos} />
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
