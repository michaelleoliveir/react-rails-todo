import { useEffect, useState } from 'react';

import './App.css';
import { get_todos, create_todo, delete_todo } from './api/endpoints';

import Header from './components/Header/Header';
import { Todo } from './components/Todo/Todo';
import { AddCard } from './components/AddCard/AddCard';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async() => {
      const todos = await get_todos();
      setTodos(todos);
      console.log(todos);
    }
    fetchTodos();
  },[]);

  const addTodo = async(todo_name, description) => {
    const todo = await create_todo(todo_name, description);
    setTodos([todo, ...todos])
  }

  const deleteTodo = async(id) => {
    delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <AddCard addTodo={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
