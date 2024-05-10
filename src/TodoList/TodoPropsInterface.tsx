enum Filter {
    All,
    Active,
    Completed,
}
interface TodoPropsInterface {
    todos: { id: number; text: string; completed: boolean }[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}
export default TodoPropsInterface;