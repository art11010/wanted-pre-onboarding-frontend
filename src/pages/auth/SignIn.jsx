import { signIn } from '../../api/api';
import AuthForm from '../../components/auth/AuthForm';

export default function SignIn() {
  return (
    <AuthForm
      actionText="로그인"
      errorText="이메일 또는 비밀번호를 확인해주세요."
      btnTestid="signin-button"
      apiFunction={signIn}
    />
  );
}
