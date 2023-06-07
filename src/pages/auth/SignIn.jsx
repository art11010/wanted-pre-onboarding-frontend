import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../../api/api';
import auth from './auth.module.css';

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    validation: false,
    error: false,
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, error: false });
  };
  const handleError = () => {
    function validateEmail(email) {
      const re = /@/;
      return re.test(form.email);
    }

    if (!validateEmail(form.email) || form.password.length < 8) {
      setForm({ ...form, validation: true });
    } else {
      setForm({ ...form, validation: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn(form.email, form.password);

      if (res.access_token) {
        localStorage.setItem('token', res.access_token);
        navigate('/todo');
      }
    } catch (error) {
      setForm({ ...form, error: true });
    }
  };

  useEffect(() => {
    handleError();
  }, [form.email, form.password]);

  return (
    <div className={`${auth.auth_box}`}>
      <h2 className="text-primary">로그인</h2>
      <form onSubmit={handleSubmit}>
        <label className="w-full pb-5">
          Email
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-accent w-full mt-2"
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
            className="input input-bordered input-accent w-full mt-2"
            data-testid="password-input"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
        </label>
        {form.error && <span>동일한 이메일이 이미 존재합니다.</span>}
        <button
          type="submit"
          data-testid="signin-button"
          className="btn btn-secondary mt-5 px-10"
          disabled={form.validation}
        >
          로그인
        </button>
        <span className="mt-5 text-gray-500">
          아이디가 없다면?
          <Link to="/signup" className="ml-2 text-secondary ">
            회원가입
          </Link>
        </span>
      </form>
    </div>
  );
}
