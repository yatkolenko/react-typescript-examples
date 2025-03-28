import React from 'react';
import { Todo } from '../models/models';
import { toggleTodo, removeTodo } from '../store/slices/todoSlice';
import { useAppDispatch } from '../store/hooks';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between border-b p-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
