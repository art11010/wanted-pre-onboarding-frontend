import { useState } from 'react';
import { updateTodo, deleteTodo } from '../../api/api';

export default function Todo({ todoItem }) {
  const { id, todo, isCompleted } = todoItem;

  const [inputModify, setInputModify] = useState(todo);
  const [checkModify, setCheckModify] = useState(isCompleted);
  const [activeModify, setActiveModify] = useState(false);

  const handleUpdateTodo = () => {
    updateTodo(id, inputModify, !checkModify);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li>
      {!activeModify ? (
        <>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="checkbox"
              checked={checkModify}
              onChange={() => {
                setCheckModify(!checkModify);
                handleUpdateTodo();
              }}
            />
            <span>{inputModify}</span>
          </label>
          <div className="shrink-0">
            <button
              className="text-sm"
              data-testid="activeModify-button"
              onClick={() => setActiveModify(!activeModify)}
            >
              수정
            </button>
            <button
              className="ml-2 text-sm"
              data-testid="delete-button"
              onClick={handleDeleteTodo}
            >
              삭제
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            data-testid="activeModify-input"
            className="input input-bordered input-accent w-full h-10"
            value={inputModify}
            onChange={(e) => setInputModify(e.target.value)}
          />
          <div className="shrink-0 flex">
            <button
              className="text-sm"
              data-testid="submit-button"
              onClick={() => {
                handleUpdateTodo();
                setActiveModify(!activeModify);
              }}
            >
              제출
            </button>
            <button className="ml-2 text-sm" data-testid="cancel-button">
              취소
            </button>
          </div>
        </>
      )}
    </li>
  );
}
