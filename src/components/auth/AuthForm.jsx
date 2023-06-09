import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from './auth.module.css';

export default function AuthForm({
  actionText,
  errorText,
  btnTestid,
  apiFunction,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    validation: false,
    error: false,
  });

  const validateEmail = (email) => {
    const re = /@/;
    return re.test(email);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, error: false });
  };

  const handleError = () => {
    const { email, password } = form;
    const isValidEmail = validateEmail(email);
    const isValidPassword = password.length >= 8;

    setForm({ ...form, validation: !(isValidEmail && isValidPassword) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiFunction(form.email, form.password);

      if (res.access_token) {
        localStorage.setItem('token', res.access_token);
        navigate('/todo');
      } else {
        navigate('/signin');
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
      <h2 className="text-primary">{actionText}</h2>
      <form onSubmit={handleSubmit}>
        <label className="w-full pb-5">
          이메일
          <input
            type="text"
            placeholder="이메일"
            className="input input-bordered input-accent w-full mt-2"
            data-testid="email-input"
            name="email"
            value={form.email}
            onChange={handleFormChange}
          />
        </label>
        <label className="w-full pb-5">
          비밀번호
          <input
            type="password"
            placeholder="비밀번호"
            className="input input-bordered input-accent w-full mt-2"
            data-testid="password-input"
            name="password"
            value={form.password}
            onChange={handleFormChange}
          />
        </label>
        {form.error && <span>{errorText}</span>}
        <button
          type="submit"
          data-testid={btnTestid}
          className="btn btn-secondary mt-5 px-10"
          disabled={form.validation}
        >
          {actionText}
        </button>
        <span className="mt-5 text-gray-500">
          {actionText === '로그인'
            ? '아이디가 없다면?'
            : '이미 아이디가 있다면?'}
          <Link
            to={actionText === '로그인' ? '/signup' : '/signin'}
            className="ml-2 text-secondary"
          >
            {actionText === '로그인' ? '회원가입' : '로그인'}
          </Link>
        </span>
      </form>
    </div>
  );
}
