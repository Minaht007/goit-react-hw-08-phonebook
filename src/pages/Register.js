import { useDispatch } from 'react-redux';

import { Form } from 'components/UI/Form/Form';
import { useAuth } from 'hooks';
import { register } from 'redux/auth/operations';

import { LoadingUser } from 'components/UI/Loading/Loading';

const Register = () => {
  const { isLoading } = useAuth();
  const dispath = useDispatch();

  const hendleSubmit = contact => {
    dispath(register(contact));
  };

  return (
    <>
      {isLoading && <LoadingUser />}
      <div style={{ padding: 30 }}>
        <Form
          onSubmit={hendleSubmit}
          onType={{ name: true, email: true, password: true }}
        />
      </div>
    </>
  );
};

export default Register;
