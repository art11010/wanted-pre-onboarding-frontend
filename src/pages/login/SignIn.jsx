import React from 'react';

export default function SignIn() {
  return (
    <form action="">
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signin-button">로그인</button>
    </form>
  );
}
