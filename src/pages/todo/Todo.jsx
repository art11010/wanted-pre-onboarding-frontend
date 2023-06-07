import { useState } from 'react';
import { updateTodo } from '../../api/api';

export default function Todo({ todoItem, token }) {
  const { id, todo, isCompleted } = todoItem;
  const [todoCheck, setTodoCheck] = useState(isCompleted);

  const handleUpdateTodo = async () => {
    setTodoCheck(!todoCheck);
    // console.log(token, id, todo, todoCheck);
    const res = await updateTodo(token, id, todo, todoCheck);
  };

  return (
    <li key={id}>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="checkbox"
          checked={todoCheck}
          onChange={handleUpdateTodo}
        />
        <span>{todo}</span>
      </label>
      <div className="shrink-0 flex gap-2">
        <button className="text-sm" data-testid="modify-button">
          수정
        </button>
        <button className="text-sm" data-testid="delete-button">
          삭제
        </button>

        {/* <input data-testid="modify-input" />
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button">취소</button> */}
      </div>
    </li>
  );
}
