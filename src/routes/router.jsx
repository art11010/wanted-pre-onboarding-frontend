import App from '../App';
import SignUp from '../pages/auth/SignUp';
import SignIn from '../pages/auth/SignIn';
import Todo from '../pages/todo/Todo';

export const RouterInfos = [
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
];
