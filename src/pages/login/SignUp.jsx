import { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleError = () => {
    if (!validateEmail(form.email) || form.password.length < 8) {
      setForm({ ...form, error: true });
    } else {
      setForm({ ...form, error: false });
    }
  };
  const validateEmail = (email) => {
    const re = /@/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    try {
      axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
        email: form.email,
        password: form.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleError();
  }, [form.email, form.password]);

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
        <button
          type="submit"
          data-testid="signup-button"
          className="btn btn-accent mt-5 px-10"
          disabled={form.error}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
