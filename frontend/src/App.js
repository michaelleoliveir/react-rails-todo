import { useEffect, useState } from 'react';

import './App.css';
import { get_todos } from './api/endpoints';

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
  },[])

  return (
    <div className="App">
      <Header />
      <AddCard />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
