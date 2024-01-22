/* eslint-disable react/prop-types */
export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setTodoStatus,
}) {
  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function handleTodoSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInputText('');
  }

  function handleTodoStatus(e) {
    setTodoStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={handleInputText}
        type='text'
        className='todo-input'
      />
      <button onClick={handleTodoSubmit} className='todo-button'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select
          onChange={handleTodoStatus}
          name='todos'
          className='filter-todo'
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
