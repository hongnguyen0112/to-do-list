import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import AddToDo from './components/AddToDo';

function App() {
  const [todoItem, setTodo] = useState([]);

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <AddToDo setTodo={setTodo} itemNum={todoItem.length}/>
      <TodoItem todos={todoItem} setTodo={setTodo}/>
    </div>
  );
}

export default App;
