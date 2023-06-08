import { useEffect, useRef, useState } from 'react';
import { getTodos, createTodo } from '../../api/api';
import todo from './todo.module.css';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const inputRef = useRef(null);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!todoInput) return;

    try {
      await createTodo(todoInput);
      setTodoInput('');
      inputRef.current.focus();
      handleGetTodos();
    } catch (error) {}
  };

  const handleGetTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <div className={`${todo.todo_box}`}>
      <h2 className="text-primary">TODO List</h2>
      <div className="mt-10 pb-2">
        <form onSubmit={handleCreateTodo} className="flex gap-2">
          <input
            type="text"
            className="input input-bordered input-accent w-full"
            data-testid="new-todo-input"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            ref={inputRef}
          />
          <button
            type="submit"
            className="btn btn-secondary"
            data-testid="new-todo-add-button"
          >
            추가
          </button>
        </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todoItem={todo} />
        ))}
      </ul>
    </div>
  );
}
