import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
enum Filter {
    All,
    Active,
    Completed,
  }
  //test case for the rendring the to do list with given todos
test('renders TodoList component with given todos', () => {
  const todos = [
    { id: 1, text: 'Meetings', completed: false },
    { id: 2, text: 'Parking', completed: true },
  ];
  const { getByText } = render(<TodoList todos={todos} addTodo={() => {}} toggleTodo={() => {}} filter={Filter.All} setFilter={() => {}} />);
  
  todos.forEach(todo => {
    const todoElement = getByText(todo.text);
    expect(todoElement).toBeInTheDocument();
  });
});
//test case for add new todo when the form is submit
test('adds new todo when form is submitted', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TodoList todos={[]} addTodo={addTodoMock} toggleTodo={() => {}} filter={Filter.All} setFilter={() => {}} />);
  const input = getByPlaceholderText('Enter new todo');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo task' } });
  fireEvent.click(addButton);

  expect(addTodoMock).toHaveBeenCalledWith('New Todo task');
});

  // test case for when todo list is empty
  test('renders correctly when todo list is empty', () => {
    const { getByText } = render(<TodoList todos={[]} addTodo={() => {}} toggleTodo={() => {}} filter={Filter.All} setFilter={() => {}} />);
    
    expect(getByText('No todos to show.')).toBeInTheDocument();
  });