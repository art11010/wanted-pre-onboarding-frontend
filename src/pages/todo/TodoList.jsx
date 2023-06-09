import { useEffect, useRef, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../../api/api';
import todoCss from './todoCss.module.css';
import Todo from '../../components/todo/Todo';

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
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTodo = async (id, inputModify, checkModify) => {
    try {
      await updateTodo(id, inputModify, checkModify);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      handleGetTodos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <div className={todoCss.todo_box}>
      <h2 className="text-primary">할 일 목록</h2>
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
          <Todo
            key={todo.id}
            todoItem={todo}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
