import { useEffect, useState } from 'react';
import { getTodos, createTodo } from '../../api/api';
import todo from './todo.module.css';

export default function Todo() {
  const token = localStorage.getItem('token');

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const todoList = async () => {
    try {
      const res = await getTodos(token);
      setTodos(res);
    } catch (error) {}
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await createTodo(token, todoInput);
      todoList();
    } catch (error) {}
  };

  useEffect(() => {
    todoList();
  }, []);

  return (
    <div className={`${todo.todo_box}`}>
      <h2 className="text-primary">TODO List</h2>
      <div className="mt-10 pb-2">
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="text"
            className="input input-bordered input-accent w-full"
            data-testid="new-todo-input"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
              console.log(todoInput);
            }}
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
          <li key={todo.id}>
            <label className="cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span>{todo.todo}</span>
            </label>
            <div className="shrink-0 flex gap-2">
              <button className="text-sm" data-testid="modify-button">
                수정
              </button>
              <button className="text-sm" data-testid="delete-button">
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
