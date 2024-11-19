import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="flex mb-4">
    //   <input
    //     type="text"
    //     value={todoText}
    //     onChange={(e) => setTodoText(e.target.value)}
    //     placeholder="Add a new task..."
    //     className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //   />
    //   <button
    //     type="submit"
    //     className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
    //   >
    //     Add
    //   </button>
    // </form>







    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4">
  <input
    type="text"
    value={todoText}
    onChange={(e) => setTodoText(e.target.value)}
    placeholder="Add a new task..."
    className="flex-1 p-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <button
    type="submit"
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  >
    Add
  </button>
</form>

  );
};

export default TodoForm;
