import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Lauout from 'components/Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'Routes/RestrictedRoute';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { LoadingUser } from 'components/UI/Loading/Loading';


const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

export const App = () => {
  const dispath = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <div>
      <h1>Fetching user data... </h1>
      <LoadingUser />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Lauout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={RegisterPage} />
          }
        />
      </Route>
    </Routes>
  );
};
