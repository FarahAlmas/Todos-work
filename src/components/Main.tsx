'use client'
import { useState } from 'react';
import TodoList from './todo/TodoList';
import TodoForm from './todo/TodoForm';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
   
    <div className="min-h-screen flex flex-col items-center bg-blue-200 p-4">
  <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">To-Do List</h1>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
  </div>
</div>


  );
};

export default Home;
