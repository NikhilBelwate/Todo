import React from 'react';
import PropsInterface from "./PropsInterface"



const TodoRecord: React.FC<PropsInterface> = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li  className="todo-input-form" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
    </li>
  );
};

export default TodoRecord;