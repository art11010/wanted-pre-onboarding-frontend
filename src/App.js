import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    } else {
      navigate('/signin');
    }
  }, []);

  return <Outlet />;
}
