/* eslint-disable react/prop-types */
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filtredTodos }) => {
  console.log("Filtered Todos in TodoList:", filtredTodos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
