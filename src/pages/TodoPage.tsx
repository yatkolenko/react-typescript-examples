import React, { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTodo } from '../store/todoSlice';
import TodoItem from '../components/TodoItem';

// Todo page component with todo input and list
const TodoPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [text, setText] = useState('');

  // Handle adding a new todo item
  const handleAddTodo = useCallback(() => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  }, [dispatch, text]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <div className="bg-white shadow rounded">
        {todos.length === 0 ? (
          <p className="p-4 text-gray-500">No todos available. Add one!</p>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoPage;
