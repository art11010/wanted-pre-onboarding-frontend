import { signUp } from '../../api/api';
import AuthForm from '../../components/auth/AuthForm';

export default function SignUp() {
  return (
    <AuthForm
      actionText="회원가입"
      errorText="동일한 이메일이 이미 존재합니다."
      btnTestid="signup-button"
      apiFunction={signUp}
    />
  );
}
