import { useState } from 'react';
import './login.css';

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleError = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      handleError('error', '이메일 형식이 아닙니다.');
    } else if (form.password.length < 8) {
      handleError(
        'error',
        '비밀번호는 8자 이상이어야 합니다.'
      );
    } else {
      handleError('error', '');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="login-wrap">
      <h2 className="text-primary">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className="w-full pb-5">
          Email
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-secondary w-full mt-2"
            data-testid="email-input"
            name="email"
            value={form.email}
            onChange={handleForm}
          />
        </label>
        <label className="w-full pb-5">
          Password
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-secondary w-full mt-2"
            data-testid="password-input"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
        </label>
        <span className="text-error">{form.error}</span>
        <button
          type="submit"
          data-testid="signup-button"
          className="btn btn-accent mt-5 px-10"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
