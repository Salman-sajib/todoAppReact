/* eslint-disable react/prop-types */
export default function Todo({ text, todo, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }

  function handleCompleted() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {' '}
        {text}{' '}
      </li>
      <button onClick={handleCompleted} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={handleDelete} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}
