# 원티드 프리온보딩 프론트엔드 - 선발 과제

  - 이예지
  - git clone 후, `npm install & npm start` 명령어를 통해서 바로 정상동작이 가능
  - *데모 영상
  - 사용 라이브러리 목록
    - React Router
    - Axios
    - tailwind, daisyui
    - *typescript

---

### :: 1. 로그인 / 회원가입

- `/signup` : 회원가입
- `/signin` : 로그인

  ```html
  <!-- 예시 -->
  <input data-testid="email-input" />     <!-- 이메일 -->
  <input data-testid="password-input" />  <!-- 패스워드 -->
  <button data-testid="signup-button">회원가입</button>
  <button data-testid="signin-button">로그인</button>
  ```

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
  - 로그인 여부에 따른 리다이렉트 처리를 구현
    - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 로 리다이렉트
    - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 로 리다이렉트

---

### :: 2. TODO LIST

- `/todo` : 투두 리스트

  ```html
  <li>
    <label>
      <input type="checkbox" />
      <span>TODO 1</span>
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" />
      <span>TODO 2</span>
    </label>
  </li>
  ```

  - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
  - TODO는 `<li>` tag로 감싸기

  ```html
  <input data-testid="new-todo-input" />
  <button data-testid="new-todo-add-button">추가</button>
  ```
  
  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여


  ```html
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  ```

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여


  ```html
  <input data-testid="modify-input" />
  <button data-testid="submit-button">제출</button>
  <button data-testid="cancel-button">취소</button>
  ```
  
  - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
  - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요

