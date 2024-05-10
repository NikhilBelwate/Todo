import React, { useState } from 'react';
import TodoRecord from '../TodoRecord/TodoRecord';
import TodoPropsInterface from "./TodoPropsInterface"

enum Filter {
  All,
  Active,
  Completed,
}


const TodoList: React.FC<TodoPropsInterface> = ({ todos, addTodo, toggleTodo, filter, setFilter }) => {
  const [text, setText] = useState('');
  const filteredTodos = todos.filter(todo => {
    if (filter === Filter.Active) {
      return !todo.completed;
    }
    if (filter === Filter.Completed) {
      return todo.completed;
    }
    return true;
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <div style={{ paddingLeft: 250 }}>
      <h1 className='App-header'>Todo List App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder="Enter new todo" />&nbsp;
        <button type="submit">Add</button>
      </form>

      <div>
        <br></br>
        <button onClick={() => setFilter(Filter.All)}>All</button>&nbsp;
        <button onClick={() => setFilter(Filter.Active)}>Active</button> &nbsp;
        <button onClick={() => setFilter(Filter.Completed)}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <TodoRecord key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
