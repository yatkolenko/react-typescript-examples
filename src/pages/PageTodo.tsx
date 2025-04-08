import { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTodo } from '../store/slices/todoSlice';
import TodoItem from '../components/TodoItem';
import { useTranslation } from 'react-i18next';

const TodoPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [text, setText] = useState('');

  const handleAddTodo = useCallback(() => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  }, [dispatch, text]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-semibold">{t('todo.title')}</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('todo.placeholder')}
          className="flex-1 rounded border p-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTodo();
          }}
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          {t('todo.buttonText')}
        </button>
      </div>
      <div className="rounded bg-white shadow">
        {todos.length === 0 ? (
          <p className="p-4 text-gray-500">{t('todo.empty')}</p>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoPage;
