/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// Imported components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [filtredTodos, setFilteredTodos] = useState([]);


  // In your useEffect for initializing the todos from local storage, 
  // make sure to update the state using the 'setTodos' function. It seems you are using 'setTodos'(todoLocal); 
  //which should work, but just to be safe, you can use a functional update to ensure the latest state is used.
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos((prevTodos) => [...prevTodos, ...todoLocal]);
      console.log(todoLocal);
    }
  }, []);

  useEffect(() => {
    console.log("todos after loading from local storage:", todos);
    handleFilter();
    saveLocalTodos();
  }, [todos, todoStatus]);

  console.log(localStorage.getItem("todos"));

  const handleFilter = () => {
    switch (todoStatus) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
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
      {/* Rendering Condition: Ensure that you are rendering your components 
      only when the data is available. If todos is initially empty, 
      you might want to conditionally render the TodoList component.*/}
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filtredTodos={filtredTodos}
        />
      )}
    </div>
  );
}

export default App;
