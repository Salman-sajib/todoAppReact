/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Imported components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState('all');
  const [filtredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
      console.log(todoLocal);
    }
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todos, todoStatus]);

  const handleFilter = () => {
    switch (todoStatus) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(todoLocal);
  //     console.log(todoLocal);
  //   }
  // };

  return (
    <div className='App'>
      <header>
        <h1>My ToDo List</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setTodoStatus={setTodoStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} filtredTodos={filtredTodos} />
    </div>
  );
}

export default App;
