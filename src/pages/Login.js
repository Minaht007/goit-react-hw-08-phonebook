import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { Form } from 'components/UI/Form/Form';
import { useAuth } from 'hooks';
import { LoadingUser } from 'components/UI/Loading/Loading';

const Login = () => {
  const dispath = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = ({ email, password }) => {
    dispath(logIn({ email: email, password: password }));
  };
  return (
    <>
      {isLoading && <LoadingUser />}
      <div style={{ padding: 30 }}>
        <Form
          onSubmit={handleSubmit}
          onType={{ name: false, email: true, password: true }}
        />
      </div>
    </>
  );
};

export default Login;
