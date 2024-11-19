import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-2"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

