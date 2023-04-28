import { AppContacts } from 'components/AppContacts/AppContacts';
import { useAuth } from 'hooks';
import { LoadingUser } from 'components/UI/Loading/Loading';

const Contacts = () => {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading && <LoadingUser />}
      <AppContacts />
    </>
  );
};

export default Contacts;
