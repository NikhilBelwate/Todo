interface PropsInterface {
    todo: {
      id: number;
      text: string;
      completed: boolean;
    };
    toggleTodo: (id: number) => void;
  }
  export default PropsInterface;