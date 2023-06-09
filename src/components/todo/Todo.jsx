import { useEffect, useState } from 'react';

export default function Todo({ todoItem, onUpdateTodo, onDeleteTodo }) {
  const { id, todo, isCompleted } = todoItem;

  const [inputModify, setInputModify] = useState(todo);
  const [checkModify, setCheckModify] = useState(isCompleted);
  const [activeModify, setActiveModify] = useState(false);

  const handleDeleteTodo = () => {
    onDeleteTodo(id);
  };

  useEffect(() => {
    onUpdateTodo(id, inputModify, checkModify);
  }, [inputModify, checkModify]);

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
              }}
            />
            <span>{inputModify}</span>
          </label>
          <div className="shrink-0">
            <button
              className="text-sm"
              data-testid="modify-button"
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
            data-testid="modify-input"
            className="input input-bordered input-accent w-full h-10"
            value={inputModify}
            onChange={(e) => setInputModify(e.target.value)}
          />
          <div className="shrink-0 flex">
            <button
              className="text-sm"
              data-testid="submit-button"
              onClick={() => {
                setActiveModify(!activeModify);
              }}
            >
              제출
            </button>
            <button
              className="ml-2 text-sm"
              data-testid="cancel-button"
              onClick={() => {
                setActiveModify(!activeModify);
              }}
            >
              취소
            </button>
          </div>
        </>
      )}
    </li>
  );
}
